import { SBox } from "@/components/Lv2_Molecules";
import Image from "next/image";
import { CardProps } from "./@types";

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <SBox
      icon={<Image src={image} alt={title} width={64} height={64} />}
      align="left"
      title={title}
      description={description}
    />
  );
};

export default Card;
