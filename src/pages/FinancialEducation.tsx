import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import InvestorLogo from "../assets/images/education/Investor_training.webp";
import workshopLogo from "../assets/images/education/Trading_workshop.webp";
import liveLogo from "../assets/images/education/Live_seminar.webp";
import toolLogo from "../assets/images/education/Tools_training.webp";

import educationHero from "../assets/images/education/education_img.webp";
import investor from "../assets/images/education/Investor_Training_Programs.webp";
import tradingWorkshop from "../assets/images/education/Trading_Workshops.webp";
import liveSeminar from "../assets/images/education/Live_Seminars.webp";
import platform from "../assets/images/education/Platform_and_Tools_Training.webp";
import parallaxTwo from "../assets/images/education/Empower_Your_Financial_Journey.webp";

const FinancialEducation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // const fadeIn = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "easeInOut" },
  //   },
  // };
  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={educationHero}
          alt="Planning Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl pr-16">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Financial Education
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              Empowering your financial future
              <span className="font-Signature text-primary text-5xl md:text-6xl ml-2">
                — at zero cost
              </span>
            </p>
          </div>
        </div>
      </section>

      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          World-class financial education,{" "}
          <span className="font-Signature text-primary text-7xl">
            &nbsp;absolutely free
          </span>
        </h2>
      </motion.div>
      {/* Investor Training Program Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <div className="lg:w-1/2">
            <h3 className="font-Heading text-3xl md:text-4xl mb-4 flex items-center gap-2">
              <img
                src={InvestorLogo}
                alt="Training Icon"
                className="w-10 h-10"
              />
              Investor Training Programs
            </h3>

            <div className="w-1/2 h-px bg-white mb-4"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed">
              Master the fundamentals of investing in global markets. Our
              Investor Training Programs are designed for beginners and
              intermediate-level investors who want to build a strong foundation
              in financial literacy.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed mt-4">
              You'll learn about different asset classes such as stocks, ETFs,
              mutual funds, and bonds, as well as concepts like risk management,
              diversification, and long-term strategy. Whether you're investing
              for personal goals or building wealth for the future, this program
              equips you with the knowledge to make smart, informed decisions in
              any market condition.
            </p>
          </div>

          {/* Right: Image with offset border effect */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Offset Border */}
            <div className="absolute top-6 left-6 w-full h-full border border-white/20 z-0" />

            {/* Image */}
            <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
              <img
                src={investor}
                alt="Investor Training"
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Trading Workshops Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image with offset border */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Offset Border */}
            <div className="absolute top-6 left-6 w-full h-full border border-white/20 z-0 " />

            {/* Image */}
            <div className="relative z-10 overflow-hidden  shadow-xl border border-white/10">
              <img
                src={tradingWorkshop}
                alt="Trading Workshops"
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="lg:w-1/2">
            <h3 className="font-Heading text-3xl md:text-4xl mb-4 flex items-center gap-2">
              <img
                src={workshopLogo}
                alt="Training Icon"
                className="w-10 h-10"
              />
              Trading Workshops
            </h3>
            <div className="w-1/2 h-px bg-white mb-4"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed">
              Hands-on training to elevate your trading skills. These workshops
              focus on the practical aspects of trading across major markets —
              including forex, indices, commodities, and cryptocurrencies.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed mt-4">
              Through interactive sessions, simulated trades, and strategy
              breakdowns, you’ll learn how to read charts, interpret technical
              indicators, manage risk, and spot high-probability setups. Perfect
              for aspiring traders who want to gain real-world insights and
              experience-driven confidence.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Live Seminars with Experts Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <div className="lg:w-1/2">
            <h3 className="font-Heading text-3xl md:text-4xl mb-4 flex items-center gap-2">
              <img src={liveLogo} alt="Training Icon" className="w-10 h-10" />
              Live Seminars with Experts
            </h3>

            <div className="h-px w-1/2 bg-white mb-4"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed">
              Learn directly from industry leaders, CAs, and certified trainers.
              Our live webinars and seminars bring together top financial
              professionals, tax experts, and certified market trainers who
              share real-time insights, market analysis, and tax-saving
              strategies.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed mt-4">
              These sessions are built to be interactive, allowing you to ask
              questions, discuss current trends, and gain clarity on complex
              financial topics — all in a live, dynamic environment.
            </p>
          </div>

          {/* Right: Image with offset border */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-6 left-6 w-full h-full border border-white/20 z-0" />
            <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
              <img
                src={liveSeminar}
                alt="Live Seminars"
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Platform & Tools Training Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image with offset border */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-6 left-6 w-full h-full border border-white/20 z-0" />
            <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
              <img
                src={platform}
                alt="Platform & Tools Training"
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="lg:w-1/2">
            <h3 className="font-Heading text-3xl md:text-4xl mb-4 flex items-center gap-2">
              <img src={toolLogo} alt="Training Icon" className="w-10 h-10" />
              Platform and Tools Training
            </h3>
            <div className="w-1/2 h-px bg-white mb-4"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed">
              Get skilled in the tools professionals use to trade and invest.
              Gain hands-on experience with the platforms and software used by
              experts — including MetaTrader (MT4/MT5), TradingView, Bloomberg
              Terminal, and more.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed mt-4">
              From order execution to portfolio tracking and technical analysis,
              this training ensures you’re not just financially informed —
              you’re also technically equipped to navigate the markets like a
              pro.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Parallax Transition Image Section */}
      <section ref={ref} className="relative h-[70vh] overflow-hidden">
        <motion.img
          src={parallaxTwo}
          alt="Financial Growth Visual"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <h2 className="text-white font-Heading text-3xl md:text-5xl text-center">
            Empower Your Financial Journey
          </h2>
        </div>
      </section>
      {/* Registration Form Section */}
      <motion.section
        id="register"
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-Heading mb-4 text-center">
            Register for Free Access
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="w-1/2 h-px bg-white"></div>
          </div>

          <p className="text-white/70 text-lg text-center mb-12">
            Complete the form below to join our free financial education
            program. A confirmation email will be sent shortly after.
          </p>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block font-Text mb-2 text-white/70">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-Text mb-2 text-white/70">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-Text mb-2 text-white/70">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+971-50-123-4567"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Area of Interest */}
            <div>
              <label className="block font-Text mb-2 text-white/70">
                Area of Interest
              </label>
              <select className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 hover:bg-primary hover:text-white">
                <option className="text-black">
                  Investor Training Programs
                </option>
                <option className="text-black">Trading Workshops</option>
                <option className="text-black">Live Seminars</option>
                <option className="text-black">
                  Platform & Tools Training
                </option>
              </select>
            </div>

            {/* Optional Message */}
            <div>
              <label className="block font-Text mb-2 text-white/70">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Any additional notes or questions..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button className="bg-white text-[#957F63] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white/90 transition duration-300 mt-10 group relative overflow-hidden">
                <span className="inline-block transition-all duration-300 group-hover:pr-6">
                  Submit Registration
                </span>

                <ArrowUpRight
                  className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  size={16}
                />
              </Button>
            </div>
          </form>
        </div>
      </motion.section>
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

export default FinancialEducation;
