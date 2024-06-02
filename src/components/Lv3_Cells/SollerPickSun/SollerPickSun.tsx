import { SectionTitle } from "@/components/Lv2_Molecules";
import Image from "next/image";

const SollerPickSun = () => {
  return (
    <div className=" relative flex flex-col items-center gap-y-20 pb-20">
      <div className="absolute top-[190px] left-[-50px] z-[-1]">
        <Image src="/Ellipse 14.png" width={400} height={500} alt="eclipse" />
      </div>
      <div className="absolute top-[322px] left-[104px] z-[-1]">
        <Image src="/Ellipse 16.png" width={131} height={131} alt="eclipse" />
      </div>
      <div className="absolute top-[800px] left-[150px] z-0">
        <Image src="/Ellipse 17.png" width={89} height={89} alt="eclipse" />
      </div>
      <div className="absolute top-[500px] left-[1200px] z-[-1]">
        <Image src="/Ellipse 15.png" width={596} height={597} alt="eclipse" />
      </div>
      <div className="absolute top-[600px] right-20 z-[-1]">
        <Image src="/Ellipse 18.png" width={154} height={154} alt="eclipse" />
      </div>
      <div className="absolute top-[900px] right-32 z-0">
        <Image
          src="/Ellipse 16 (1).png"
          width={140}
          height={140}
          alt="eclipse"
        />
      </div>
      <div className="pt-20 px-72">
        <SectionTitle
          align="center"
          variant="light"
          label="No more waste"
          title="Pick the Sun"
          subtitle="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
        />
      </div>
      <div>
        <Image src="/Desktop.png" width={1194} height={750} alt="desktop" />
      </div>
    </div>
  );
};

export default SollerPickSun;
