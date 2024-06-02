import { SText } from "@/components/Lv1_Atoms";
import { cn } from "@/utils";
import React from "react";
import { SBoxProps } from "./@types";

const SBox: React.FC<SBoxProps> = ({
  title,
  description,
  icon,
  align = "left",
}) => {
  const generalStyling = "flex flex-col gap-y-4";
  const classes = cn(generalStyling);
  return (
    <div className={classes}>
      <div>{icon}</div>
      <SText
        as="h3"
        size="2xl"
        weight="bold"
        align={align}
        color="blue-gray-900"
      >
        {title}
      </SText>
      <SText as="p" weight="normal" size="lg" color="blue-gray-900">
        {description}
      </SText>
    </div>
  );
};
export default SBox;
