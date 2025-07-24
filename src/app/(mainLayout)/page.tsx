import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import OurMetrics from "@/components/HomePage/OurMetrics/OurMetrics";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import ProudPartners from "@/components/HomePage/ProudPartners/ProudPartners";
import HowWeWork from "@/components/Shared/HowWeWork/HowWeWork";


export default function Home() {
  return (
    <div>
     <ProudPartners/>
     <AboutUs/>
     <div className="">
      <OurMetrics/>
     <div className=""><OurServices/></div>
     {/* absolute top-[600px] w-full */}
     </div>
     <HowWeWork/>
    </div>
  );
}
