import { STestimonialProps } from "../STestimonial/@types";

export interface TestimonialCardProps
  extends Omit<STestimonialProps, "variant"> {
  active?: boolean;
}
