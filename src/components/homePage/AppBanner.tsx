import { A } from "../../assets/assetPaths";
import { StoreButtons } from "../layout";

export function AppBanner() {
  return (
    <div className="relative w-full shrink-0 xl:h-[163px]">

      {/* blue bars */}
      <div className="absolute inset-[22px_0_0_0] rounded-[12px] bg-brand md:hidden" />
      <div className="absolute hidden inset-[20px_0_0_0] rounded-[12px] bg-brand md:block xl:hidden" />
      <div className="absolute hidden rounded-[12px] bg-brand xl:block xl:inset-[25.15%_0_6.13%_0]" />

      {/* desktop decorations */}
      <div className="absolute left-[83.59%] right-[0.94%] top-[55px] hidden aspect-[1461/720] xl:block">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.back} />
      </div>
      <div className="absolute left-[0.16%] right-[84.38%] top-[55px] hidden aspect-[1461/720] xl:block">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.back} />
      </div>

      {/* ══ MOBILE ══
          Phone: 90px wide (small), height 130px
          Right: title nowrap, desc, 2 store buttons flex-1 each
          Total phone+gap+right = 90+10+rest — always fits
      */}
      <div className="flex w-full items-end px-3 pb-3 md:hidden">
        {/* phone — small, bottom-aligned, sticks above bar */}
        <img
          alt="ExtraMiles app"
          className="pointer-events-none relative z-10 mb-[-12px] h-[130px] w-[90px] shrink-0 object-cover"
          src={A.phone}
        />

        {/* right column */}
        <div className="relative z-10 ml-[10px] flex min-w-0 flex-1 flex-col items-start gap-[3px] pt-[26px]">
          <p className="whitespace-nowrap text-[14px] font-bold leading-[20px] text-page">
            Join ExtraMiles Today
          </p>
          <p className="text-[10px] font-medium leading-[14px] text-page">
            Be part of the UAE's most trusted loyalty &amp; engagement platform.
          </p>
          {/* store buttons — slim, two per row, scale with flex-1 */}
          <div className="mt-[6px] flex w-full gap-[4px]">
            {/* App Store slim */}
            <a href="#" className="relative flex h-[32px] flex-1 min-w-0 items-center overflow-hidden rounded-[6px] bg-[#111] pl-[6px] pr-[4px] gap-[4px]">
              <img alt="" className="h-[14px] w-[11px] shrink-0" src={A.appleIcon} />
              <div className="flex min-w-0 flex-col overflow-hidden">
                <span className="block truncate text-[6px] leading-none text-white opacity-80">Download on the</span>
                <span className="block truncate text-[9px] font-semibold leading-tight text-white">App Store</span>
              </div>
            </a>
            {/* Google Play slim */}
            <a href="#" className="relative flex h-[32px] flex-1 min-w-0 items-center overflow-hidden rounded-[6px] bg-[#111] pl-[6px] pr-[4px] gap-[4px]">
              <img alt="" className="h-[14px] w-[14px] shrink-0" src={A.googleIcon} />
              <div className="flex min-w-0 flex-col overflow-hidden">
                <span className="block truncate text-[6px] leading-none text-white opacity-80">GET IT ON</span>
                <span className="block truncate text-[9px] font-semibold leading-tight text-white">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ══ TABLET ══ */}
      <div className="relative hidden h-[110px] items-center md:flex xl:hidden">
        <div className="absolute bottom-0 left-6">
          <img
            alt="ExtraMiles app"
            className="pointer-events-none h-[130px] w-[120px] shrink-0 object-cover"
            src={A.phone}
          />
        </div>
        <div className="flex w-full items-center justify-between pl-[156px] pr-6">
          <div className="flex flex-col items-start gap-[4px] text-page">
            <p className="whitespace-nowrap text-[20px] font-bold leading-[26px]">Join ExtraMiles Today</p>
            <p className="text-[13px] font-medium leading-[20px]">
              Be part of the UAE's most trusted
              <br />
              loyalty &amp; engagement platform.
            </p>
          </div>
          <StoreButtons className="!flex-nowrap !justify-start" />
        </div>
      </div>

      {/* ══ DESKTOP ══ */}
      <div className="hidden xl:block">
        <div className="absolute inset-[0_76.95%_0_10.78%] flex items-center p-[10px]">
          <img
            alt="ExtraMiles app"
            className="pointer-events-none shrink-0 object-cover xl:h-[143px] xl:w-[137px]"
            src={A.phone}
          />
        </div>
        <div className="absolute inset-[33.74%_55.23%_15.34%_25.55%] flex flex-col items-start gap-[8px] text-page">
          <p className="w-full whitespace-nowrap text-[23px] font-bold leading-[27px]">Join ExtraMiles Today</p>
          <p className="w-full whitespace-pre text-[15px] font-medium leading-[24px]">
            {"Be part of the UAE's most trusted \nloyalty & engagement platform."}
          </p>
        </div>
        <StoreButtons className="xl:absolute xl:inset-[44.79%_14.06%_25.77%_59.22%] xl:!flex-nowrap xl:!justify-start" />
      </div>
    </div>
  );
}
