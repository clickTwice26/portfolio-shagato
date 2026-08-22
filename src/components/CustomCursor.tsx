"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on devices that support fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let isHovering = false;
    let isClicking = false;
    let isHidden = true;
    let rafId: number;

    // Velocity tracking for organic non-round tilt
    let lastX = 0;
    let lastY = 0;
    let currentAngle = 45; // Base angle 45deg (diamond)

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (isHidden) {
        isHidden = false;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (followerRef.current) followerRef.current.style.opacity = "1";
      }

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, input, textarea, select, summary, [role="button"], [data-cursor="pointer"], [data-cursor="hover"]'
      );

      if (interactive !== isHovering) {
        isHovering = interactive;
        updateHoverState();
      }
    };

    const onPointerDown = () => {
      isClicking = true;
      if (dotRef.current) {
        dotRef.current.dataset.clicking = "true";
      }
      if (followerRef.current) {
        followerRef.current.dataset.clicking = "true";
      }
      triggerRipple(mouseX, mouseY);
    };

    const onPointerUp = () => {
      isClicking = false;
      if (dotRef.current) {
        dotRef.current.dataset.clicking = "false";
      }
      if (followerRef.current) {
        followerRef.current.dataset.clicking = "false";
      }
    };

    const onMouseLeave = () => {
      isHidden = true;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (followerRef.current) followerRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isHidden = false;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (followerRef.current) followerRef.current.style.opacity = "1";
    };

    const updateHoverState = () => {
      if (dotRef.current) {
        dotRef.current.dataset.hover = isHovering ? "true" : "false";
      }
      if (followerRef.current) {
        followerRef.current.dataset.hover = isHovering ? "true" : "false";
      }
    };

    const triggerRipple = (x: number, y: number) => {
      if (!rippleRef.current) return;
      const ripple = rippleRef.current;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.remove("cursor-ripple-active");
      // Force reflow
      void ripple.offsetWidth;
      ripple.classList.add("cursor-ripple-active");
    };

    // Smooth animation loop
    const animate = () => {
      // Linear interpolation (lerp) for smooth trailing
      const ease = 0.16;
      followerX += (mouseX - followerX) * ease;
      followerY += (mouseY - followerY) * ease;

      // Calculate movement delta for velocity & subtle rotation
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      lastX = mouseX;
      lastY = mouseY;

      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 1) {
        const moveAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
        // Blend movement angle subtly with diamond 45deg orientation
        currentAngle += ((45 + (moveAngle % 30)) - currentAngle) * 0.1;
      } else {
        currentAngle += (45 - currentAngle) * 0.1;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) rotate(45deg) scale(${
          isClicking ? 0.6 : isHovering ? 1.4 : 1
        })`;
      }

      if (followerRef.current) {
        const baseScale = isClicking ? 0.8 : isHovering ? 1.35 : 1;
        const targetRot = isHovering ? 90 : currentAngle;
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) rotate(${targetRot}deg) scale(${baseScale})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="custom-cursor-container pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
    >
      {/* Click ripple shockwave (diamond) */}
      <div
        ref={rippleRef}
        className="cursor-ripple absolute -translate-x-1/2 -translate-y-1/2"
      />

      {/* Trailing geometric follower (sharp diamond / corner reticle) */}
      <div
        ref={followerRef}
        className="cursor-follower absolute left-0 top-0 opacity-0 transition-opacity duration-200 ease-out"
      >
        <div className="follower-shape relative flex items-center justify-center">
          {/* Outer geometric diamond frame */}
          <div className="diamond-frame" />
          {/* Corner tick accents */}
          <span className="corner-tick corner-tick-top" />
          <span className="corner-tick corner-tick-bottom" />
          <span className="corner-tick corner-tick-left" />
          <span className="corner-tick corner-tick-right" />
        </div>
      </div>

      {/* Primary lead cursor (sharp diamond point) */}
      <div
        ref={dotRef}
        className="cursor-dot absolute left-0 top-0 opacity-0 transition-opacity duration-200 ease-out"
      >
        <div className="dot-shape" />
      </div>
    </div>
  );
}
