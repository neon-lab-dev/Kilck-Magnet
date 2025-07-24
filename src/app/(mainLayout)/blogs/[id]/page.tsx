import BlogCarousal from "@/components/BlogDetails/BlogCarousal/BlogCarousal";
import Container from "@/components/Reusable/Container/Container";
import React from "react";

type PageProps = {
  params: { id: string };
};

const Page = ({ params }: PageProps) => {

  return (
    <div>
        <div className="max-w-3xl mx-auto py-8">
      <p>n kj</p>
    </div>
    <div className="pl-20">
         <BlogCarousal/>
    </div>

   
    </div>
    
  );
};

export default Page;
