"use client";

import { TestimonialCard } from "@/components/Lv3_Cells";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    icon: "/Icon (8).png",
    desc: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    imageUrl: "/Size=M.png",
    name: "Jane Cooper",
    tagline: "10KWh",
  },
  {
    icon: "/Icon (7).png",
    desc: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    imageUrl: "/User Thumb (1).png",
    name: "Ralph Edwards",
    tagline: "32KWh",
  },
  {
    icon: "/Icon (9).png",
    desc: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    imageUrl: "/User Thumb (2).png",
    name: "Courtney Henry",
    tagline: "6KWh ",
  },
  {
    icon: "/Icon (10).png",
    desc: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    imageUrl: "/User Thumb (3).png",
    name: "Cameron Williamson",
    tagline: "12KWh ",
  },
  {
    icon: "/Icon (9).png",
    desc: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    imageUrl: "/Size=M.png",
    name: "Alice Johnson",
    tagline: "12KWh ",
  },
];

const TestimonialCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance) {
      setCurrentIndex(swiperInstance.realIndex);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="pl-20  flex flex-col gap-y-20">
      <div>
        <Swiper
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateIndex(swiper);
          }}
          onSlideChange={(swiper) => updateIndex(swiper)}
          spaceBetween={24}
          slidesPerView={4}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                icon={testimonial.icon}
                desc={testimonial.desc}
                imageUrl={testimonial.imageUrl}
                name={testimonial.name}
                tagline={testimonial.tagline}
                active={index === currentIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-x-6 mb-20 " style={{ zIndex: 1 }}>
        <button
          onClick={handlePrev}
          className="border-2 rounded-full p-3 border-amber-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z"
              stroke="#FCD34D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="border-2 rounded-full p-3 border-amber-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z"
              stroke="#FCD34D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
