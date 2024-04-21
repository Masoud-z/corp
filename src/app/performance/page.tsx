import Hero from "@/components/landing/Hero";
import performanceImg from "/public/performance.jpg";

export default function Performance() {
  return (
    <>
      <Hero
        imageData={performanceImg}
        imageAlt="welding"
        title="We serve high performance applications!"
      />
    </>
  );
}
