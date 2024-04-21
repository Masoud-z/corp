import { landingProps } from "../../../models/custom/landingProps";
import Image from "next/image";

interface Props extends landingProps {}

const Hero = (props: Props) => {
  return (
    <div className="relative h-screen">
      <div className="-z-10 absolute inset-0">
        <Image
          src={props.imageData}
          alt={props.imageAlt}
          fill
          className=" object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="flex justify-center items-center pt-48">
        <h1 className="text-white text-6xl font-bold">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
