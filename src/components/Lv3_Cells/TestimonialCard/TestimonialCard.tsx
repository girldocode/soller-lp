import { cn } from "@/utils";
import Image from "next/image";
import React from "react";
import STestimonial from "../STestimonial/STestimonial";
import { TestimonialCardProps } from "./@types";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  active,
  desc,
  name,
  imageUrl,
  tagline,
  icon,
}) => {
  const activeStyle = "w-[364px] h-[491px] ";
  const isNotActivestyle = "w-[364px] h-[443px] mt-[16px]";

  const generalStyling =
    "flex flex-col  justify-center  border border-[1px] rounded-[10px] p-8 gap-4 bg-white ";

  const classes = cn(generalStyling, active ? activeStyle : isNotActivestyle);

  return (
    <div className={classes}>
      <Image src={icon} width={64} height={64} alt="Icon" />
      <STestimonial
        variant="carousel"
        icon={icon}
        imageUrl={imageUrl}
        desc={desc}
        name={name}
        tagline={tagline}
      />
    </div>
  );
};

export default TestimonialCard;
