import { A } from "../../assets/assetPaths";
import { StoreButtons } from "../layout";

export function JoinBanner() {
  return (
    <div className="flex w-full shrink-0 rounded-[12px] bg-brand
      flex-col items-center gap-[10px] px-4 py-5
      md:flex-row md:items-center md:justify-between md:gap-4 md:px-6 md:py-5
      xl:h-[112px] xl:gap-[50px] xl:p-0 xl:pl-[2px] xl:pr-[12px] xl:pt-[14px]">

      {/* desktop decorations */}
      <img alt="" className="pointer-events-none hidden h-[98px] w-[198px] shrink-0 object-cover opacity-[0.22] xl:block" src={A.pBack} />

      {/* text */}
      <div className="flex w-full flex-col text-page items-center
        md:items-start md:max-w-[300px]
        xl:w-[377px] xl:shrink-0">
        <p className="w-full font-bold leading-[24px] text-center
          text-[17px]
          md:text-left md:text-[20px]
          xl:h-[27px] xl:text-[21px]">
          Join ExtraMiles Today
        </p>
        <p className="w-full font-medium leading-[18px] text-center
          text-[11px]
          md:text-left md:text-[12px] md:leading-[22px]">
          Be part of the UAE&apos;s most trusted loyalty &amp; engagement platform.
        </p>
      </div>

      {/* ── MOBILE store buttons: slim, fit inside banner ── */}
      <div className="flex w-full gap-[6px] md:hidden">
        <a href="#" className="flex flex-1 h-[38px] items-center gap-[6px] overflow-hidden rounded-[6px] bg-[#111] px-[8px]">
          <img alt="" loading="lazy" className="h-[18px] w-[14px] shrink-0" src={A.appleIcon} />
          <div className="flex flex-col min-w-0">
            <span className="block text-[7px] leading-none text-white opacity-75">Download on the</span>
            <span className="block text-[11px] font-semibold leading-tight text-white">App Store</span>
          </div>
        </a>
        <a href="#" className="flex flex-1 h-[38px] items-center gap-[6px] overflow-hidden rounded-[6px] bg-[#111] px-[8px]">
          <img alt="" loading="lazy" className="h-[18px] w-[18px] shrink-0" src={A.googleIcon} />
          <div className="flex flex-col min-w-0">
            <span className="block text-[7px] leading-none text-white opacity-75">GET IT ON</span>
            <span className="block text-[11px] font-semibold leading-tight text-white">Google Play</span>
          </div>
        </a>
      </div>

      {/* ── TABLET+ store buttons: normal size ── */}
      <StoreButtons className="hidden md:flex md:shrink-0 md:!flex-nowrap xl:w-[342px] xl:!justify-start" />

      {/* desktop decoration */}
      <img alt="" className="pointer-events-none hidden h-[98px] w-[198px] shrink-0 object-cover opacity-[0.22] xl:block" src={A.pBack} />
    </div>
  );
}
