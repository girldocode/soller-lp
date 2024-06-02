import { TextAlign } from "@/components/Lv1_Atoms/SText/@types";

export type SectionTitleProps = {
  variant: "light" | "dark";
  align?: TextAlign;
  label: string;
  title: string;
  subtitle?: string;
};
