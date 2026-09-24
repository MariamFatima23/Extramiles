import { A } from "../../assets/assetPaths";
import { Footer, Line, Navbar, wrap } from "../layout";
import { FeatureCard } from "./FeatureCard";
import { JoinBanner } from "./JoinBanner";
import { StatsBar } from "./StatsBar";

function PartnerHero() {
  return (
    <section className="relative w-full overflow-hidden
      md:h-[420px]
      lg:h-[455px]
      xl:h-[455px] xl:-mt-[48px]">

      {/* ── LAYER 1: Building — full bg, always behind everything ── */}
      <div className="pointer-events-none absolute inset-0">
        <img
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover object-left-bottom
            opacity-[0.30]
            md:opacity-[0.40]
            xl:opacity-[0.30]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          src={A.town}
        />
      </div>

      {/* ── LAYER 2: Man image — far right ── */}
      <div className="pointer-events-none absolute top-0 bottom-0
        left-[68%] right-0
        md:left-[55%] md:right-[-2%]
        xl:left-auto xl:right-[-14px] xl:w-[694px]">
        <img
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover object-[20%_top]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          src={A.pos3}
        />
        {/* soft left fade so man blends into building */}
        <div className="absolute inset-0
          bg-gradient-to-r from-page/80 via-page/10 to-transparent
          md:from-page/60 md:via-transparent
          xl:from-page/40" />
      </div>

      {/* ── LAYER 3: Text — left side, clearly above both images ── */}
      <div className={`${wrap} relative z-10 h-full
        py-5
        md:pb-0 md:pt-[36px]
        lg:pb-0 lg:pt-[66px]`}>

        <div className="flex flex-col items-start gap-[8px]
          w-[55%]
          md:w-[52%] md:items-start md:text-left md:gap-[10px]
          xl:w-[428px] xl:items-start xl:text-left xl:gap-[14px]">

          <p className="font-semibold text-brand
            text-[11px] leading-[18px]
            md:text-[16px] md:leading-[24px]">
            Join as a Merchant
          </p>

          <h1 className="font-semibold text-black
            text-[16px] leading-[22px]
            md:text-[30px] md:leading-[38px]
            xl:text-[43px] xl:leading-[53px]">
            Grow Your Business<br />with <span className="text-brand">ExtraMiles.</span>
          </h1>

          <p className="font-semibold text-body
            text-[9px] leading-[13px]
            md:text-[13px] md:leading-[20px]
            xl:text-[14px] xl:leading-[21px] xl:max-w-[428px]">
            Connect with 300,000+ government employees and their families. Increase sales, build customer loyalty and turn every spend into more revenue.
          </p>

          <a href="#" className="flex cursor-pointer items-center justify-between rounded-[8px] bg-brand
            h-[30px] w-[110px] px-[8px]
            md:h-[44px] md:w-[165px] md:px-[15px]
            xl:h-[45px] xl:w-[170px] xl:px-[17px]">
            <p className="whitespace-nowrap font-semibold text-[#f5f7fd]
              text-[10px]
              md:text-[15px]
              xl:text-[16px]">Apply Now</p>
            <img alt="" className="shrink-0
              size-[12px]
              md:size-[24px]
              xl:size-[26px]" src={A.arrowBtn} />
          </a>

          <div className="flex items-center gap-[4px] md:gap-[8px]">
            <img alt="" className="shrink-0
              h-[16px] w-[14px]
              md:h-[28px] md:w-[26px]
              xl:h-[32px] xl:w-[29px]" src={A.shield} />
            <div className="flex flex-col items-start
              text-[7.5px] leading-[12px]
              md:text-[13px] md:leading-[19px]
              xl:text-[14px] xl:leading-[21px]">
              <p className="font-bold text-navy">Trusted by the Ministry of Defense</p>
              <p className="font-semibold text-body">Official Partner – Homat Al Watan Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PartnerPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-page pb-[65px]">
      <Navbar />
      <PartnerHero />
      <main className={`${wrap} relative z-10 mt-5 flex flex-col items-start gap-[16px]
        md:mt-6 md:gap-[20px]
        lg:-mt-[50px] lg:gap-[28px]`}>
        <StatsBar />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 xl:flex xl:items-center">
          <FeatureCard img={A.location1} />
          <FeatureCard img={A.location2} />
        </div>
        <JoinBanner />
        <div className="flex w-full flex-col items-center p-[10px]">
          <div className="flex w-full flex-col items-center gap-[14px]">
            <div className="flex w-full items-center justify-center gap-[31px]">
              <Line src={A.pLine31} inset="inset-[-1px_0_0_0]" className="hidden sm:block" />
              <p className="whitespace-nowrap text-[14px] font-semibold leading-[18px] text-navy">Trusted by</p>
              <Line src={A.pLine31} inset="inset-[-1px_0_0_0]" className="hidden sm:block" />
            </div>
            <div className="flex items-center gap-[12px]">
              <img alt="Ministry of Defense" className="pointer-events-none h-[54px] w-[47px] shrink-0 object-cover" src={A.ministry} />
              <div className="whitespace-nowrap text-[12px] font-semibold leading-[18px]">
                <p className="text-navy">MINISTRY OF DEFENSE</p>
                <p className="font-medium text-body">Homat Al Watan Program</p>
              </div>
            </div>
          </div>
        </div>
        <Footer compact />
      </main>
    </div>
  );
}
