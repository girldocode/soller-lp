import { Color, HeadingTag } from "@/~types";

export type TextAs = HeadingTag | "p" | "span";
export type TextSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
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

export interface SFTextProps {
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
