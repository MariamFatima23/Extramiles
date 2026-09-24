import { A } from "../../assets/assetPaths";
import { Footer, Line, Navbar, wrap } from "../layout";
import { AppBanner } from "./AppBanner";
import { HomeHero } from "./HomeHero";
import { PlatformCards } from "./PlatformCards";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-page pb-[65px]">
      <Navbar />
      <main className="flex w-full flex-col items-center gap-[20px] md:gap-[32px] xl:gap-[37px]">
        <HomeHero />
        <div className={`${wrap} flex flex-col items-start gap-[20px] md:gap-[28px] xl:gap-[31px]`}>
          <div className="flex w-full flex-col items-center gap-[16px] md:gap-6 xl:gap-[31px]">
            <div className="flex w-full flex-wrap items-center justify-center gap-[10px] md:gap-4 xl:flex-nowrap xl:gap-[31px]">
              <Line src={A.line32} className="hidden md:block" />
              <h2 className="text-center text-[16px] font-semibold leading-tight text-navy md:text-[20px] xl:whitespace-nowrap xl:leading-none xl:text-[24px]">
                Earn Miles from Top Travel Platforms
              </h2>
              <Line className="hidden md:block" />
            </div>
            <PlatformCards />
          </div>
          <AppBanner />
        </div>
        <div className={wrap}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
