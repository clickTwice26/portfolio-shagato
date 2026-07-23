import { ScaledBox } from "./ScaledBox";

/**
 * A static recreation of partner.localoy.app's sign-in screen.
 *
 * The real site sends X-Frame-Options: DENY, so it can't be embedded — this
 * stands in for it. Laid out at a desktop size and scaled to fit, so it reads
 * at the same proportions as the live previews next to it.
 *
 * Drop the city illustration at public/localoy-partner-skyline.png and it
 * appears automatically; until then the gradient underneath stands in for it.
 */
const SKYLINE_SRC = "/localoy-partner-skyline.png";

const W = 1280;
const H = 800;

export function PartnerPortalMock() {
  return (
    <ScaledBox width={W} height={H}>
      <div className="flex h-full w-full font-sans">
        {/* left — welcome panel */}
        <div className="relative flex w-1/2 flex-col overflow-hidden bg-[#f3f3f6]">
          <div className="px-10 pt-9">
            <div className="leading-none">
              <div className="text-[26px] font-extrabold tracking-tight text-[#2a1e5f]">
                Localoy
              </div>
              <div className="pl-8 text-[15px] font-bold italic text-[#2a1e5f]">
                Partner
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-12 pb-8 text-center">
            <h1 className="text-[46px] font-extrabold leading-[1.12] tracking-tight text-[#2a1e5f]">
              Welcome to
              <br />
              Localoy
              <br />
              Partner
            </h1>
            <p className="mt-5 text-[16px] text-[#6b7280]">
              Let&apos;s get started in Localoy Partner
            </p>
          </div>

          {/* city illustration — gradient shows through until the art lands */}
          <div className="relative h-[38%] w-full bg-gradient-to-t from-[#b98ad6] via-[#c9a2dd] to-[#f3f3f6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SKYLINE_SRC}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* right — actions */}
        <div className="flex w-1/2 items-center justify-center bg-white">
          <div className="flex w-[320px] flex-col gap-4">
            <div className="rounded-full border border-[#e5e7eb] bg-white py-[14px] text-center text-[16px] text-[#1f2937] shadow-sm">
              Sign In
            </div>
            <div className="rounded-full bg-[#7c3aed] py-[14px] text-center text-[16px] font-semibold text-white">
              Become a Partner
            </div>
          </div>
        </div>
      </div>
    </ScaledBox>
  );
}
