import { SText } from "@/components/Lv1_Atoms";
import { NavMenu, SLogo } from "@/components/Lv2_Molecules";
import { MenuItem } from "@/components/Lv2_Molecules/NavMenu/@type";
import { cn } from "@/utils";

const SollerFooter = () => {
  const menuItems: MenuItem[] = [
    { label: "Terms", href: "/" },
    { label: "Privacy", href: "/" },
    { label: "Support", href: "/" },
  ];

  const generalStyles = "flex justify-between py-6 px-20";
  const classes = cn(generalStyles);

  return (
    <div className={classes}>
      <div className="flex items-center gap-x-6">
        <SLogo variant="footer" />
        <SText as="span" size="base" weight="normal" color="blue-gray-900">
          @ 2023 Soller, Inc. All rights reserved.
        </SText>
      </div>
      <NavMenu variant="footer" items={menuItems} />
    </div>
  );
};

export default SollerFooter;
