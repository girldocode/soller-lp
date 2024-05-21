import { SFText } from "@/components/Lv1_Atoms";
import { cn } from "@/utils";
import { ButtonColor, TextButtonProps } from "./@types";

const TextButton: React.FC<TextButtonProps> = ({
  children,
  color,
  IconStart,
  IconEnd,
  ...props
}) => {
  const colorVariants: Record<ButtonColor, string> = {
    "blue-gray-600": "bg-blue-gray-600",
    "blue-gray-900": "bg-blue-gray-900",
    "amber-300": "bg-amber-300",
    "amber-500": "bg-amber-500",
    "amber-900": "bg-amber-900",
    "blue-light-100": "bg-blue-light-100",
    "blue-light-200": "bg-blue-light-200",
    "blue-light-300": "bg-blue-light-300",
    "purple-500": "bg-purple-500",
  };

  const generalStyling =
    "flex justify-center items-center gap-x-4 hover:opacity-60 py-2 pr-3 ";

  // variant

  const classes = cn(
    generalStyling,
    // colorVariants[color || "amber-500"],
    props.className
  );

  return (
    <button className={classes} {...props}>
      {IconStart ?? null}
      <SFText as="p" size="sm" color="amber-900" weight="medium">
        Text Button
      </SFText>
      {IconEnd ?? null}
    </button>
  );
};

export default TextButton;
