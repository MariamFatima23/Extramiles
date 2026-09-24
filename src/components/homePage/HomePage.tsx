import { A } from "../../assets/assetPaths";
import { Footer, Line, Navbar, wrap } from "../layout";
import { AppBanner } from "./AppBanner";
import { HomeHero } from "./HomeHero";
import { PlatformCards } from "./PlatformCards";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-page pb-[65px]">
      <Navbar />
      <main className="flex w-full flex-col items-center gap-[37px] xl:-mt-[7px]">
        <HomeHero />
        <div className={`${wrap} flex flex-col items-start gap-8 xl:gap-0`}>
          <div className="flex w-full flex-col items-center gap-6 xl:h-[179px] xl:gap-[31px]">
            <div className="flex flex-wrap items-center justify-center gap-4 xl:h-0 xl:flex-nowrap xl:gap-[31px]">
              <Line src={A.line32} className="hidden md:block" />
              <h2 className="text-center text-[20px] font-semibold leading-tight text-navy md:text-[24px] xl:whitespace-nowrap xl:leading-none">
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
