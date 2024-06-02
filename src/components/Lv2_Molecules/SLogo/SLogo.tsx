import { SLogoProps } from "./@types";
import FooterLogo from "./_footer";
import HeaderLogo from "./_header";

const SLogo: React.FC<SLogoProps> = ({ variant }) => {
  return variant === "header" ? <HeaderLogo /> : <FooterLogo />;
};

export default SLogo;
