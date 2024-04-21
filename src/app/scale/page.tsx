import Hero from "@/components/landing/Hero";
import scaleImg from "/public/scale.jpg";

export default function Scale() {
  return (
    <>
      <Hero
        imageData={scaleImg}
        imageAlt="steel factory"
        title="Scale your app to infinity!"
      />
    </>
  );
}
