import { SText } from "@/components/Lv1_Atoms";
import { SAvatar } from "@/components/Lv2_Molecules";
import { cn } from "@/utils";
import { STestimonialProps } from "./@types";

const STestimonial: React.FC<STestimonialProps> = ({
  variant,
  desc,
  imageUrl,
  name,
  tagline,
}) => {
  const stylesVariant = variant === "hero" ? "gap-y-4" : "gap-y-8";

  const classes = cn("grid", stylesVariant);

  return (
    <div className={classes}>
      <SText as="p" size="lg" color="blue-gray-900">
        {desc}
      </SText>
      <SAvatar imageUrl={imageUrl} name={name} tagline={tagline} />
    </div>
  );
};

export default STestimonial;
