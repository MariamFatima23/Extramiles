import { A } from "../../assets/assetPaths";

const soft = "text-[rgba(249,250,254,0.69)]";
type StatProps = { pos: string; circle: string; icon: string; small: string; title: string; desc: string; iconBox: string };

function Stat({ pos, circle, icon, small, title, desc, iconBox }: StatProps) {
  return (
    <div className={`flex items-center gap-[8px] xl:absolute ${pos}`}>
      <div className="flex shrink-0 items-center p-[10px]">
        <div className={`relative flex size-[70px] shrink-0 items-center gap-[10px] ${iconBox}`}>
          <img alt="" className="absolute left-0 top-0 block size-[70px] max-w-none" src={circle} />
          <img alt="" className="relative block size-[35px] shrink-0" src={icon} />
        </div>
      </div>
      <div className="flex w-[220px] shrink-0 flex-col items-start font-semibold xl:w-[143px]">
        <p className={`w-full text-[11px] leading-[14px] xl:text-[10px] xl:leading-[6px] ${soft}`}>{small}</p>
        <p className="w-full text-[18px] leading-[22px] text-page xl:text-[16px] xl:leading-[20px]">{title}</p>
        <p className={`w-full whitespace-pre-line text-[12px] leading-[16px] xl:min-h-[23px] xl:w-[190px] xl:shrink-0 xl:text-[9px] xl:leading-[12px] ${soft}`}>{desc}</p>
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="relative flex w-full shrink-0 flex-col gap-4 overflow-hidden rounded-[12px] bg-brand p-5 md:flex-row md:justify-around xl:block xl:h-[112px] xl:overflow-visible xl:p-0">
      <div className="absolute left-[83.59%] right-[0.94%] top-[14px] hidden aspect-[1461/720] xl:block"><img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.pBack} /></div>
      <div className="absolute left-[0.16%] right-[84.38%] top-[14px] hidden aspect-[1461/720] xl:block"><img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.pBack} /></div>
      <Stat pos="xl:inset-[12.5%_53.44%_7.14%_26.17%]" circle={A.usersCircle} icon={A.usersIcon} iconBox="justify-center" small="Join as a Merchant" title="Reach 300,000+ Users" desc="Connect with the verified government community and their families." />
      <Stat pos="xl:inset-[9.82%_25.94%_9.82%_53.67%]" circle={A.posCircle} icon={A.posIcon} iconBox="px-[21px] py-[13px]" small="Get a Modern POS" title="Advanced Modern POS" desc={"Connect your business with 300,000+\nhigh value users and grow your revenue."} />
      <div className="absolute bottom-1/4 left-1/2 right-1/2 top-[25.89%] hidden items-center justify-center xl:flex" style={{ containerType: "size" }}><div className="h-0 w-[100cqh] flex-none rotate-90"><div className="relative size-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block size-full max-w-none" src={A.line36} /></div></div></div></div>
    </div>
  );
}
