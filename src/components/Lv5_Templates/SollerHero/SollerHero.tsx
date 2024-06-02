import { HeroLeft } from "@/components/Lv4_Organisms";
import Image from "next/image";

const SollerHero = () => {
  return (
    <div className="flex ">
      <div className="absolute top-0 right-0 z-[-1]">
        <Image
          src="/Vector 1 (4).png"
          width={673}
          height={694}
          alt="hero-img"
        />
      </div>
      <HeroLeft />
      <div className="relative">
        <Image src="/Right.png" width={1278} height={1000} alt="hero-img" />
      </div>
    </div>
  );
};

export default SollerHero;
