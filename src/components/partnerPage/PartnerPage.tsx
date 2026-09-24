import { A } from "../../assets/assetPaths";
import { Footer, Line, Navbar, wrap } from "../layout";
import { FeatureCard } from "./FeatureCard";
import { JoinBanner } from "./JoinBanner";
import { StatsBar } from "./StatsBar";

function PartnerHero() {
  return (
    <section className="relative w-full overflow-hidden xl:-mt-[48px] lg:h-[455px]">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[1440px] -translate-x-1/2 overflow-hidden min-[1441px]:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="absolute left-px top-0 h-full w-full overflow-hidden opacity-30 lg:w-[911px]"><img alt="" className="absolute left-0 top-0 size-full max-w-none object-cover object-left-bottom" src={A.town} /></div>
        <img alt="" className="absolute right-[-14px] top-0 hidden h-[455px] w-[52vw] max-w-none object-cover object-top lg:block xl:w-[694px]" src={A.pos3} />
      </div>
      <div className={`${wrap} relative z-10 py-8 lg:h-full lg:pb-0 lg:pt-[66px]`}>
        <div className="flex w-full max-w-[428px] flex-col items-start gap-[14px] lg:pl-[3px] xl:w-[428px]">
          <div className="flex w-full flex-col items-start font-semibold"><p className="w-full text-[16px] leading-[24px] text-brand">Join as a Merchant</p><h1 className="w-full text-[32px] leading-[40px] text-black sm:text-[43px] sm:leading-[53px]">Grow Your Business<br />with <span className="text-brand">ExtraMiles.</span></h1></div>
          <p className="text-[14px] font-semibold leading-[21px] text-body xl:whitespace-nowrap">Connect with 300,000+ government employees and<br className="hidden xl:inline" /> their families. Increase sales, build customer loyalty<br className="hidden xl:inline" /> and turn every spend into more revenue.</p>
          <a href="#" className="flex h-[45px] w-[170px] cursor-pointer items-start rounded-[8px] bg-brand pb-[8px] pl-[17px] pr-[15px] pt-[11px]"><div className="flex items-center gap-[24px]"><p className="whitespace-nowrap text-[16px] font-semibold leading-[14px] text-[#f5f7fd]">Apply Now</p><img alt="" className="size-[26px] shrink-0" src={A.arrowBtn} /></div></a>
          <div className="flex items-center gap-[8px]"><img alt="" className="h-[32px] w-[29px] shrink-0" src={A.shield} /><div className="flex max-w-[287px] flex-col items-start text-[14px] leading-[21px]"><p className="w-full font-bold text-navy">Trusted by the Ministry of Defense</p><p className="w-full font-semibold text-body">Official Partner – Homat Al Watan Program</p></div></div>
        </div>
      </div>
      <img alt="" className="pointer-events-none relative block h-[300px] w-full max-w-none object-cover object-top sm:h-[380px] lg:hidden" src={A.pos3} />
    </section>
  );
}

export default function PartnerPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-page pb-[65px]"><Navbar /><PartnerHero /><main className={`${wrap} relative z-10 mt-6 flex flex-col items-start gap-[28px] lg:-mt-[50px]`}>
      <StatsBar />
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 xl:flex xl:items-center"><FeatureCard img={A.location1} /><FeatureCard img={A.location2} /></div>
      <JoinBanner />
      <div className="flex w-full flex-col items-center p-[10px]"><div className="flex w-full flex-col items-center gap-[14px]"><div className="flex w-full items-center justify-center gap-[31px]"><Line src={A.pLine31} inset="inset-[-1px_0_0_0]" className="hidden sm:block" /><p className="whitespace-nowrap text-[14px] font-semibold leading-[18px] text-navy">Trusted by</p><Line src={A.pLine31} inset="inset-[-1px_0_0_0]" className="hidden sm:block" /></div><div className="flex items-center gap-[12px]"><img alt="Ministry of Defense" className="pointer-events-none h-[54px] w-[47px] shrink-0 object-cover" src={A.ministry} /><div className="whitespace-nowrap text-[12px] font-semibold leading-[18px]"><p className="text-navy">MINISTRY OF DEFENSE</p><p className="font-medium text-body">Homat Al Watan Program</p></div></div></div></div>
      <Footer compact />
    </main></div>
  );
}
