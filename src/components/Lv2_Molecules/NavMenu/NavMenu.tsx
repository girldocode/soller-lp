// NavMenu.tsx

import { SText } from "@/components/Lv1_Atoms";
import { cn } from "@/utils";
import React from "react";
import { NavMenuProps } from "./@type";

const NavMenu: React.FC<NavMenuProps> = ({ items, variant }) => {
  const stylesVariant = variant === "header" ? "medium" : "normal";
  const generalStyling = "flex space-x-4";

  const classes = cn(generalStyling);

  return (
    <nav>
      <ul className={classes}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <SText
                as="strong"
                size="base"
                weight={stylesVariant}
                color="blue-gray-900"
              >
                {item.label}
              </SText>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
