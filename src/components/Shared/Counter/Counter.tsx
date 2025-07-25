import Container from "@/components/Reusable/Container/Container";
import React from "react";

const Counter = () => {
  const counters = [
    { value: "6+", label: "Years in business" },
    { value: "120+", label: "Global Partners" },
    { value: "50+", label: "Ongoing Projects" },
    { value: "10+", label: "Ongoing Projects" },
  ];

  return (
    <div className="bg-primary-30 font-Satoshi py-16 ">
      <Container>
        <h2 className="text-neutral-10 text-center text-5xl font-black leading-14 tracking-[-1px] mb-9 ">
          Our Numbers Speak for  <span className="text-primary-10"> Themselves..</span>
        </h2>
        <div className="flex flex-wrap item-center p-6 justify-center gap-x-9">
          {counters.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col w-[268px] justify-center text-center space-y-1 p-6">
                <p className="text-neutral-15 text-[56px] font-black leading-16 tracking-[-1px]">
                  {item.value}
                </p>
                <p className="text-neutral-20 text-2xl leading-7 tracking-[-0.5px]">
                  {item.label}
                </p>
              </div>
              {/* Divider after each except last */}
              {index < counters.length - 1 && (
                <div className="w-1 h-[70px] flex justify-center items-center my-auto bg-primary-40"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Counter;
