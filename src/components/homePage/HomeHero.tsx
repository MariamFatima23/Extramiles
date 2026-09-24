import { Link } from "react-router-dom";
import { A } from "../../assets/assetPaths";
import { Line, wrap } from "../layout";

const shadow = "drop-shadow-[0px_1px_3px_rgba(0,0,0,0.11)]";

type JoinCardProps = {
  to: string;
  primary?: boolean;
  title: string;
  desc: string;
  iconWrap: string;
  iconInner: string;
  iconImg: string;
  chevron: string;
};

function JoinCard({ to, primary, title, desc, iconWrap, iconInner, iconImg, chevron }: JoinCardProps) {
  return (
    <Link
      to={to}
      className={`flex h-[86px] w-[calc(50%-5px)] shrink-0 items-center rounded-[10px] py-[8px] pl-[8px] pr-[5px]
        md:h-[96px] md:w-[calc(50%-7px)] md:max-w-[220px] md:rounded-[12px] md:py-[12px] md:pl-[12px] md:pr-[8px]
        xl:!h-[157px] xl:!w-[calc(50%-10px)] xl:!max-w-[404px] xl:!py-[20px] xl:!pl-[24px] xl:!pr-[20px]
        ${shadow} ${primary ? "bg-brand" : "bg-page"}`}
    >
      {/* icon */}
      <div className="relative size-[34px] shrink-0 md:size-[44px] xl:!size-[75px]">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={A.mainIcons} />
        <div className="absolute inset-[25.45%]">
          <div className={`absolute ${iconWrap}`}>
            <div className={`absolute ${iconInner}`}>
              <img alt="" className="block size-full max-w-none" src={iconImg} />
            </div>
          </div>
        </div>
      </div>

      {/* text */}
      <div className={`ml-[6px] flex min-w-0 flex-1 flex-col items-start gap-[2px] text-left
        md:ml-[8px] md:gap-[3px]
        xl:!ml-[18px] xl:!gap-[8px]
        ${primary ? "text-page" : ""}`}>
        <p className={`whitespace-pre-line text-[10px] font-semibold leading-[13px]
          md:text-[12px] md:leading-[15px]
          xl:!text-[24px] xl:!leading-[29px]
          ${primary ? "" : "text-brand"}`}>
          {title}
        </p>
        <p className={`line-clamp-2 text-[9px] font-semibold leading-[12px]
          md:text-[10px] md:leading-[14px]
          xl:!line-clamp-none xl:!text-[16px] xl:!leading-[23px]
          ${primary ? "" : "text-body"}`}>
          {desc}
        </p>
      </div>

      {/* arrow */}
      <img alt="" className="ml-[3px] size-[12px] shrink-0 md:ml-[6px] md:size-[16px] xl:!ml-[16px] xl:!size-[28px]" src={chevron} />
    </Link>
  );
}

export function HomeHero() {
  return (
    <section className="relative w-full md:h-[420px] xl:h-[500px]">

      {/* bg image — all breakpoints */}
      <div className="pointer-events-none absolute inset-0 w-full overflow-hidden min-[1441px]:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <img alt="" loading="eager" fetchPriority="high" decoding="async" className="size-full max-w-none object-cover object-[89%_center]" src={A.heroBg} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-white/65 md:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden bg-white/50 md:block xl:hidden" />

      <div className={`${wrap} relative h-full`}>
        <div className="flex h-full flex-col items-center gap-[12px] py-[20px] text-center
          md:items-center md:gap-[12px] md:pt-[40px] md:pb-[24px]
          xl:h-auto xl:items-start xl:gap-[17px] xl:pb-[15px] xl:pt-[39px] xl:text-left xl:w-[831px]">

          {/* headline */}
          <h1 className="whitespace-nowrap text-[34px] font-semibold leading-[42px] text-black
            md:text-[40px] md:leading-[48px]
            xl:text-[48px] xl:leading-[53px]">
            Earn Miles.
            <br />
            Travel More.
            <br />
            <span className="text-brand">Live Better.</span>
          </h1>

          {/* subtitle */}
          <p className="text-[14px] font-semibold leading-[22px] text-body
            md:text-[15px] md:leading-[24px]">
            Join our loyalty program and turn your everyday
            <br />
            bookings into extraordinary rewards.
          </p>

          {/* GET STARTED */}
          <div className="flex items-center gap-[14px] md:gap-[24px] xl:gap-[31px]">
            <Line src={A.line32} />
            <p className="whitespace-nowrap text-[15px] font-semibold leading-[18px] text-brand md:text-[18px]">
              GET STARTED
            </p>
            <Line />
          </div>

          {/* cards: ALL screens side by side, mobile half-width each */}
          <div className="flex w-full gap-[10px] md:justify-center md:gap-[14px] xl:justify-start xl:gap-[20px]">
            <JoinCard
              to="/members"
              primary
              title={"JOIN AS\nA MEMBER"}
              desc="Earn miles on your bookings and enjoy exclusive rewards."
              iconWrap="inset-[0_11.43%_2.86%_8.57%]"
              iconInner="inset-[0_-4.32%_-3.55%_-4.32%]"
              iconImg={A.memberIcon}
              chevron={A.chevronWhite}
            />
            <JoinCard
              to="/partner"
              title={"JOIN AS\nA PARTNER"}
              desc="Grow your business and earn extra miles"
              iconWrap="inset-[14.29%_1.44%_20%_0]"
              iconInner="inset-[-5.25%_-3.5%_-5.26%_-3.5%]"
              iconImg={A.partnerIcon}
              chevron={A.chevronBlue}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
