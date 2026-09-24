import { A } from "../../assets/assetPaths";
import { StoreButtons } from "../layout";

export function AppBanner() {
  return (
    <div className="relative w-full shrink-0 xl:h-[163px]">
      <div className="absolute inset-0 rounded-[12px] bg-brand xl:inset-[25.15%_0_6.13%_0]" />
      <div className="absolute left-[83.59%] right-[0.94%] top-[55px] hidden aspect-[1461/720] xl:block">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.back} />
      </div>
      <div className="absolute left-[0.16%] right-[84.38%] top-[55px] hidden aspect-[1461/720] xl:block">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.back} />
      </div>

      <div className="relative flex flex-col items-center gap-6 p-6 md:flex-row md:justify-between xl:contents">
        <div className="hidden items-center p-[10px] md:flex xl:absolute xl:inset-[0_76.95%_0_10.78%]">
          <img
            alt="ExtraMiles app"
            className="pointer-events-none shrink-0 object-cover md:h-[110px] md:w-[105px] xl:h-[143px] xl:w-[137px]"
            src={A.phone}
          />
        </div>
        <div className="flex flex-col items-center gap-[8px] text-center text-page md:items-start md:text-left xl:absolute xl:inset-[33.74%_55.23%_15.34%_25.55%]">
          <p className="w-full whitespace-nowrap text-[23px] font-bold leading-[27px] xl:h-[27px]">Join ExtraMiles Today</p>
          <p className="w-full whitespace-pre-line text-[15px] font-medium leading-[24px] xl:whitespace-pre">
            {"Be part of the UAE's most trusted \nloyalty & engagement platform."}
          </p>
        </div>
        <StoreButtons className="xl:absolute xl:inset-[44.79%_14.06%_25.77%_59.22%] xl:!flex-nowrap xl:!justify-start" />
      </div>
    </div>
  );
}
