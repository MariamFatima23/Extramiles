import { A } from "../../assets/assetPaths";
import { StoreButtons } from "../layout";

export function JoinBanner() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-6 rounded-[12px] bg-brand px-6 py-8 md:flex-row md:justify-center xl:h-[112px] xl:gap-[50px] xl:p-0 xl:pl-[2px] xl:pr-[12px] xl:pt-[14px]">
      <img alt="" className="pointer-events-none hidden h-[98px] w-[198px] shrink-0 object-cover opacity-[0.22] xl:block" src={A.pBack} />
      <div className="flex w-full max-w-[377px] shrink-0 flex-col items-start text-page xl:w-[377px]">
        <p className="w-full text-center text-[21px] font-bold leading-[27px] xl:h-[27px] xl:text-left">Join ExtraMiles Today</p>
        <p className="w-full text-center text-[12px] font-medium leading-[24px]">Be part of the UAE&apos;s most trusted loyalty &amp; engagement platform.</p>
      </div>
      <StoreButtons className="xl:w-[342px] xl:!flex-nowrap xl:!justify-start" />
      <img alt="" className="pointer-events-none hidden h-[98px] w-[198px] shrink-0 object-cover opacity-[0.22] xl:block" src={A.pBack} />
    </div>
  );
}
