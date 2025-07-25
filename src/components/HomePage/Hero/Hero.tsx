import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const Hero = () => {
  return (
    <div className=" relative pb-[175px] bg-neutral-35 font-Satoshi">
      <div className="pt-[200px]">
        <Container>
          <div className="bg-neutral-40 border border-neutral-45 py-[10px] px-5 rounded-[100px] text-white font-medium leading-5 w-fit">
            Built for Ambitious Brands. Designed for Results.
          </div>

          <div className="flex items-center justify-between relative">
            <div>
              <h1 className="text-[72px] font-black leading-20 text-white max-w-[900px]">
                Turn Clicks into Clients. Build a Brand That Performs.
              </h1>
              <p className="text-neutral-50 text-[28px] leading-8 mt-4 max-w-[700px]">
                We help ambitious businesses grow smarter with stunning design,
                strategic marketing, and conversion-obsessed execution, all
                under one roof.
              </p>

              <button className="bg-gradient-primary shadow-primary-button py-6 px-8 rounded-[20px] text-white text-2xl font-bold leading-5 mt-8">
                Explore more
              </button>
            </div>
            <Image src={IMAGES.heroImage} alt="" className="" />
          </div>
        </Container>
      </div>
      <Image
        src={IMAGES.heroGradient}
        alt=""
        className="bottom-0 absolute top-20 w-full"
      />
    </div>
  );
};

export default Hero;
