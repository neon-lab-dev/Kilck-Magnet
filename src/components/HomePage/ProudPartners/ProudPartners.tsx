import { IMAGES } from "../../../../public/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ProudPartners = () => {
  const logos = [
    IMAGES.dummyLogo,
    IMAGES.dummyLogo,
    IMAGES.dummyLogo,
    IMAGES.dummyLogo,
    IMAGES.dummyLogo,
    IMAGES.dummyLogo,
    IMAGES.dummyLogo,
  ];
  return (
    <div className="shadow-our-partners py-[40px] bg-white">
      <h1 className="text-neutral-10 font-Satoshi font-bold text-2xl leading-8 text-center">
        Proud to Partner with Leading Brands.
      </h1>
      <Marquee gradient={false} speed={50} className="mt-5">
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt="" className="mr-[96px]" />
        ))}
      </Marquee>
    </div>
  );
};

export default ProudPartners;
