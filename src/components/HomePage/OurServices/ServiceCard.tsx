import Image, { StaticImageData } from "next/image";

type TServiceCard = {
    icon: StaticImageData;
    title: string;
    description: string;
};

const ServiceCard: React.FC<TServiceCard> = ({ icon, title, description }) => {
    return (
        <div className="font-Satoshi p-6 rounded-2xl bg-white border border-neutral-55 max-h-[214px] shadow-our-service">
            <Image src={icon} alt="" className="size-12" />
            <h1 className="text-neutral-60 text-xl leading-5 font-bold mt-5">{title}</h1>
            <p className="text-gray-40 text-[15px] leading-[18px] mt-[6px]">{description}
            </p>
        </div>
    );
};

export default ServiceCard;