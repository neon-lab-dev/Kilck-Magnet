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
        <div className="flex items-start justify-start gap-16 mt-16 font-Satoshi">
          {/* TOC */}
          <nav
            aria-label={tocTitle}
            className="w-[30%] sticky top-16 self-start max-h-[80vh] overflow-auto pr-5"
          >
            <h3 className="text-neutral-10 font-bold text-xl leading-6 mb-6">
              {tocTitle}
            </h3>
            <ul className="list-disc text-neutral-15 text-xl leading-6 space-y-3 pl-5">
              {tocItems.map(({ label, href }, idx) => (
                <li key={idx} className="">
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
          <p className="text-neutral-15 leading-7 text-[22px] font-Satoshi w-[70%]">
            nfrastructure inspections are essential for maintaining the safety
            of assets like bridges, dams, and power lines. However, traditional
            methods face many challenges, including safety risks, slow
            processes, and human errors. As technology evolves, automated docked
            drone workflows offer a more efficient, scalable, and safer
            solution.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
