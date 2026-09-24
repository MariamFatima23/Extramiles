import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks, type NavigationLink } from "../../constants/navigation";
import { A } from "../../assets/assetPaths";

/* centred 1280 container – identical to the Figma frame at 1440 */
export const wrap = "mx-auto w-full max-w-[1280px] px-4 sm:px-6 xl:px-0";

type LineProps = { src?: string; inset?: string; className?: string };

export function Line({ src = A.line31, inset = "inset-[-2px_0_0_0]", className = "" }: LineProps) {
  return (
    <div className={`relative h-0 w-[97px] shrink-0 ${className}`}>
      <div className={`absolute ${inset}`}>
        <img alt="" className="block size-full max-w-none" src={src} />
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex items-start gap-[9px]">
      <img alt="ExtraMiles" className="size-[46px] shrink-0 object-cover" src={A.logo} />
      <div className="flex w-[165px] flex-col items-start leading-[normal] text-brand">
        <p className="w-full text-[24px] font-bold">ExtraMiles</p>
        <p className="w-full text-right text-[12px] font-medium">Turn every spend to rewards</p>
      </div>
    </div>
  );
}

function AppStore() {
  return (
    <a href="#" className="relative flex h-[48px] w-[162px] shrink-0 flex-col items-start gap-[10px] py-[4px] pl-[14px] pr-[30px]">
      <img alt="" className="absolute inset-0 block size-full max-w-none" src={A.storeBg} />
      <div className="relative flex h-[39px] w-[137px] shrink-0 items-end gap-[2px]">
        <div className="flex h-[37px] w-[34px] shrink-0 items-center">
          <img alt="" className="h-[31.034px] w-[24.383px] shrink-0" src={A.appleIcon} />
        </div>
        <div className="flex w-[99px] shrink-0 flex-col items-start gap-[8px]">
          <img alt="" className="h-[8.665px] w-[91px] shrink-0" src={A.appleSmall} />
          <img alt="App Store" className="h-[19.609px] w-[91px] shrink-0" src={A.appleBig} />
        </div>
      </div>
    </a>
  );
}

function GooglePlay() {
  return (
    <a href="#" className="relative flex h-[48px] w-[162px] shrink-0 flex-col items-start gap-[10px] py-[4px] pl-[14px] pr-[30px]">
      <img alt="" className="absolute inset-0 block size-full max-w-none" src={A.storeBg} />
      <div className="relative flex h-[39px] w-[137px] shrink-0 items-end gap-[2px]">
        <div className="flex h-[37px] w-[34px] shrink-0 items-center">
          <div className="flex h-[31px] w-[28.545px] shrink-0 items-center justify-center">
            <div className="-scale-y-125 flex-none scale-x-125">
              <div className="relative h-[24.8px] w-[22.836px]">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={A.googleIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[36.021px] w-[99px] shrink-0">
          <div className="absolute inset-[-0.28%_0_0_-0.1%]">
            <img alt="Google Play" className="block size-full max-w-none" src={A.googleText} />
          </div>
        </div>
      </div>
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-[18px] ${className}`}>
      <AppStore />
      <GooglePlay />
    </div>
  );
}

/* ---------------- navbar ---------------- */
const btnFill = "flex cursor-pointer items-center justify-center rounded-[8px] border border-[#0145d5] bg-brand p-[10px] text-[14px] font-medium text-white";
const btnLine = "flex cursor-pointer items-center justify-center rounded-[8px] border border-brand p-[10px] text-[14px] font-medium text-brand";

function Lang() {
  return (
    <div className="flex items-center gap-[6px]">
      <img alt="" className="size-[22px] shrink-0" src={A.globe} />
      <span className="w-[30px] text-[18px] font-medium text-brand">AR</span>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const item = (l: NavigationLink, extra = "") => (
    <NavLink
      key={l.label}
      to={l.to}
      end={l.end}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex ${l.width} items-center justify-center p-[10px] text-[16px] font-bold leading-[normal] whitespace-nowrap ${extra} ${
          isActive ? "border-b border-brand text-brand" : "text-navy"
        }`
      }
    >
      {l.label}
    </NavLink>
  );
  return (
    <header className="relative z-30 w-full bg-page xl:h-[114px]">
      <div className={`${wrap} flex items-center justify-between py-3 xl:py-0 xl:pt-[38px]`}>
        <div className="flex items-center xl:w-[899px] xl:justify-between">
          <Logo />
          <nav className="hidden w-[548px] items-start gap-[14px] xl:flex">{navigationLinks.map((l) => item(l))}</nav>
        </div>
        <div className="hidden xl:block"><Lang /></div>
        <div className="hidden items-center gap-[15px] xl:flex">
          <button className={btnFill}>Join ExtraMiles</button>
          <button className={btnLine}>Sign in</button>
        </div>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex size-[44px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[8px] border border-brand xl:hidden"
        >
          <span className={`h-[2px] w-[20px] bg-brand transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-[20px] bg-brand transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-[20px] bg-brand transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-[rgba(4,69,209,0.15)] bg-page px-4 pb-5 shadow-lg sm:px-6 xl:hidden">
          <nav className="flex flex-col items-start">{navigationLinks.map((l) => item(l, "!w-auto !justify-start"))}</nav>
          <div className="mt-2 flex flex-wrap items-center gap-[15px] px-[10px]">
            <Lang />
            <button className={btnFill}>Join ExtraMiles</button>
            <button className={btnLine}>Sign in</button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- footer ---------------- */
function VDivider() {
  return (
    <div className="hidden h-[112px] w-0 shrink-0 items-center justify-center lg:flex">
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[112px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <img alt="" className="block size-full max-w-none" src={A.line33} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer({ compact = false }: { compact?: boolean }) {
  const col = "flex w-full flex-col items-start gap-[16px] lg:w-[140px] xl:w-[165px]";
  const list = "w-full text-[14px] font-semibold leading-[22px] text-body xl:h-[93px]";
  const title = "w-full text-[15px] font-bold leading-[21px] text-brand xl:h-[20px]";
  return (
    <footer className={`flex w-full flex-col items-center gap-[8px] rounded-[8px] bg-white px-5 py-8 lg:px-[30px] lg:py-[39px] ${compact ? "xl:pb-[29px]" : ""}`}>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:items-end lg:gap-6 xl:gap-[52px]">
        <div className="flex flex-col items-start gap-[16px] lg:h-[127px] lg:w-[230px] lg:shrink-0 xl:w-[254px]">
          <Logo />
          <p className="w-full text-[14px] font-semibold leading-[21px] text-body lg:h-[55px]">
            Your trusted loyalty &amp; engagement platform for a smarter everyday experience, smarter everyday.
          </p>
        </div>

        <div className="flex items-center justify-between lg:w-[190px] lg:shrink-0 xl:w-[247px]">
          <VDivider />
          <div className={col}>
            <p className={title}>Quick Links</p>
            <div className={list}><p>Home</p><p>Partners</p><p>About Us</p><p>Contact</p></div>
          </div>
        </div>

        <div className="flex items-center justify-between lg:w-[190px] lg:shrink-0 xl:w-[236px]">
          <VDivider />
          <div className={col}>
            <p className={title}>Support</p>
            <div className={list}><p>FAQ</p><p>Privacy Policy</p><p>Terms &amp; Conditions</p></div>
          </div>
        </div>

        <div className="flex items-center lg:min-w-0 lg:flex-[1_0_0] lg:gap-10 xl:gap-[71px]">
          <VDivider />
          <div className="flex w-full max-w-[400px] flex-col items-start gap-[19px] lg:max-w-none xl:w-[269px] xl:shrink-0">
            <p className={title}>Stay Connected</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex h-[32px] w-full items-center justify-between rounded-[8px] border border-muted bg-[#fefefe] pl-[15px]"
            >
              <input
                type="email"
                placeholder="Your email"
                className="h-[21px] min-w-0 flex-1 bg-transparent text-[12px] font-semibold leading-[21px] text-muted outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="flex h-[32px] w-[114px] shrink-0 cursor-pointer items-center justify-center rounded-r-[8px] border-y border-r border-muted bg-brand pb-[5px] pl-[26px] pr-[10px] pt-[6px] text-[12px] font-semibold leading-[21px] text-page"
              >
                <span className="w-[76px] text-left">Subscribe</span>
              </button>
            </form>
            <div className="flex items-center gap-[16px]">
              {[A.facebook, A.instagram, A.linkedin].map((s) => (
                <div key={s} className="relative size-[40px] shrink-0 overflow-clip">
                  <img alt="" className="absolute inset-[-0.11%] block max-w-none" style={{ width: "100.22%", height: "100.22%" }} src={s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-[14px] font-semibold leading-[21px] text-body xl:h-[21px]">
        @ 2024 EXTRAMILES. All rights reseved
      </p>
    </footer>
  );
}
