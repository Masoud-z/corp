import Hero from "@/components/landing/Hero";
import reliabilityImg from "/public/reliability.jpg";

export default function Reliability() {
  return (
    <>
      <Hero
        imageData={reliabilityImg}
        imageAlt="welding"
        title="Super high reliability hosting!"
      />
    </>
  );
}
