import herocontent from "../assets/images/homeImages/homeHeroContent.webp";
import herovideo from "../assets/images/homeImages/heroVideo.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover z-10"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-[30%] left-[10%] z-20 h-[125px] w-[230px] md:h-[170px] md:w-[313px] lg:h-[224px] lg:w-[500px]">
        <img src={herocontent} alt="" />
      </div>
    </section>
  );
};

export default Hero;
