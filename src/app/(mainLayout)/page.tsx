import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import GoogleReviews from "@/components/HomePage/GoogleReviews/GoogleReviews";
import OurMetrics from "@/components/HomePage/OurMetrics/OurMetrics";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import ProudPartners from "@/components/HomePage/ProudPartners/ProudPartners";
import ContactUs from "@/components/Shared/ContactUs/ContactUs";
import FAQ from "@/components/Shared/FAQ/FAQ";
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
     <GoogleReviews/>
     <ContactUs/>
     <FAQ/>
    </div>
  );
}
