import Image from "next/image";
import { ICONS } from "../../../../public/assets";
import Marquee from "react-fast-marquee";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
  ];
  return (
    <div className="bg-neutral-65 py-[96px] font-Satoshi">
      <h1 className="text-white text-center text-[48px] font-black leading-[56px]">
        Our Google Reviews
      </h1>

      <Marquee gradient={false} speed={50} className="mt-12">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-neutral-10 p-6 mr-6 w-[320px] rounded-[10px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[6px]">
                <div className="size-10 rounded-full bg-primary-35 text-primary-10 flex items-center justify-center text-xl font-bold">
                  R
                </div>
                <h1 className="text-white font-bold">{review?.name}</h1>
              </div>
              <Image src={ICONS.google} alt="" className="size-6" />
            </div>
            <div className="flex items-center gap-2 mt-[10px]">
              <Image src={ICONS.starts} alt="" className="" />
              <p className="text-white text-sm">2 months ago</p>
            </div>
            <p className="text-white text-sm mt-[10px]">{review?.review}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default GoogleReviews;
