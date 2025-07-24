"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import Textarea from "@/components/Reusable/TextArea/TextArea";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>();
  return (
    <div className="bg-gradient-primary py-[150px] font-Satoshi">
      <Container>
        <div className="flex items-center gap-10 relative">
          <Image
            src={IMAGES.contactUsLines}
            alt=""
            className="absolute -top-20 -right-32 z-0"
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

          <div className="w-[40%] z-10">
            <form className="bg-white p-6 rounded-[20px] flex flex-col gap-8 z-10">
              <TextInput
                label="Your Name"
                placeholder="Enter your full name"
                {...register("title", { required: "Name is required" })}
                error={errors.title}
              />
              <TextInput
                label="Email Address"
                placeholder="Enter your email"
                {...register("title")}
                error={errors.title}
                isRequired={false}
              />
              <TextInput
                label="Mobile No."
                placeholder="EEnter your email"
                {...register("title", { required: "Phone number is required" })}
                error={errors.title}
              />
              <Textarea
                label="Put your questions here"
                {...register("question")}
                placeholder="Write us your question here..."
              />
              <div className="flex items-start">
                <button className="bg-gradient-primary px-6 py-3 rounded-lg text-white font-bold leading-6 w-fit cursor-pointer">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
