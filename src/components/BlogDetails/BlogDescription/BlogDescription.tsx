import React from "react";
import Container from "@/components/Reusable/Container/Container";

type TocItem = {
  label: string;
  href?: string;
};

type BlogSectionProps = {
  tocItems: TocItem[];
  //   descriptionContent: React.ReactNode;
  tocTitle?: string;
};

const BlogSection: React.FC<BlogSectionProps> = ({
  tocItems,
  //   descriptionContent,
  tocTitle = "Table of Contents",
}) => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-start gap-8 lg:gap-16 mt-16 font-Satoshi">
          {/* TOC */}
          <nav
            aria-label={tocTitle}
            className="w-full md:w-[30%] md:sticky md:top-28 self-start"
          >
            <h3 className="text-neutral-10 font-bold text-xl leading-6 mb-3 lg:mb-6">
              {tocTitle}
            </h3>
            <ul className="list-disc text-neutral-15 text-sm lg:text-base 2xl:text-xl leading-6 space-y-1 lg:space-y-3 pl-5">
              {tocItems.map(({ label, href }, idx) => (
                <li key={idx}>
                  {href ? (
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  ) : (
                    label
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Description */}
          <div className="w-full md:w-[70%]">
            <p className="text-neutral-15 leading-7 text-sm lg:text-base 2xl:text-xl font-Satoshi">
              Inspections are essential for maintaining the safety of assets
              like bridges, dams, and power lines. However, traditional methods
              face many challenges, including safety risks, slow processes, and
              human errors. As technology evolves, automated docked drone
              workflows offer a more efficient, scalable, and safer solution.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic ipsa enim sunt excepturi. Nihil voluptatum amet quasi facilis corrupti et, esse omnis ipsam natus rem fugit nobis eius quia rerum impedit obcaecati, a inventore adipisci facere maiores ipsa. Omnis, sunt? Ad ducimus, at vero enim nemo officiis accusantium iusto soluta expedita unde sint odit nostrum nesciunt pariatur optio! Autem, vero iusto distinctio vitae eaque veritatis, itaque aliquam modi asperiores eligendi rerum impedit id adipisci esse quia necessitatibus cupiditate doloremque rem, repudiandae quas assumenda illum ducimus? Reprehenderit assumenda incidunt corporis voluptatibus veritatis explicabo facilis molestias, non ratione laboriosam. Fugiat eius molestias blanditiis possimus! Porro dicta repellendus delectus, dolorum animi non! Veniam adipisci nemo, expedita est quo minima similique et provident, harum explicabo aliquid deserunt voluptatem laborum voluptatum debitis ea inventore, dolores illum cupiditate illo aliquam! Voluptatem repudiandae eos possimus fugit, atque voluptas consequatur molestias tenetur obcaecati ullam similique corporis neque odio, soluta veniam voluptate voluptates modi! Temporibus laudantium, nam hic esse at atque sit rem cumque debitis quo deleniti quod vel reprehenderit aliquid animi, laboriosam dolorem ea modi? Facilis repellat vitae praesentium ducimus facere suscipit in rem temporibus eaque atque veniam asperiores reiciendis quia architecto distinctio est recusandae eveniet corrupti, id dolores, quis incidunt, quo quidem perspiciatis. Facilis porro dolores sit ex omnis, similique id. Esse sint quasi fugiat facilis recusandae minima aut nam expedita quidem maiores, ducimus consequuntur odit architecto obcaecati illo tempora vitae itaque dignissimos perferendis dolor dolorum saepe quis. Repellendus illum nesciunt excepturi cupiditate delectus ratione hic nam adipisci voluptates sint nobis, maiores voluptas possimus, veniam minima. Dolor laudantium accusantium eum blanditiis culpa explicabo ea, incidunt ipsum officiis dolores corporis at laborum voluptatibus quas, quod possimus sint ipsa id similique unde repudiandae quo obcaecati nobis sed. Laboriosam aut suscipit illum, sunt dolorem eligendi porro dolore culpa excepturi, sit exercitationem eaque accusantium beatae iste quibusdam accusamus repellendus non quo animi repudiandae eum, sed officia. Inventore eius ducimus aut saepe, asperiores distinctio repudiandae odio atque temporibus aliquam dignissimos corrupti soluta vero nesciunt beatae porro dolorem! Amet quae ipsa, fuga similique modi aliquid sed quasi porro quis natus error neque earum est ad soluta nesciunt beatae ea quisquam, eligendi nam, adipisci officiis libero quod hic? Numquam voluptatibus vero quasi porro labore tempora perspiciatis, ipsa delectus mollitia nam omnis impedit, dolorum, quos dolores ut necessitatibus dicta. Rem sequi voluptatum saepe beatae, pariatur eum, recusandae facere accusamus cum eaque vitae mollitia sed delectus similique cupiditate et nostrum odit. Veritatis aliquam exercitationem nulla modi veniam eos laboriosam libero neque facilis, eligendi labore ipsa aliquid voluptates eum distinctio sit officia molestiae magni, sunt, atque porro dolor odit molestias? Obcaecati dicta, dolor nam quo sapiente, minima vitae totam dignissimos, ipsam sint exercitationem praesentium! Accusantium iure eum, maiores quaerat, quam quae, veritatis dolorem temporibus quo error nesciunt? Minus blanditiis commodi animi maxime eius, odio rerum placeat repellendus. Dolore molestiae omnis eligendi illum soluta labore et velit asperiores maxime! Voluptas expedita totam excepturi ducimus odit similique reiciendis, laboriosam iure tenetur omnis temporibus dolores optio culpa nisi ipsum reprehenderit nostrum impedit delectus quis veritatis? Tenetur temporibus et esse expedita nihil modi optio nam magni quibusdam aliquam reprehenderit atque quaerat ipsa laboriosam, vitae consequatur id quos consectetur explicabo ullam! Dolor, inventore consectetur praesentium iste ea neque eos velit necessitatibus, eaque obcaecati sit, dolorum aliquam voluptas! Doloremque quo amet dicta esse neque veritatis quidem nisi alias, id, modi, incidunt asperiores. Quod nesciunt, quos doloremque cumque consequatur placeat minima laboriosam dicta, ratione ducimus iusto voluptatibus! Ea, aliquam expedita at alias ducimus quibusdam enim optio ipsa pariatur itaque aperiam facilis fugit, corporis quo molestias dolores quasi. Sunt fugiat perferendis repellendus corrupti expedita.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
