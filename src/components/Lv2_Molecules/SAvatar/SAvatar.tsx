// SAvatar.tsx
import { SText } from "@/components/Lv1_Atoms";
import { cn } from "@/utils";

import Image from "next/image";
import { SAvatarProps } from "./@type";

const SAvatar: React.FC<SAvatarProps> = ({ imageUrl, name, tagline }) => {
  const generalStyling = "flex gap-x-2 items-center";

  const classes = cn(generalStyling);

  return (
    <div className={classes}>
      <Image src={imageUrl} width={64} height={64} alt="avatar" />
      <div>
        <SText as="strong" size="base" weight="normal" color="blue-gray-900">
          {name}
        </SText>
        <SText as="strong" size="sm" weight="normal" color="blue-gray-600">
          {tagline}
        </SText>
      </div>
    </div>
  );
};

export default SAvatar;
