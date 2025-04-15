import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const FinancialEducation = () => {
  const [loading, setLoading] = useState<boolean>(false);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest,
      message: data.message ? data.message : "No message",
      formType: "education",
    };

    try {
      const response = await fetch(
        "https://quartz-server-six.vercel.app/api/v1/email/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        toast.success("Registration Request Sent.");
        reset();
      } else {
        toast.error("Failed to send registration request.");
      }
    } catch (err) {
      toast.error("Failed to send registration request.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
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

      {/* Intro Line */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          World-class financial education,
          <span className="font-Signature text-primary text-7xl">
            &nbsp;absolutely free
          </span>
        </h2>
      </motion.div>

      {/* Investor Training Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
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
              diversification, and long-term strategy.
            </p>
          </div>
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
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-6 left-6 w-full h-full border border-white/20 z-0 " />
            <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
              <img
                src={tradingWorkshop}
                alt="Trading Workshops"
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>
          </motion.div>

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
              indicators, manage risk, and spot high-probability setups.
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
              questions and gain clarity on complex financial topics.
            </p>
          </div>

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

          <div className="lg:w-1/2">
            <h3 className="font-Heading text-3xl md:text-4xl mb-4 flex items-center gap-2">
              <img src={toolLogo} alt="Training Icon" className="w-10 h-10" />
              Platform and Tools Training
            </h3>
            <div className="w-1/2 h-px bg-white mb-4"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed">
              Get skilled in the tools professionals use to trade and invest.
              Gain hands-on experience with platforms like MetaTrader,
              TradingView, and Bloomberg Terminal.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed mt-4">
              From execution to portfolio tracking and technical analysis, this
              training equips you to navigate markets like a pro.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Parallax Section */}
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

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block font-Text mb-2 text-white/70">
                Full Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-Text mb-2 text-white/70">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-Text mb-2 text-white/70">
                Phone Number
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  // pattern: {
                  //   value: /^\+971\d{9}$/,
                  //   message: "Invalid phone number",
                  // },
                })}
                type="tel"
                maxLength={13}
                placeholder="+971-50-123-4567"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />{" "}
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-Text mb-2 text-white/70">
                Area of Interest
              </label>
              <select
                {...register("interest", { required: "Interest is required" })}
                className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                <option
                  className="text-black"
                  value={"Investor Training Programs"}
                >
                  Investor Training Programs
                </option>
                <option className="text-black" value={"Trading Workshops"}>
                  Trading Workshops
                </option>
                <option className="text-black" value={"Live Seminars"}>
                  Live Seminars
                </option>
                <option
                  className="text-black"
                  value={"Platform & Tools Training"}
                >
                  Platform & Tools Training
                </option>
              </select>
              {errors.interest && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.interest.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-Text mb-2 text-white/70">
                Message (Optional)
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Any additional notes or questions..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-white text-[#957F63] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white/90 transition duration-300 mt-10 group relative overflow-hidden"
              >
                {loading ? (
                  <>
                    <div className="flex items-center gap-2">
                      <p>Submiting</p>
                      <div className="flex items-center gap-1">
                        <span className="dot-animation"></span>
                        <span className="dot-animation"></span>
                        <span className="dot-animation"></span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="inline-block transition-all duration-300 group-hover:pr-6">
                      Submit Registration
                    </span>
                    <ArrowUpRight
                      className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      size={16}
                    />
                  </>
                )}
              </Button>
            </div>

            {/* {status && (
              <p className="text-white/80 text-center mt-6">{status}</p>
            )} */}
          </form>
        </div>
      </motion.section>

      {/* Scroll to Top */}
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
