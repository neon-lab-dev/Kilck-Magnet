"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Textarea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>();
  return (
    <form
      className={`flex flex-col z-10 ${
        pathname === "/contact-us" ? "gap-4 md:gap-6" : "gap-4 md:gap-8"
      }`}
    >
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
        rows={pathname === "/contact-us" ? 2 : 5}
      />
      <div className="flex items-start">
        <button className="bg-gradient-primary px-6 py-3 rounded-lg text-white font-bold leading-6 w-fit cursor-pointer">
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
