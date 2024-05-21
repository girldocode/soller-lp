import { Color } from "@/~types";

export type ButtonVariant = "contained" | "text";
export type ButtonSize = "sm" | "lg";
export type ButtonColor = Color;

export type SButtonProps = {
  children: React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  color?: ButtonColor;
  IconStart?: React.ReactNode;
  IconEnd?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;
