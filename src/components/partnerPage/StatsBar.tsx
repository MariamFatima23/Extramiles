import { A } from "../../assets/assetPaths";

const soft = "text-[rgba(249,250,254,0.69)]";

type StatProps = {
  pos: string;
  circle: string;
  icon: string;
  small: string;
  title: string;
  desc: string;
  iconBox: string;
  tabletClass?: string;
};

function Stat({ pos, circle, icon, small, title, desc, iconBox, tabletClass = "" }: StatProps) {
  return (
    <div className={`flex items-center gap-[6px] xl:absolute ${pos} ${tabletClass}`}>
      <div className="flex shrink-0 items-center p-[4px] md:p-[10px]">
        <div className={`relative flex size-[40px] shrink-0 items-center gap-[10px] md:size-[56px] ${iconBox}`}>
          <img alt="" className="absolute left-0 top-0 block size-full max-w-none" src={circle} />
          <img alt="" className="relative block size-[20px] shrink-0 md:size-[28px]" src={icon} />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start font-semibold xl:w-[143px] xl:shrink-0 xl:flex-none">
        <p className={`w-full text-[8px] leading-[11px] md:text-[11px] md:leading-[14px] xl:text-[10px] xl:leading-[6px] ${soft}`}>{small}</p>
        <p className="w-full text-[10px] leading-[13px] text-page md:text-[14px] md:leading-[18px] xl:text-[16px] xl:leading-[20px]">{title}</p>
        <p className={`w-full text-[7px] leading-[10px] md:text-[11px] md:leading-[15px] xl:min-h-[23px] xl:w-[190px] xl:shrink-0 xl:text-[9px] xl:leading-[12px] ${soft}`}>{desc}</p>
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="relative flex w-full shrink-0 overflow-hidden rounded-[12px] bg-brand
      gap-0 md:gap-0 xl:block xl:h-[112px] xl:overflow-visible xl:p-0">

      {/* desktop bg decorations */}
      <div className="absolute left-[83.59%] right-[0.94%] top-[14px] hidden aspect-[1461/720] xl:block">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.pBack} />
      </div>
      <div className="absolute left-[0.16%] right-[84.38%] top-[14px] hidden aspect-[1461/720] xl:block">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-[0.22]" src={A.pBack} />
      </div>

      {/* mobile + tablet: 2 col side by side */}
      <div className="flex w-full xl:hidden">
        <div className="flex flex-1 items-center border-r border-[rgba(255,255,255,0.2)] p-3 md:p-5">
          <Stat
            pos=""
            circle={A.usersCircle}
            icon={A.usersIcon}
            iconBox="justify-center"
            small="Join as a Merchant"
            title="Reach 300,000+ Users"
            desc="Redeem miles for flights, hotels, shopping and more"
          />
        </div>
        <div className="flex flex-1 items-center p-3 md:p-5">
          <Stat
            pos=""
            circle={A.posCircle}
            icon={A.posIcon}
            iconBox="px-[16px] py-[10px] md:px-[21px] md:py-[13px]"
            small="Get a Modern POS"
            title="Advanced Modern POS"
            desc="Connect your business with300,000+ high value users and grow your revenue."
          />
        </div>
      </div>

      {/* desktop: absolutely positioned stats inside h-[112px] container */}
      <div className="hidden xl:block xl:h-full">
        {/* Left stat: centered vertically, left ~26% from left */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[26%] flex items-center gap-[8px]">
          <div className="flex shrink-0 items-center p-[10px]">
            <div className="relative flex size-[70px] shrink-0 items-center justify-center gap-[10px]">
              <img alt="" className="absolute left-0 top-0 block size-[70px] max-w-none" src={A.usersCircle} />
              <img alt="" className="relative block size-[35px] shrink-0" src={A.usersIcon} />
            </div>
          </div>
          <div className="flex w-[190px] shrink-0 flex-col items-start font-semibold">
            <p className={`w-full text-[10px] leading-[6px] ${soft}`}>Join as a Merchant</p>
            <p className="w-full text-[16px] leading-[20px] text-page">Reach 300,000+ Users</p>
            <p className={`w-full text-[9px] leading-[12px] ${soft}`}>Connect with the verified government community and their families.</p>
          </div>
        </div>

        {/* Right stat: centered vertically, left ~54% */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[54%] flex items-center gap-[8px]">
          <div className="flex shrink-0 items-center p-[10px]">
            <div className="relative flex size-[70px] shrink-0 items-center px-[21px] py-[13px]">
              <img alt="" className="absolute left-0 top-0 block size-[70px] max-w-none" src={A.posCircle} />
              <img alt="" className="relative block size-[35px] shrink-0" src={A.posIcon} />
            </div>
          </div>
          <div className="flex w-[190px] shrink-0 flex-col items-start font-semibold">
            <p className={`w-full text-[10px] leading-[6px] ${soft}`}>Get a Modern POS</p>
            <p className="w-full text-[16px] leading-[20px] text-page">Advanced Modern POS</p>
            <p className={`w-full whitespace-pre-line text-[9px] leading-[12px] ${soft}`}>{"Connect your business with 300,000+\nhigh value users and grow your revenue."}</p>
          </div>
        </div>

        {/* divider */}
        <div className="absolute bottom-1/4 left-1/2 right-1/2 top-[25.89%] flex items-center justify-center" style={{ containerType: "size" }}>
          <div className="h-0 w-[100cqh] flex-none rotate-90">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block size-full max-w-none" src={A.line36} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
