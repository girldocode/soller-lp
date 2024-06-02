import { SText } from "@/components/Lv1_Atoms";
import { cn } from "@/utils";
import { SectionTitleProps } from "./@types";

const SectionTitle: React.FC<SectionTitleProps> = ({
  variant,
  align = "left",
  label,
  title,
  subtitle,
}) => {
  const labelVariant = variant === "light" ? "amber-600" : "amber-300";
  const titleVariant = variant === "light" ? "blue-gray-900" : "blue-light-100";
  const subtitleVariant =
    variant === "light" ? "blue-gray-900" : "blue-light-100";

  const generalStyling = "flex flex-col gap-y-2";
  const classes = cn(generalStyling);

  return (
    <div className={classes}>
      <div className="flex flex-col gap-y-2 ">
        <SText
          as="span"
          size="xl"
          weight="medium"
          align={align}
          color={labelVariant}
        >
          {label}
        </SText>
        <SText
          as="strong"
          size="3.5rem"
          weight="extrabold"
          align={align}
          color={titleVariant}
        >
          {title}
        </SText>
      </div>
      <div className="flex flex-col gap-y-6 line leading-9">
        <SText
          as="p"
          size="xl"
          weight="normal"
          align={align}
          color={subtitleVariant}
        >
          {subtitle}
        </SText>
      </div>
    </div>
  );
};

export default SectionTitle;
