import { Card } from "@/components";
import { SectionTitle } from "@/components/Lv2_Molecules";
import { cn } from "@/utils";
import Image from "next/image";

const SollerServices = () => {
  const services = [
    {
      title: "Et mauris 1",
      description:
        "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
      image: "/truck.png",
    },
    {
      title: "Eget sit",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      image: "/Icon (1).png",
    },
    {
      title: "Imperdiet pellentesque",
      description:
        "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
      image: "/Icon (2).png",
    },
    {
      title: "Non libero",
      description:
        "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
      image: "/Icon.png",
    },
  ];

  const containerClasses = cn("grid grid-cols-2 gap-x-12 gap-y-12");
  const itemClasses = cn("flex flex-col items-start");

  return (
    <section className=" relative flex gap-x-40 px-20 ">
      <div className="absolute top-10 left-0 z-[-1]">
        <Image src="/Rectangle 15.png" width={500} height={200} alt="mobile" />
      </div>
      <div className="absolute top-14 left-40 z-0">
        <Image src="/Ellipse 17 (1).png" width={80} height={80} alt="mobile" />
      </div>
      <div className="absolute bottom-80 left-14 z-[-1]">
        <Image src="/Ellipse 18 (1).png" width={80} height={80} alt="mobile" />
      </div>
      <div className="pt-20 ">
        <Image
          src="/Mobile-App-Placeholder-1 (1).png"
          width={800}
          height={900}
          alt="mobile"
        />
      </div>
      <div className=" pt-44 pb-44 flex flex-col gap-y-20 ">
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
    </section>
  );
};

export default SollerServices;
