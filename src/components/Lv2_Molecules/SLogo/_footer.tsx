import { SText } from "@/components/Lv1_Atoms";
import { cn } from "@/utils";
import Image from "next/image";

const FooterLogo = () => {
  const generalStyling = "flex gap-x-2  ";

  const classes = cn(generalStyling);

  return (
    <div className={classes}>
      <Image src="/logo.svg" width={44} height={32} alt="soller logo" />
      <SText as="strong" size="2xl" weight="bold" color="blue-gray-900">
        Soller
      </SText>
    </div>
  );
};

export default FooterLogo;
