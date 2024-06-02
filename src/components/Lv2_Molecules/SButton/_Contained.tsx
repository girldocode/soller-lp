import { SText } from "@/components/Lv1_Atoms";
import { TextSize } from "@/components/Lv1_Atoms/SText/@types";
import { cn } from "@/utils";
import { ButtonColor, ButtonSize, ContainedButtonProps } from "./@types";

const ContainedButton: React.FC<ContainedButtonProps> = ({
  children,
  size,
  color,
  IconStart,
  IconEnd,
  ...props
}) => {
  // color
  const colorVariants: Record<ButtonColor, string> = {
    "blue-gray-600": "bg-blue-gray-600",
    "blue-gray-900": "bg-blue-gray-900",
    "amber-300": "bg-amber-300",
    "amber-500": "bg-amber-500",
    "amber-900": "bg-amber-900",
    "amber-600": "bg-amber-600",
    "blue-light-100": "bg-blue-light-100",
    "blue-light-200": "bg-blue-light-200",
    "blue-light-300": "bg-blue-light-300",
    "blue-light-700": "bg-blue-light-700",
    "purple-500": "bg-purple-500",
    "purple-900": "bg-purple-900",
  };

  // size
  const sizeVariants: Record<ButtonSize, string> = {
    sm: "py-3 pl-7 pr-3 min-h-12",
    lg: "py-3 pl-10 pr-5 min-h-12",
  };

  const generalStyling =
    "rounded-3xl flex justify-center items-center gap-x-4 hover:opacity-80";

  // Text Variants
  const TextVariants: Record<ButtonSize, TextSize> = {
    sm: "base",
    lg: "xl",
  };

  // variant

  const classes = cn(
    generalStyling,
    sizeVariants[size],
    colorVariants[color || "amber-300"],
    props.className
  );

  return (
    <button className={classes} {...props}>
      {IconStart ?? null}
      <SText as="p" size={TextVariants[size]} weight="bold" color="amber-900">
        {children}
      </SText>
      {IconEnd ?? null}
    </button>
  );
};

export default ContainedButton;
