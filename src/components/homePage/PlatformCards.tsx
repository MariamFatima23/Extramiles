import { A } from "../../assets/assetPaths";
import type { ReactNode } from "react";

const shadow = "drop-shadow-[0px_1px_3px_rgba(0,0,0,0.11)]";

type PlatformCardProps = { children: ReactNode; text: string; gap?: string; inner?: string };

function PlatformCard({ children, text, gap = "gap-[18px]", inner = "w-[242px]" }: PlatformCardProps) {
  return (
    <div className={`flex h-[139px] w-full flex-col items-center rounded-[12px] bg-white px-[20px] py-[18px] md:px-[40px] xl:w-[300px] ${shadow}`}>
      <div className={`flex flex-col items-center ${gap} ${inner}`}>
        {children}
        <p className="w-[274px] max-w-full whitespace-pre-line text-center text-[14px] font-semibold leading-[normal] text-navy">{text}</p>
      </div>
    </div>
  );
}

export function PlatformCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:flex xl:items-center xl:justify-between">
      <PlatformCard text="Earn miles on hotels worldwide." inner="h-[110px] w-[242px]">
        <img alt="Booking.com" loading="lazy" decoding="async" className="h-[48px] w-[230px] min-w-[50px] object-cover" src={A.booking} />
      </PlatformCard>
      <PlatformCard text={"Earn miles on flights, hotels\n and more."} inner="w-[241px]">
        <img alt="Kayak" loading="lazy" decoding="async" className="h-[40px] w-[210px] object-cover" src={A.kayak} />
      </PlatformCard>
      <PlatformCard text="Earn miles on hotels at great prices." gap="gap-[7px]" inner="h-[111px] w-full">
        <img alt="Agoda" loading="lazy" decoding="async" className="h-[67px] w-[176px] object-cover" src={A.agoda} />
      </PlatformCard>
      <PlatformCard text={"Earn miles when you\n rent a car."} inner="w-[241px]">
        <div className="relative h-[38px] w-[218px] overflow-hidden">
          <img
            alt="Rentalcars.com"
            className="absolute left-[-8.71%] top-[-46.64%] h-[186.38%] w-[116.52%] max-w-none"
            loading="lazy"
            decoding="async"
            src={A.rentalcars}
          />
        </div>
      </PlatformCard>
    </div>
  );
}
