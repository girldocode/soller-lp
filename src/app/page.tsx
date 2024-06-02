import {
  SollerCases,
  SollerCTA,
  SollerFeatures,
  SollerFooter,
  SollerHeader,
  SollerHero,
  SollerPickSun,
  SollerServices,
} from "@/components";
import SollerTestimonial from "@/components/Lv5_Templates/SollerTestimonial/SollerTestimonial";

export default function Home() {
  return (
    <>
      <SollerHeader />
      <SollerHero />
      <SollerPickSun />
      <SollerServices />
      <SollerFeatures />
      <SollerTestimonial />
      <SollerCases />
      <SollerCTA />
      <SollerFooter />
    </>
  );
}
