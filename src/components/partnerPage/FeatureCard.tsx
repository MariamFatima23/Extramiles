import { A } from "../../assets/assetPaths";

type FeatureCardProps = { img: string };

export function FeatureCard({ img }: FeatureCardProps) {
  return (
    <div className="flex w-full shrink-0 overflow-hidden rounded-[12px] border border-[rgba(4,69,209,0.29)] bg-white items-stretch
      md:h-[130px]
      xl:h-[198px] xl:w-[628px]">

      {/* image wrapper — padding so image doesn't touch border */}
      <div className="shrink-0 self-stretch flex items-stretch
        p-[6px] pr-0
        md:p-[8px] md:pr-0
        xl:p-0">
        <img
          alt=""
          className="pointer-events-none object-cover rounded-[7px]
            w-[83px]
            md:w-[128px] md:rounded-[7px]
            xl:w-[305px] xl:rounded-l-[9px] xl:rounded-r-none"
          loading="lazy"
          decoding="async"
          src={img}
        />
      </div>

      {/* right: icon + title + desc stacked */}
      <div className="flex min-w-0 flex-1 items-center
        gap-[7px] px-[7px] py-[7px]
        md:gap-[10px] md:px-[12px] md:py-[10px]
        xl:gap-[15px] xl:px-[15px]">

        {/* icon */}
        <img alt="" className="shrink-0 self-start mt-[1px]
          size-[22px]
          md:size-[30px]
          xl:size-[47px]"
          src={A.pMainIcons} />

        {/* text column */}
        <div className="flex min-w-0 flex-col items-start font-semibold
          gap-[3px]
          md:gap-[4px]
          xl:gap-[10px]">
          <p className="text-navy
            text-[10px] leading-[13px]
            md:text-[12px] md:leading-[15px]
            xl:text-[16px] xl:leading-[18px]">
            Push Notifications<br />Up to 15 KM Around
          </p>
          <p className="text-body
            text-[8.5px] leading-[12px]
            md:text-[11px] md:leading-[15px]
            xl:text-[13px] xl:leading-[21px]">
            Promote your offers and reach potential customers within a 15 KM radius of your business.
          </p>
        </div>
      </div>
    </div>
  );
}
