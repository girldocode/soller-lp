// types.ts
export interface MenuItem {
  label: string;
  href: string;
}

export type NavMenuProps = {
  items: MenuItem[];
  variant: "header" | "footer";
};
