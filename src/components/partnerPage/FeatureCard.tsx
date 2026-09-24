import { A } from "../../assets/assetPaths";

type FeatureCardProps = { img: string };

export function FeatureCard({ img }: FeatureCardProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start rounded-[12px] border border-[rgba(4,69,209,0.29)] bg-white p-3 xl:h-[198px] xl:w-[628px] xl:p-0 xl:pb-[8px] xl:pr-[15px] xl:pt-[9px]">
      <div className="flex w-full flex-col gap-[16px] sm:flex-row sm:items-center">
        <img alt="" className="pointer-events-none h-[181px] w-full shrink-0 object-cover sm:w-[305px]" src={img} />
        <div className="flex items-center gap-[15px]">
          <div className="flex h-[131px] w-[52px] items-start"><img alt="" className="size-[47px] shrink-0" src={A.pMainIcons} /></div>
          <div className="flex w-[194px] max-w-full flex-col items-start gap-[10px] font-semibold">
            <p className="w-[171px] text-[16px] leading-[18px] text-navy xl:h-[35px]">Push Notifications<br />Up to 15 KM Around</p>
            <p className="w-full text-[13px] leading-[21px] text-body xl:h-[86px] xl:whitespace-nowrap">Promote your offers and reach<br className="hidden xl:inline" /> potential customers within a<br className="hidden xl:inline" /> 15 KM radius of your business.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
