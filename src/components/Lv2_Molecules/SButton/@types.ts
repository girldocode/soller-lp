import { Color } from "@/~types";

export type ButtonVariant = "contained" | "text";
export type ButtonSize = "sm" | "lg";
export type ButtonColor = Color;

interface _Common extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  color?: ButtonColor;
  IconStart?: React.ReactNode;
  IconEnd?: React.ReactNode;
}

export type TextButtonProps = Omit<_Common, "size">;
export type ContainedButtonProps = _Common;

export type SButtonProps = {
  variant: ButtonVariant;
} & (TextButtonProps & ContainedButtonProps);
