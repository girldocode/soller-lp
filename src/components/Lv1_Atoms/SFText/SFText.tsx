import { cn } from "@/utils";
import {
  clamp,
  offset,
  SFTextProps,
  TextAlign,
  TextColor,
  TextDecor,
  TextLeading,
  TextSize,
  TextStyle,
  TextTracking,
  TextTransform,
  TextWeight,
} from "./@types";

const SFText: React.FC<SFTextProps> = ({
  children,
  as,
  size,
  leading,
  tracking,
  weight,
  textStyle,
  clamp,
  align,
  decor,
  transform,
  offset,
  color,
}) => {
  const Tag = as;

  // size
  const sizeVariants: Record<TextSize, string> = {
    xs: "text-xs", // 12px
    sm: "text-sm", // 14px
    base: "text-base", // 16px
    lg: "text-lg", // 18px
    xl: "text-xl", // 20px
    "2xl": "text-2xl", // 24px
    "3xl": "text-3xl", // 30px
    "4xl": "text-4xl", // 36px
    "5xl": "text-5xl", // 48px
    "6xl": "text-6xl", // 60px
    "7xl": "text-7xl", // 72px
    "8xl": "text-8xl", // 96px
    "9xl": "text-9xl", // 128px
  };

  // line height
  const leadingVariants: Record<TextLeading, string> = {
    none: "leading-none", // equivalent to line-height: 1
    tight: "leading-tight", //  line-height: 1.25
    normal: "leading-normal", // line-height: 1.5
    loose: "leading-loose", //  line-height: 2
    "x-loose": "leading-10", //  leading-{n}
  };

  // letter spacing
  const trackingVariants: Record<TextTracking, string> = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  // text weight
  const weightVariants: Record<TextWeight, string> = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  // text style
  const textStyleVariants: Record<TextStyle, string> = {
    normal: "not-italic",
    italic: "italic",
  };

  // clamp variants
  const ClampVariants: Record<clamp, string> = {
    "1": "line-clamp-1",
    "2": "line-clamp-2",
    "3": "line-clamp-3",
    "4": "line-clamp-4",
    "5": "line-clamp-5",
    "6": "line-clamp-6",
    none: "line-clamp-none",
  };

  //text align
  const textAlignVariants: Record<TextAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
    start: "text-start",
    end: "text-end",
  };

  // text decoration
  const textDecorationVariants: Record<TextDecor, string> = {
    none: "no-underline",
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
  };

  // text transform
  const textTransformVariants: Record<TextTransform, string> = {
    none: "normal-case",
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
  };

  //offset variants
  const OffsetVariants: Record<offset, string> = {
    "0": "outline-offset-0",
    "1": "outline-offset-1",
    "2": "outline-offset-2",
    "4": "outline-offset-4",
    "8": "outline-offset-8",
  };

  //color variants
  const ColorVariants: Record<TextColor, string> = {
    "blue-gray-600": "text-blue-gray-600",
    "blue-gray-900": "text-blue-gray-900",
    "amber-300": "text-amber-300",
    "amber-500": "text-amber-500",
    "amber-900": "text-amber-900",
    "blue-light-100": "text-blue-light-100",
    "blue-light-200": "text-blue-light-200",
    "blue-light-300": "text-blue-light-300",
    "purple-500": "text-purple-500",
  };

  const classes = cn(
    sizeVariants[size],
    leadingVariants[leading || "normal"],
    trackingVariants[tracking || "normal"],
    weightVariants[weight || "normal"],
    textStyleVariants[textStyle || "normal"],
    ClampVariants[clamp || "none"],
    textAlignVariants[align || "left"],
    textDecorationVariants[decor || "none"],
    textTransformVariants[transform || "none"],
    OffsetVariants[offset || "0"],
    ColorVariants[color || "blue-gray-600"]
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default SFText;
