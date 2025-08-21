import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../../public/assets";
import Button from "@/components/Reusable/Button/Button";

const WhySeoMatters = () => {
  const details = [
    {
      title: "More Visibility",
      description:
        "Shows your website to people already searching for what you offer.",
    },
    {
      title: "Free Traffic",
      description:
        "Brings visitors without paying for every single click like ads.",
    },
    {
      title: "Better Credibility",
      description:
        "Top results build trust. If Google trusts you, users do too.",
    },
    {
      title: "Long-Term Wins",
      description:
        "Good SEO keeps working for months, not just while your ad budget lasts.",
    },
    {
      title: "Higher Conversions",
      description:
        "Right traffic means more people actually buy, sign up, or reach out.",
    },
    {
      title: "Competitive Edge",
      description:
        "Outrank your lazy competitors who still think SEO is just “adding keywords.”",
    },
  ];
  return (
    <Container>
      <div className="font-Satoshi py-24 flex flex-col lg:flex-row gap-14 lg:gap-24">
        <Image src={IMAGES.whySEO} alt="" className="w-full lg:w-[40%] rounded-xl lg:rounded-4xl" />
        <div className="w-full lg:w-[60%] flex flex-col gap-7 lg:gap-24">
          <h2 className="text-neutral-10 heading-2xl font-black leading-14">
            Why <span className="text-primary-10"> SEO Matters?</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {details?.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <h1 className="text-primary-30 text-6xl lg:text-[80px] font-bold leading-normal">
                  {index + 1}
                </h1>
                <div>
                  <h1 className="text-neutral-10 text-xl lg:text-[28px] font-bold leading-8">
                    {item?.title}
                  </h1>
                  <p className="text-neutral-20 text-sm lg:text-lg leading-6 mt-0 lg:mt-2">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
         <Button label="Get in Touch" variant="primary" rounded="full" />
        </div>
      </div>
    </Container>
  );
};

export default WhySeoMatters;
