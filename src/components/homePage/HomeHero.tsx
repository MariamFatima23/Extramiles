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
      className={`flex h-[124.5px] w-full shrink-0 flex-col items-start rounded-[12px] py-[16px] pl-[19px] pr-[23px] sm:w-[320px] ${shadow} ${
        primary ? "bg-brand" : "bg-page"
      }`}
    >
      <div className="flex items-center gap-[15px]">
        <div className="flex h-[93px] items-start justify-center">
          <div className="relative size-[59px] shrink-0">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={A.mainIcons} />
            <div className="absolute inset-[25.45%]">
              <div className={`absolute ${iconWrap}`}>
                <div className={`absolute ${iconInner}`}>
                  <img alt="" className="block size-full max-w-none" src={iconImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex h-[93px] w-[168px] flex-col items-start gap-[11px] text-left ${primary ? "text-page" : ""}`}>
          <p className={`whitespace-pre-line text-[18px] font-semibold leading-[normal] ${primary ? "" : "text-brand"}`}>{title}</p>
          <p className={`whitespace-pre-line text-[12px] font-semibold leading-[18px] ${primary ? "" : "text-body"}`}>{desc}</p>
        </div>
        <div className="flex h-[93px] items-center">
          <img alt="" className="size-[21px] shrink-0" src={chevron} />
        </div>
      </div>
    </Link>
  );
}

export function HomeHero() {
  return (
    <section className="relative w-full xl:h-[454px]">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[1440px] -translate-x-1/2 overflow-hidden min-[1441px]:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <img alt="" className="size-full max-w-none object-cover object-[89%_center]" src={A.heroBg} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-page/75 md:hidden" />

      <div className={`${wrap} relative py-8 xl:pb-[15px] xl:pt-[39px]`}>
        <div className="flex flex-col items-start gap-[17px] xl:w-[659px]">
          <h1 className="whitespace-nowrap text-[36px] font-semibold leading-[41px] text-black sm:text-[48px] sm:leading-[53px]">
            Earn Miles.
            <br />
            Travel More.
            <br />
            <span className="text-brand">Live Better.</span>
          </h1>
          <p className="whitespace-pre-line text-[16px] font-semibold leading-[24px] text-body">
            {"Join our loyalty program and turn your everyday \nbookings into extraordinary rewards."}
          </p>
          <div className="flex items-center gap-[31px]">
            <Line />
            <p className="whitespace-nowrap text-[18px] font-semibold leading-[18px] text-brand">GET STARTED</p>
            <Line />
          </div>
          <div className="flex w-full cursor-pointer flex-col items-start gap-[19px] sm:flex-row sm:items-center">
            <JoinCard
              to="/members"
              primary
              title={"JOIN AS\nA MEMBER"}
              desc={"Earn miles on your bookings \nand enjoy exclusive rewards."}
              iconWrap="inset-[0_11.43%_2.86%_8.57%]"
              iconInner="inset-[0_-4.32%_-3.55%_-4.32%]"
              iconImg={A.memberIcon}
              chevron={A.chevronWhite}
            />
            <JoinCard
              to="/partners"
              title={"JOIN AS\nA PARTNER"}
              desc={"Grow your business and\nearn extra miles"}
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
