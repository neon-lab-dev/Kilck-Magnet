"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
 
  return (
    <div className="bg-gradient-primary py-[150px] overflow-hidden font-Satoshi">
      <Container>
        <div className="flex items-center gap-10 relative">
          <Image
            src={IMAGES.contactUsLines}
            alt=""
            className="absolute -top-20 -right-32 overflow-hidden xl:-right-56 z-0 "
          />
          <div className="w-[60%]">
            <h2 className="text-primary-20 text-2xl font-black leading-8">
              CONTACT US
            </h2>
            <h1 className="text-white text-[64px] font-black leading-[72px] mt-2 max-w-[770px]">
              We’re just a message away from starting something great together.
            </h1>

            <div className="grid grid-cols-2 gap-10 text-white font-medium mt-[116px]">
              <div>
                <Image src={ICONS.phone} alt="" className="size-5" />
                <div className="flex items-center gap-1 mt-[10px]">
                  <a href="tel:+91-93039-20792" className="hover:underline">
                    +91-93039-20792
                  </a>
                  ,{" "}
                  <a href="tel:+91-98344-36700" className="hover:underline">
                    +91-98344-36700
                  </a>
                </div>
              </div>

              <div>
                <Image src={ICONS.email} alt="" className="size-5" />
                <a
                  href="mailto:info@klickmagnet.in"
                  className="hover:underline mt-[10px]"
                >
                  info@klickmagnet.in
                </a>
              </div>

              <div>
                <Image src={ICONS.location} alt="" className="size-5" />
                <p className="max-w-[368px] mt-[10px]">
                  828,Second Floor , KLICK MAGENT DIGITAL SOLUTIONS, Kailash
                  Vihar Main Rd, City Center, Patel Nagar, Gwalior, Madhya
                  Pradesh 474002
                </p>
              </div>

              <div>
                <Image src={ICONS.location} alt="" className="size-5" />
                <p className="max-w-[368px] mt-[10px]">
                  Ichalkaranji Office - ‘Veduta Resisdency’ Flat No. A-101, KSP
                  Group, Opp to Abhay Milk Products Sangli Road Ichalkaranji ,
                  Maharashtra - 416115
                </p>
              </div>
            </div>
          </div>

          <div className="w-[40%] z-10 bg-white p-6 rounded-[20px]">
          <ContactUsForm/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
