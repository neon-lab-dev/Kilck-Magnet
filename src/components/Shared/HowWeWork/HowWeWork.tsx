"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import { usePathname } from "next/navigation";

const HowWeWork = () => {
  const pathname = usePathname();
  const workProcess = [
    {
      icon: ICONS.planning,
      title: "Planning",
      description:
        "Understanding what you want out of your site and how you plan to implement it.",
    },
    {
      icon: ICONS.design,
      title: "Design",
      description:
        "We will create a beautiful, affordable website design for your creative marketing project.",
    },
    {
      icon: ICONS.development,
      title: "Development",
      description:
        "We develop content management systems for clients who need more than just the basics.",
    },
    {
      icon: ICONS.launch,
      title: "Launch",
      description:
        "After successful testing the product is delivered/deployed to the customer for their use.",
    },
    {
      icon: ICONS.maintenance,
      title: "Maintenance",
      description:
        "It is an important step which makes sure that your site works with efficiency all the time.",
    },
  ];
  return (
    <div
      className={`py-[150px] relative font-Satoshi ${
        pathname === "/" ? "mt-[1100px]" : "mt-0"
      }`}
    >
      <Image
        src={IMAGES.hoeItWorksLines}
        alt=""
        className="absolute -top-32 left-0 -z-10 "
      />
      <Container>
        <div className="flex gap-20 items-start">
          <div className="sticky top-[120px] w-[40%]">
            <h1 className="text-neutral-10 text-[48px] font-black leading-[56px] mt-2">
              How We <span className="text-primary-15">Work.</span>
            </h1>
            <p className="text-neutral-20 text-2xl leading-8 max-w-[670px] mt-4">
              Give your brand a boost with our digital marketing agency We get
              you a customer not just a traffic.
            </p>
          </div>

          <div className="w-[60%]">
            <div className="flex flex-col gap-24 relative">
              <div className="border-l-2 border-dashed border-neutral-55 h-[730px] absolute top-16 left-10 z-0"></div>

              {workProcess?.map((item, index) => (
                <div key={index} className="flex items-center gap-6 z-10">
                  <Image src={item?.icon} alt="" className="rounded-full" />
                  <div>
                    <h1 className="text-neutral-10 text-[28px] font-bold leading-10">
                      {item?.title}
                    </h1>
                    <p className="text-neutral-20 text-2xl leading-6 mt-2 max-w-[600px]">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#fff2f2] rounded-[999px] p-3 flex items-center justify-center h-fit  mt-24">
              <div className="bg-[#ffe6e6] rounded-[999px] p-3 flex items-center justify-center h-fit w-full">
                <button className="bg-gradient-primary shadow-primary-button2 py-6 px-8 rounded-[999px] text-white text-2xl font-bold leading-5 flex items-center justify-center gap-[10px] w-full mx-auto">
                  Let’s get started
                  <Image
                    src={ICONS.rightArrowWhite}
                    alt=""
                    className="size-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowWeWork;
