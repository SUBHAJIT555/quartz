import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import solid from "../assets/images/aboutImages/solid.jpg";
import partner from "../assets/images/aboutImages/partner.jpg";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import aboutHero from "../assets/images/aboutImages/aboutHero.webp";
import parallaxTwo from "../assets/images/aboutImages/about2.webp";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

type AccordionData = {
  title: string;
  description: string;
};

// Accordion Data
const coreValues: AccordionData[] = [
  {
    title: "Absolute Simplicity",
    description:
      "Clear, straightforward investment strategies tailored to your needs.",
  },
  {
    title: "Strong Heritage",
    description: "Over 15 years of experience in global investment advisory.",
  },
  {
    title: "Limitless Ambition",
    description:
      "Empowering clients to access high-growth financial and real estate markets.",
  },
  {
    title: "Unlimited Care",
    description:
      "Providing continuous support, education, and expert guidance at every step of your investment journey.",
  },
];

const AboutUs = () => {
  const parallaxRef = useRef(null);
  const { scrollYProgress: scrollParallax } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });

  const y2 = useTransform(scrollParallax, [0, 1], ["0%", "80%"]);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={aboutHero}
          alt="Planning Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl pr-10">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              About Us
            </h1>

            <p className="font-Text text-xl md:text-2xl mt-4">
              Guiding Your Wealth with
              <span className="font-Signature text-primary text-7xl md:text-7xl ml-2">
                Clarity, Strategy & &nbsp; Trust.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Section: Philosophy */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Putting You First – Our Core{" "}
          <span className="font-Signature text-primary text-7xl">
            &nbsp;&nbsp;Philosophy
          </span>
        </h2>
      </motion.div>

      {/* Section: Philosophy Description */}
      <motion.div
        className="bg-primary py-16 px-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          className="text-lg md:text-xl leading-loose tracking-wide text-white/90 max-w-4xl mx-auto px-4 md:px-0 font-light"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          At{" "}
          <strong className="text-white font-medium">
            Quartz Financial Advisory Services
          </strong>
          , we believe that your financial aspirations are as unique as you are.
          We understand the importance of tailored investment strategies
          combined with transparent solutions to help you achieve your goals
          with confidence.
          <br />
          <br />
          Our team of experienced professionals is dedicated to delivering an
          exceptional client experience. We take a proactive approach, working
          closely with you to design personalized investment plans that align
          with your objectives, risk tolerance, and long-term vision.
        </motion.p>
      </motion.div>

      {/* Section: Values Heading */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Solid, Efficient, Ambitious{" "}
        </h2>
      </motion.div>

      {/* Section: Core Values */}
      <motion.div
        className="w-full bg-primary text-white py-16 px-6 md:px-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative w-full order-1 md:order-1">
            {/* Styled border behind image */}
            <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border border-white/30 z-0" />

            {/* Image with animation */}
            <motion.img
              src={solid}
              alt="Core Values"
              className="relative z-10 shadow-lg w-full h-auto object-cover"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>

          {/* Accordion Text */}
          <div className="order-2 md:order-2">
            <p className="text-lg md:text-xl leading-relaxed tracking-wide mb-6 text-white/90">
              We are committed to upholding the principles of integrity,
              transparency, and a client-centric philosophy at the heart of all
              our activities.
            </p>
            <ul className="space-y-6 text-white/90">
              {coreValues.map((item, index) => (
                <li key={index} className="border-b border-white/20 pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggle(index)}
                  >
                    <span className="font-semibold text-white text-lg md:text-xl">
                      {item.title}
                    </span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-white/70"
                    >
                      {openIndex === index ? "−" : "+"}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-3 text-base md:text-lg text-white/80"
                      >
                        {item.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      {/* NEW: Parallax Section Half-Screen */}
      <div ref={parallaxRef} className="relative h-[80vh] overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-[80vh] bg-cover bg-center"
          style={{
            y: y2,
            backgroundImage: `url(${parallaxTwo})`,
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-16">
          <h2 className="text-white text-3xl md:text-5xl font-bold font-Heading text-center max-w-3xl">
            Succeeding with the Right{" "}
            <span className="font-Signature text-primary text-8xl">
              Partners
            </span>
          </h2>
        </div>
      </div>
      <motion.div
        className="bg-[#957F63] py-16 px-4 md:px-20"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
          {/* Text Content on the Left */}
          <motion.p
            className="text-lg md:text-xl leading-loose tracking-wide text-white/90 font-light order-1"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            As a client-focused investment advisory firm, we leverage our
            extensive network of business partners to stay ahead of emerging
            trends and investment opportunities in the ever-evolving financial
            landscape.
            <br /> <br />
            We are proud to collaborate with leading financial institutions that
            provide advanced platforms, data analytics, and specialized
            investment products, ensuring our clients receive exceptional wealth
            management services tailored to their needs.
          </motion.p>

          {/* Image on the Right */}
          <div className="relative w-full order-2">
            {/* Offset Border */}
            <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border border-white/30 z-0" />

            {/* Animated Image inside an overflow-hidden wrapper */}
            <motion.div className="overflow-hidden relative z-10">
              <motion.img
                src={partner}
                alt="Partnerships"
                className="w-full h-auto object-cover shadow-lg"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* new section  */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Investment Solutions to Meet Your{" "}
          <span className="font-Signature text-primary text-7xl">
            Objectives
          </span>
        </h2>
      </motion.div>
      <motion.div
        className="bg-[#957F63] py-16 px-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          className="text-lg md:text-xl leading-loose tracking-wide text-white/90 max-w-4xl mx-auto px-4 md:px-0 font-light"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Our investment solutions are designed to offer flexibility and choice,
          enabling clients to create customized portfolios that align with their
          financial goals and risk appetite. Whether investing in global
          markets, real estate, or alternative assets, our expertise ensures
          that every investment strategy is optimized for long-term success.
        </motion.p>
        {/* Heading + Subheading + CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white font-Heading text-4xl md:text-5xl mb-4">
            Start Your Investment Journey Today
          </h2>
          <div className="h-px bg-white/30 w-full max-w-6xl mx-auto mb-10"></div>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced advisors help you build a strategy that works
            for you. Take the first step toward your financial future.
          </p>

          <Link to="/contact-us">
            <Button className="bg-white text-[#957F63] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white/90 transition duration-300 mt-10 group relative overflow-hidden">
              <span className="inline-block transition-all duration-300 group-hover:pr-6">
                Schedule a Consultation
              </span>

              <ArrowUpRight
                className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                size={16}
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <div
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="w-5 h-5" />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
