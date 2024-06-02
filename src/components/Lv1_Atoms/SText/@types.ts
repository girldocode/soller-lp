import { Color, HeadingTag } from "@/~types";

export type TextAs = HeadingTag | "p" | "span" | "strong";
export type TextSize =
  | "xs" // 12px
  | "sm" // 14px
  | "base" // 16px
  | "lg" // 18px
  | "xl" // 20px
  | "2xl" // 24px
  | "3xl" // 30px
  | "2rem" // 32px
  | "4xl" // 36px
  | "5xl" // 48px
  | "3.5rem" // 56px
  | "6xl" // 60px
  | "7xl"
  | "8xl"
  | "9xl";

export type TextLeading = "none" | "tight" | "normal" | "loose" | "x-loose";
export type TextTracking =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";
export type TextWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";
export type TextStyle = "normal" | "italic";
export type clamp = "1" | "2" | "3" | "4" | "5" | "6" | "none";
export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "start"
  | "end";
export type TextDecor = "none" | "underline" | "line-through" | "overline";
export type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";
export type offset = "0" | "1" | "2" | "4" | "8";
export type TextColor = Color;

export interface STextProps {
  children: React.ReactNode;
  as: TextAs;
  size: TextSize;
  leading?: TextLeading;
  tracking?: TextTracking;
  weight?: TextWeight;
  textStyle?: TextStyle;
  clamp?: clamp;
  align?: TextAlign;
  decor?: TextDecor;
  transform?: TextTransform;
  offset?: offset;
  color?: TextColor;
}
