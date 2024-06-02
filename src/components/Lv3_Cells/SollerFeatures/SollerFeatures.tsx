import { Card } from "@/components";
import { SectionTitle } from "@/components/Lv2_Molecules";

import { cn } from "@/utils";
import Image from "next/image";

const SollerFeatures = () => {
  const services = [
    {
      title: "Erat sit",
      description:
        "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
      image: "/Icon (6).png",
    },
    {
      title: "Eget sit",
      description:
        "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.",
      image: "/Icon (3).png",
    },
    {
      title: "Et pellentesque",
      description:
        "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
      image: "/Icon (4).png",
    },
    {
      title: "Amet egestas",
      description:
        "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
      image: "/Icon (5).png",
    },
  ];

  const containerClasses = cn("grid grid-cols-2 gap-x-12 gap-y-12");
  const itemClasses = cn("flex flex-col items-start ");

  return (
    <section className="relative flex gap-x-40 px-20 ">
      <div className="absolute bottom-32 right-0 z-[-1]">
        <Image
          src="/Rectangle 15 (1).png"
          width={500}
          height={200}
          alt="mobile"
        />
      </div>
      <div className="pb-56 flex flex-col gap-y-20">
        <SectionTitle
          variant="light"
          label="Services"
          title="Personalized services"
          subtitle="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          align="left"
        />
        <div className={containerClasses}>
          {services.map((service, index) => (
            <div key={index} className={itemClasses}>
              <Card
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Image
          src="/Mobile-App-Placeholder-2 (1).png"
          width={1000}
          height={950}
          alt="mobile"
        />
      </div>
    </section>
  );
};

export default SollerFeatures;
