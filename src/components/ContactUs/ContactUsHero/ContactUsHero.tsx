import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import ContactUsForm from "@/components/Shared/ContactUs/ContactUsForm";

const ContactUsHero = () => {
  const sicoaiLinks = [
    {
      icon: ICONS.instagramPrimary,
      path: "https://www.instagram.com/sicoai/",
    },
    {
      icon: ICONS.facebookPrimary,
      path: "https://www.facebook.com/sicoai/",
    },
    {
      icon: ICONS.twitterPrimary,
      path: "https://www.linkedin.com/company/sicoai/",
    },
    {
      icon: ICONS.youtubePrimary,
      path: "https://www.youtube.com/@sicoai",
    },
  ];
  return (
    <div className=" relative pb-[110px] bg-neutral-35 font-Satoshi">
      <div className="pt-[100px]">
        <Container>
          <h1 className="text-[64px] font-black leading-[64px] text-white text-center">
            Contact Us
          </h1>
          <div className=" bg-white rounded-[20px] z-10 relative flex mt-[64px]">
            <div className="w-[50%] p-9 border-r border-neutral-55">
              <ContactUsForm />
            </div>
            {/* <div className="bg-neutral-55 h-full w-[1px]"></div> */}

            <div className="w-[50%] px-9 py-7 flex flex-col justify-between text-neutral-70 text-xl leading-7 font-medium">
              <div className="flex items-center gap-4 border-b border-neutral-55 pb-7">
                <Image src={ICONS.locationPrimary} alt="" className="size-6" />
                <p className="">
                  828,Second Floor , KLICK MAGENT DIGITAL SOLUTIONS, Kailash
                  Vihar Main Rd, City Center, Patel Nagar, Gwalior, Madhya
                  Pradesh 474002
                </p>
              </div>
              <div className="flex items-center gap-4 border-b border-neutral-55 pb-7">
                <Image src={ICONS.locationPrimary} alt="" className="size-6" />
                <p className="">
                  Ichalkaranji Office - ‘Veduta Resisdency’ Flat No. A-101, KSP
                  Group, Opp to Abhay Milk Products Sangli Road Ichalkaranji ,
                  Maharashtra - 4161152
                </p>
              </div>
              <div className="flex items-center gap-4 border-b border-neutral-55 pb-7">
                <Image src={ICONS.emailPrimary} alt="" className="size-6" />
                <a
                  href="mailto:info@klickmagnet.in"
                  target="_blank"
                  className=" hover:underline"
                >
                  info@klickmagnet.in
                </a>
              </div>
              <div className="flex items-center gap-4 border-b border-neutral-55 pb-7">
                <Image src={ICONS.emailPrimary} alt="" className="size-6" />
                <div className="flex items-center gap-1">
                  <a
                    href="tel:+91-93039-20792"
                    target="_blank"
                    className=" hover:underline"
                  >
                    +91-93039-20792,
                  </a>
                  <a
                    href="tel:+91-98344-367002"
                    target="_blank"
                    className=" hover:underline"
                  >
                    +91-98344-367002
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between pb-7">
                <p className="">Get connected on our Social networks</p>
                <div className="flex items-center gap-2">
                  {sicoaiLinks?.map((item) => (
                    <a key={item?.path} href={item?.path} target="_blank">
                      <Image src={item?.icon} alt="" className="size-8" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
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

export default ContactUsHero;
