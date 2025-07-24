import BlogCarousal from "@/components/BlogDetails/BlogCarousal/BlogCarousal";
import BlogDescription from "@/components/BlogDetails/BlogDescription/BlogDescription";
import BlogDetailsHero from "@/components/BlogDetails/BlogDetailsHero/BlogDetailsHero";
import React from "react";

type PageProps = {
  params: { id: string };
};

const Page = ({ params }: PageProps) => {
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

  const descriptionContent = (
    <>
      <p id="drone-inspections">
        Infrastructure inspections are essential for maintaining the safety of
        assets like bridges, dams, and power lines. However, traditional methods
        face many challenges...
      </p>

      <h2 id="dia-b-technology" className="mt-8 mb-3 text-xl font-semibold">
        Drone-in-a-Box (DiaB) Technology
      </h2>
      <p>
        Automated docked drone workflows offer a more efficient, scalable, and
        safer solution... Automated docked drone workflows offer a more
        efficient, scalable, and safer solution... Automated docked drone
        workflows offer a more efficient, scalable, and safer solution...
        Automated docked drone workflows offer a more efficient, scalable, and
        safer solution... Automated docked drone workflows offer a more
        efficient, scalable, and safer solution... Automated docked drone
        workflows offer a more efficient, scalable, and safer solution...
        Automated docked drone workflows offer a more efficient, scalable, and
        safer solution... Automated docked drone workflows offer a more
        efficient, scalable, and safer solution... Automated docked drone
        workflows offer a more efficient, scalable, and safer solution...
      </p>

      <h2 id="benefits-of-dia-b" className="mt-8 mb-3 text-xl font-semibold">
        Benefits of DiaB Technology
      </h2>
      <p>
        This approach enables organizations to conduct frequent, precise
        inspections with reduced risk... This approach enables organizations to
        conduct frequent, precise inspections with reduced risk... This approach
        enables organizations to conduct frequent, precise inspections with
        reduced risk... This approach enables organizations to conduct frequent,
        precise inspections with reduced risk... This approach enables
        organizations to conduct frequent, precise inspections with reduced
        risk... This approach enables organizations to conduct frequent, precise
        inspections with reduced risk... This approach enables organizations to
        conduct frequent, precise inspections with reduced risk...
      </p>

      {/* Add other sections with matching IDs for TOC links */}
    </>
  );
  console.log(params.id);
  return (
    <div>
      <BlogDetailsHero />
      <BlogDescription
        tocItems={tocItems}
        descriptionContent={descriptionContent}
      />
     
      <div className="pl-20 mt-12 py-24">
        <BlogCarousal />
      </div>
    </div>
  );
};

export default Page;
