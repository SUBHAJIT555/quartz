import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../components/ui/Button";
import { ArrowUpRight,  ArrowUp } from "lucide-react";
import Footer from "../components/Footer";


import remittanceHero from "../assets/images/remittance/Remittance_img.webp";
import investment from "../assets/images/remittance/Invest_Internationally_The_Right_Way_01.webp";
import { Link } from "react-router-dom";

const Remittance: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={remittanceHero}
          alt="Remittance Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 px-6 md:px-20">
          <div className="text-white text-right max-w-2xl">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Liberalised Remittance Scheme
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              Unlocking global investment with regulatory
              <span className="font-Signature text-primary text-5xl md:text-6xl ml-2">
                confidence
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-Heading text-3xl md:text-4xl mb-6">
              Invest Internationally — The Right Way
            </h2>
            <div className="w-[100%] h-px bg-white/30 my-4"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed mb-4">
              The Liberalised Remittance Scheme (LRS) by the Reserve Bank of
              India (RBI) allows Indian residents to remit up to USD 250,000 per
              financial year abroad for permitted capital and current account
              transactions. However, the process involves regulatory scrutiny
              and documentation.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed">
              Our team ensures that your international investments are fully
              compliant with LRS guidelines. We support clients with:
            </p>
            <div className="w-[100%] h-px bg-white/30 my-4"></div>

            <ul className="mt-8 space-y-5 font-Text text-white/90 text-base ">
              {[
                "Understanding the scope and eligibility of remittances under the LRS",
                "Educating on permissible purposes such as investment in shares, property, debt instruments, and more",
                "Preparing and compiling Form A2 and required declarations",
                "Coordinating with Authorized Dealer (bank) and ensuring KYC compliance",
                "Assisting with PAN linkage, bank procedures, and transaction execution",
                "Monitoring the annual limit and keeping remittances within the permissible cap",
                "Providing continued support for RBI clarifications, record maintenance, and audit trail documentation",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary mt-1 flex-shrink-0" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
              <motion.img
                src={investment}
                alt="LRS Illustration"
                className="w-full h-full object-cover max-h-[500px]"
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* cta  */}
      <motion.div
        className="bg-[#957F63] text-white py-20 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Heading + Subheading + CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white font-Heading text-4xl md:text-5xl mb-6">
            Start Your Investment Journey Today
          </h2>
          <div className="h-px bg-white/30 w-full max-w-6xl mx-auto mb-10"></div>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced advisors help you build a strategy that works
            for you. Take the first step toward your financial future.
          </p>

          <Link to="/ContactUs">
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

export default Remittance;
