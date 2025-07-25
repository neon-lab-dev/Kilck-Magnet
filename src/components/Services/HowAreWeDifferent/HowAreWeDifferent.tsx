import React from "react";
import Container from "./../../Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";

const HowAreWeDifferent = () => {
  return (
    <div className="bg-primary-45 py-32 font-Satoshi">
      <Container>
        <h2 className="text-neutral-10 text-center text-5xl font-black leading-14 tracking-[-1px] mb-9">
          How are we different
          <span className="text-primary-10"> from others? </span>
        </h2>
        <div className="w-[1200px] mx-auto">
          <div className="bg-white rounded-3xl shadow overflow-hidden">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-neutral-95 ">
                <tr className="">
                  <th className=" w-[398px] p-6 text-center font-bold text-neutral-10 border border-neutral-110 first:rounded-tl-3xl last:rounded-tr-3xl text-2xl">
                    Features
                  </th>
                  <th className="w-[390px] px-6 py-4 border border-neutral-110 ">
                    <Image
                      src={IMAGES.logo}
                      alt="klick"
                      width={70}
                      height={32}
                      className="mx-auto"
                    />
                  </th>
                  <th className="w-[390px] p-6 font-bold text-neutral-105 text-xl  border border-neutral-110">
                    Other Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Feature", klick: true, other: false },
                  { name: "Feature", klick: true, other: false },
                  { name: "Feature", klick: true, other: true },
                  { name: "Feature", klick: true, other: false },
                  { name: "Feature", klick: true, other: true },
                  { name: "Feature", klick: true, other: false },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="text-neutral-105 text-2xl text-center font-medium"
                  >
                    <td
                      className={`px-6 py-6 border border-neutral-110 ${
                        index === 5 ? "first:rounded-bl-3xl" : ""
                      }`}
                    >
                      {item.name}
                    </td>
                    <td
                      className={`px-6 py-6 text-center border border-neutral-110 mx-auto`}
                    >
                      {item.klick ? (
                        <span className="inline-block size-10 rounded-full bg-success-10 ">
                          <Image
                            src={ICONS.tick}
                            alt="klick"
                            className="size-10 mx-auto"
                          />
                        </span>
                      ) : (
                        <span className="inline-block rounded-full bg-red-300 ">
                          <Image
                            src={ICONS.cross}
                            alt="klick"
                            className="size-10 mx-auto"
                          />
                        </span>
                      )}
                    </td>
                    <td
                      className={`px-6 py-6 text-center border border-neutral-110 ${
                        index === 5 ? "last:rounded-br-3xl" : ""
                      }`}
                    >
                      {item.other ? (
                        <span className=" inline-block rounded-full bg-success-10 ">
                          <Image
                            src={ICONS.tick}
                            alt="klick"
                            className="size-10 mx-auto"
                          />
                        </span>
                      ) : (
                        <span className="inline-block rounded-full bg-red-300 ">
                          <Image
                            src={ICONS.cross}
                            alt="klick"
                            className="size-10 m-auto"
                          />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowAreWeDifferent;
