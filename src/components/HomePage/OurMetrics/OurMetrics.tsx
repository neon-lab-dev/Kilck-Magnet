import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS } from "../../../../public/assets";

const OurMetrics = () => {
  const metrics = [
    {
      icon: ICONS.experience,
      value: "6+",
      description: "Years in business",
    },
    {
      icon: ICONS.globalPartners,
      value: "50+",
      description: "Global Partners",
    },
    {
      icon: ICONS.projects,
      value: "30+",
      description: "Ongoing Projects",
    },
    {
      icon: ICONS.clients,
      value: "98%",
      description: "Client Satisfaction Rate",
    },
  ];
  return (
    <div className="bg-gradient-primary py-[150px] h-[900px]">
      <Container>
        <div className="flex items-center gap-20">
          <div className="w-[40%]">
            <h2 className="text-primary-25 text-2xl font-black leading-8">
              METRICS
            </h2>
            <h1 className="text-white text-[48px] font-black leading-[56px] mt-2">
              Our Numbers Speak for Themselves
            </h1>
            <p className="text-primary-30 text-2xl leading-7 mt-2">
              We don’t just promise results, we deliver them. Here’s a quick
              look at the impact we’ve made.
            </p>

            <button className="bg-white shadow-secondary-button py-6 px-8 rounded-[999px] text-primary-10 text-xl font-bold leading-6 mt-8 flex items-center gap-[10px] w-fit">
              Schedule a Call
              <Image src={ICONS.rightArrow} alt="" className="size-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-9 w-[60%]">
            {metrics?.map((metric, index) => (
              <div
                key={index}
                className="border border-primary-20 px-6 py-5 flex items-center gap-6 rounded-[18px]"
              >
                <Image src={metric?.icon} alt="" className="size-[64px]" />
                <div>
                  <h1 className="text-white text-[48px] font-black leading-[56px] mt-2">
                    {metric?.value}
                  </h1>
                  <p className="text-primary-30 text-2xl leading-7">
                    {metric?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurMetrics;
