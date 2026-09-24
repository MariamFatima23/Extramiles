import { useState, type FormEvent } from "react";
import { Link, NavLink } from "react-router-dom";
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
    <Link
      to="/home"
      aria-label="ExtraMiles home"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-[7px]"
    >
      <img alt="ExtraMiles" className="size-[40px] shrink-0 object-cover md:size-[46px]" src={A.logo} />
      <div className="flex flex-col items-start leading-[normal] text-brand">
        <p className="whitespace-nowrap text-[20px] font-bold md:text-[24px]">ExtraMiles</p>
        {/* tagline — hidden on mobile, visible md+ */}
        <p className="hidden whitespace-nowrap text-right text-[12px] font-medium md:block">Turn every spend to rewards</p>
      </div>
    </Link>
  );
}

function AppStore({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`relative flex h-[48px] w-[162px] shrink-0 flex-col items-start gap-[10px] py-[4px] pl-[14px] pr-[30px] ${className}`}>
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

function GooglePlay({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`relative flex h-[48px] w-[162px] shrink-0 flex-col items-start gap-[10px] py-[4px] pl-[14px] pr-[30px] ${className}`}>
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

export function StoreButtons({ className = "", btnClassName = "" }: { className?: string; btnClassName?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-[18px] ${className}`}>
      <AppStore className={btnClassName} />
      <GooglePlay className={btnClassName} />
    </div>
  );
}

/* ---------------- navbar ---------------- */
const btnFill = "flex cursor-pointer items-center justify-center rounded-[8px] border border-[#0145d5] bg-brand p-[10px] text-[14px] font-medium text-white";
const btnLine = "flex cursor-pointer items-center justify-center rounded-[8px] border border-brand p-[10px] text-[14px] font-medium text-brand";

function Lang() {
  return (
    <div className="flex items-center gap-[4px]">
      <img alt="" className="size-[18px] shrink-0 md:size-[22px]" src={A.globe} />
      <span className="text-[14px] font-medium text-brand md:text-[18px]">AR</span>
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
    <header className="relative z-30 w-full bg-page xl:h-[90px]">
      <div className={`${wrap} flex items-center justify-between py-3 xl:py-0 xl:pt-[20px]`}>
        <div className="flex items-center xl:w-[740px] xl:justify-between">
          <Logo />
          <nav className="hidden w-auto items-start gap-[4px] xl:flex">{navigationLinks.map((l) => item(l))}</nav>
        </div>
        <div className="hidden xl:block"><Lang /></div>
        <div className="hidden items-center gap-[15px] xl:flex">
          <button className={btnFill}>Join ExtraMiles</button>
          <button className={btnLine}>Sign in</button>
        </div>
        {/* mobile/tablet right side: globe+AR then hamburger */}
        <div className="flex items-center gap-[8px] xl:hidden">
          <Lang />
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex size-[38px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[8px] border border-brand md:size-[44px]"
          >
            <span className={`h-[2px] w-[18px] bg-brand transition md:w-[20px] ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-[18px] bg-brand transition md:w-[20px] ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-[18px] bg-brand transition md:w-[20px] ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
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
  const [subscribed, setSubscribed] = useState(false);
  const col = "flex w-full flex-col items-start gap-[16px] lg:w-[140px] xl:w-[165px]";
  const list = "flex w-full flex-col items-start text-[14px] font-semibold leading-[22px] text-body xl:h-[93px]";
  const title = "w-full text-[15px] font-bold leading-[21px] text-brand xl:h-[20px]";
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    window.setTimeout(() => setSubscribed(false), 3000);
  };
  return (
    <footer className={`flex w-full flex-col items-center gap-[8px] rounded-[8px] bg-white px-5 py-8 md:px-6 md:py-8 lg:px-[30px] lg:py-[39px] ${compact ? "xl:pb-[29px]" : ""}`}>

      {/* ══════════ MOBILE layout (below md) ══════════ */}
      <div className="flex w-full flex-col items-center gap-[20px] md:hidden">

        {/* logo + tagline centered */}
        <div className="flex flex-col items-center gap-[8px]">
          <Logo />
          <p className="w-full text-center text-[14px] font-semibold leading-[21px] text-body">
            Your trusted loyalty &amp; engagement platform for a smarter everyday experience, smarter everyday.
          </p>
        </div>

        {/* Support + Quick Links — 2 col */}
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-0">
          <div className="flex flex-col items-start gap-[10px]">
            <p className={title}>Support</p>
            <div className="flex w-full flex-col items-start text-[14px] font-semibold leading-[26px] text-body">
              <p>FAQ</p>
              <p>Privacy Policy</p>
              <p>Terms &amp; Conditions</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <p className={title}>Quick Links</p>
            <div className="flex w-full flex-col items-start text-[14px] font-semibold leading-[26px] text-body">
              <Link to="/home">Home</Link>
              <Link to="/partner">Partners</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

        {/* Stay Connected — full width, centered */}
        <div className="flex w-full flex-col items-center gap-[14px]">
          <p className="w-full text-center text-[15px] font-bold leading-[21px] text-brand">Stay Connected</p>
          <form
            onSubmit={handleSubscribe}
            className="flex h-[40px] w-full items-center rounded-[8px] border border-muted bg-[#fefefe] pl-[15px]"
          >
            <input
              type="email"
              placeholder="Your email"
              className="h-full min-w-0 flex-1 bg-transparent text-[13px] font-semibold leading-[21px] text-muted outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="flex h-full shrink-0 cursor-pointer items-center justify-center rounded-r-[8px] border-y border-r border-muted bg-brand px-5 text-[13px] font-semibold leading-[21px] text-page"
            >
              Subscribe
            </button>
          </form>
          <div className="flex items-center gap-[16px]">
            {[A.facebook, A.instagram, A.linkedin].map((s) => (
              <a key={s} href="#" className="relative size-[40px] shrink-0 overflow-clip">
                <img alt="" className="absolute inset-[-0.11%] block max-w-none" style={{ width: "100.22%", height: "100.22%" }} src={s} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ TABLET layout (md, below lg) ══════════ */}
      <div className="hidden w-full flex-col gap-[20px] md:flex lg:hidden">
        {/* logo + tagline centered */}
        <div className="flex flex-col items-center gap-[8px]">
          <Logo />
          <p className="w-full text-center text-[14px] font-semibold leading-[21px] text-body">
            Your trusted loyalty &amp; engagement platform for a smarter everyday experience, smarter everyday.
          </p>
        </div>
        {/* 3-col row */}
        <div className="grid w-full grid-cols-3 gap-4">
          <div className="flex flex-col items-start gap-[12px]">
            <p className={title}>Support</p>
            <div className="flex w-full flex-col items-start text-[13px] font-semibold leading-[22px] text-body">
              <p>FAQ</p><p>Privacy Policy</p><p>Terms &amp; Conditions</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <p className={title}>Quick Links</p>
            <div className="flex w-full flex-col items-start text-[13px] font-semibold leading-[22px] text-body">
              <Link to="/home">Home</Link><Link to="/partner">Partners</Link><Link to="/about">About Us</Link><Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px]">
            <p className={title}>Stay Connected</p>
            <form
              onSubmit={handleSubscribe}
              className="flex h-[32px] w-full items-center rounded-[8px] border border-muted bg-[#fefefe] pl-[10px]"
            >
              <input
                type="email"
                placeholder="Your email"
                className="h-[21px] min-w-0 flex-1 bg-transparent text-[11px] font-semibold leading-[21px] text-muted outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="flex h-[32px] shrink-0 cursor-pointer items-center justify-center rounded-r-[8px] border-y border-r border-muted bg-brand px-3 text-[11px] font-semibold leading-[21px] text-page"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-[10px]">
              {[A.facebook, A.instagram, A.linkedin].map((s) => (
                <a key={s} href="#" className="relative size-[36px] shrink-0 overflow-clip">
                  <img alt="" className="absolute inset-[-0.11%] block max-w-none" style={{ width: "100.22%", height: "100.22%" }} src={s} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ DESKTOP layout (lg+) ══════════ */}
      <div className="hidden w-full lg:flex lg:items-end lg:gap-6 xl:gap-[52px]">
        <div className="flex flex-col items-start gap-[16px] lg:h-[127px] lg:w-[230px] lg:shrink-0 xl:w-[254px]">
          <Logo />
          <p className="w-full text-[14px] font-semibold leading-[21px] text-body lg:h-[55px]">
            Your trusted loyalty &amp; engagement platform for a smarter everyday experience, smarter everyday.
          </p>
        </div>
        <div className="flex items-center justify-between lg:w-[190px] lg:shrink-0 xl:w-[247px]">
          <VDivider />
          <div className={col}>
            <p className={title}>Support</p>
            <div className={list}><p>FAQ</p><p>Privacy Policy</p><p>Terms &amp; Conditions</p></div>
          </div>
        </div>
        <div className="flex items-center justify-between lg:w-[190px] lg:shrink-0 xl:w-[236px]">
          <VDivider />
          <div className={col}>
            <p className={title}>Quick Links</p>
            <div className={list}><Link to="/home">Home</Link><Link to="/partner">Partners</Link><Link to="/about">About Us</Link><Link to="/contact">Contact</Link></div>
          </div>
        </div>
        <div className="flex items-center lg:min-w-0 lg:flex-[1_0_0] lg:gap-10 xl:gap-[71px]">
          <VDivider />
          <div className="flex w-full max-w-[400px] flex-col items-start gap-[19px] lg:max-w-none xl:w-[269px] xl:shrink-0">
            <p className={title}>Stay Connected</p>
            <form
              onSubmit={handleSubscribe}
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
                <a key={s} href="#" className="relative size-[40px] shrink-0 overflow-clip">
                  <img alt="" className="absolute inset-[-0.11%] block max-w-none" style={{ width: "100.22%", height: "100.22%" }} src={s} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {subscribed && (
        <div role="status" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-white shadow-lg">
          Congratulations! You have secured ExtraMiles.
        </div>
      )}
      <p className="w-full text-center text-[14px] font-semibold leading-[21px] text-body xl:h-[21px]">
        @ 2024 EXTRAMILES. All rights reseved
      </p>
    </footer>
  );
}
