import React from "react";
import { SButtonProps } from "./@types";
import ContainedButton from "./_Contained";
import TextButton from "./_Text";

const SButton: React.FC<SButtonProps> = ({ variant, size, ...props }) => {
  switch (variant) {
    case "text":
      return <TextButton {...props} />;
    case "contained":
      return <ContainedButton size={size} {...props} />;
  }
};

export default SButton;
