/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCarousal from "@/components/BlogDetails/BlogCarousal/BlogCarousal";
import BlogDescription from "@/components/BlogDetails/BlogDescription/BlogDescription";
import BlogDetailsHero from "@/components/BlogDetails/BlogDetailsHero/BlogDetailsHero";
import FAQ from "@/components/Shared/FAQ/FAQ";
import React from "react";

const Page = ({ params }: any) => {
  const tocItems = [
    { label: "Drone Inspections", href: "#drone-inspections" },
    { label: "Drone-in-a-Box (DiaB) Technology", href: "#dia-b-technology" },
    { label: "Benefits of DiaB" },
    {
      label:
        "How DiaB Will Transform Infrastructure Monitoring and Maintenance",
      href: "#how-dia-b-will-transform-infrastructure-monitoring-and-maintenance",
    },
    {
      label: "The Future of Infrastructure Monitoring",
      href: "#future-of-infrastructure-monitoring",
    },
    { label: "Conclusion", href: "#conclusion" },
  ];

  return (
    <div>
      <BlogDetailsHero />
      <BlogDescription
        tocItems={tocItems}
        // descriptionContent={descriptionContent}
      />

      <div className="pl-0 2xl:pl-20 mt-12 py-24">
        <BlogCarousal />
      </div>
      <FAQ />
    </div>
  );
};

export default Page;
