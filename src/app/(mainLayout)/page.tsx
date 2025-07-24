import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import OurMetrics from "@/components/HomePage/OurMetrics/OurMetrics";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import ProudPartners from "@/components/HomePage/ProudPartners/ProudPartners";


export default function Home() {
  return (
    <div>
     <ProudPartners/>
     <AboutUs/>
     <div className="relative">
      <OurMetrics/>
     <div className="absolute top-[600px] w-full"><OurServices/></div>
     </div>
    </div>
  );
}
