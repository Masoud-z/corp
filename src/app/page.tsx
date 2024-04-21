import Hero from "@/components/landing/Hero";
import homeImg from "/public/home.jpg";

export default function Home() {
  return (
    <>
      <Hero imageData={homeImg} imageAlt="car factory" title="Home Page!" />
    </>
  );
}
