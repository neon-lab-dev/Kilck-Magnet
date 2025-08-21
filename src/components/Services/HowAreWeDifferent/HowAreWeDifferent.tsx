import React from "react";
import Container from "./../../Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";

const HowAreWeDifferent = () => {
  return (
    <div className="bg-primary-45 py-32 font-Satoshi">
      <Container>
        <h2 className="text-neutral-10 text-center heading-xl mb-9">
          How are we different
          <span className="text-primary-10"> from others? </span>
        </h2>
        {/* Table content */}
        <div className="max-w-full mx-auto">
          <div className="bg-white rounded-3xl shadow overflow-hidden">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-neutral-95">
                <tr>
                  <th className="w-[35%] p-4 text-center font-bold text-neutral-10 border border-neutral-110 text-lg md:text-2xl">
                    Features
                  </th>
                  <th className="w-[32.5%] px-4 py-3 border border-neutral-110">
                    <Image
                      src={IMAGES.logo}
                      alt="klick"
                      width={60}
                      height={28}
                      className="mx-auto"
                    />
                  </th>
                  <th className="w-[32.5%] p-4 font-bold text-neutral-105 text-lg md:text-xl border border-neutral-110">
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
                    className="text-neutral-105 text-base md:text-xl text-center font-medium"
                  >
                    <td className="px-4 py-4 border border-neutral-110">
                      {item.name}
                    </td>
                    <td className="px-4 py-4 text-center border border-neutral-110">
                      {item.klick ? (
                        <Image
                          src={ICONS.tick}
                          alt="klick"
                          className="size-8 md:size-10 mx-auto"
                        />
                      ) : (
                        <Image
                          src={ICONS.cross}
                          alt="klick"
                          className="size-8 md:size-10 mx-auto"
                        />
                      )}
                    </td>
                    <td className="px-4 py-4 text-center border border-neutral-110">
                      {item.other ? (
                        <Image
                          src={ICONS.tick}
                          alt="klick"
                          className="size-8 md:size-10 mx-auto"
                        />
                      ) : (
                        <Image
                          src={ICONS.cross}
                          alt="klick"
                          className="size-8 md:size-10 mx-auto"
                        />
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
