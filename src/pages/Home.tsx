import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import who from "../assets/images/homeImages/who-we-are.jpg";
import why from "../assets/images/homeImages/why_choose_us.jpg";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Preloader from "../components/ui/Preloader";

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

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide comprehensive investment advisory services including global real estate, stocks, ETFs, digital assets, and personalized portfolio planning.",
  },
  {
    question: "Is there a minimum investment required?",
    answer:
      "We tailor investment plans to fit your goals, so there’s no fixed minimum — whether you're starting small or going big, we’ve got you covered.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Simply reach out through our contact form or schedule a free consultation. Our team will guide you through the onboarding process step by step.",
  },
  {
    question: "Can I track my investments online?",
    answer:
      "Yes, we provide access to a secure client portal where you can monitor your portfolio performance, transaction history, and important updates in real time.",
  },
  {
    question: "Do you assist with real estate investments in Dubai?",
    answer:
      "Absolutely. We have strategic partnerships with reputed developers to help you invest confidently in Dubai’s thriving real estate market.",
  },
];

const FAQItem: React.FC<{
  index: number;
  question: string;
  answer: string;
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
}> = ({ index, question, answer, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  return (
    <motion.div
      layout
      className={`transition-all duration-300 ease-in-out rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 ${
        isOpen ? "shadow-xl shadow-[#957F63]/30" : "hover:shadow-md"
      }`}
    >
      <button
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className="flex justify-between items-center w-full px-6 py-5 text-left group"
      >
        <span className="text-lg md:text-xl font-semibold text-white transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-thin "
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-6 overflow-hidden"
          >
            <div className="pb-5 text-white/80 text-base md:text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    images.forEach((img) => {
      const handleLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false);
        }
      };

      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleLoad); // even failed image should count
    });
  }, []);

  return (
    <>
      {/* Preloader Component */}
      {<Preloader loading={loading} />}

      {/* Main Content */}
      <main className={`${loading ? "hidden" : "block"}`}>
        <Hero />

        <motion.div
          className="w-full bg-[#252526]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
            Your Wealth, Our Expertise
          </h2>
        </motion.div>

        <motion.div
          className="bg-[#957F63] py-16 px-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto text-white">
            <div className="border-l-4 border-white/50 pl-6 mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
                Who We Are
              </h3>
              <p className="text-lg md:text-2xl leading-relaxed mt-2 text-white/90">
                With over{" "}
                <span className="font-Signature text-4xl">
                  &nbsp;15 years&nbsp;
                </span>{" "}
                of global investment experience, we’re dedicated to helping
                clients grow and protect their wealth through expert planning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Our certified financial advisors guide clients across a wide
                  range of international investment vehicles:
                </p>
              </motion.div>
              <motion.ul
                className="list-disc pl-6 space-y-2 text-base md:text-lg text-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <li>Stocks, ETFs, and Bonds</li>
                <li>Commodities & Digital Assets</li>
                <li>International Real Estate Options</li>
              </motion.ul>
            </div>

            <div className="h-px bg-white/30 w-full max-w-6xl mx-auto mb-10"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  We believe in empowering clients with the tools and confidence
                  they need to succeed in today's market.
                </p>
              </motion.div>
              <motion.ul
                className="list-disc pl-6 space-y-2 text-base md:text-lg text-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <li>Free investor training programs</li>
                <li>Full legal and regulatory support</li>
                <li>Access to global investment markets</li>
                <li>Personalized portfolio guidance</li>
                <li>Expert financial advisors</li>
              </motion.ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full bg-[#252526] pt-16 pb-16"
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-10 pb-10 text-center tracking-wide">
            Start building your global investment and real estate portfolio{" "}
            <span className="font-Signature text-8xl text-primary">today</span>
          </h2>
        </motion.div>

        <motion.div
          className="bg-[#957F63] py-14 px-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="font-Heading text-white text-center text-5xl md:text-5xl tracking-wide mb-12">
            About Us
          </h1>

          <div className="max-w-6xl mx-auto space-y-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative inline-block overflow-hidden">
                  <motion.img
                    src={who}
                    alt="Who We Are"
                    className="relative z-10 w-full h-auto"
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border border-white/50 z-0" />
                </div>
              </div>

              <motion.div
                className="w-full md:w-1/2 text-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold mb-4 border-l-4 border-white/40 pl-4">
                  Who We Are
                </h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Quartz Financial Advisory Services is a professional
                  investment advisory company with over 15 years of experience
                  offering end-to-end solutions for individuals seeking to
                  invest in global financial markets. From international
                  financial instruments to dynamic real estate opportunities, we
                  deliver well-researched, customized portfolios aligned with
                  your financial goals.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative inline-block">
                  <motion.img
                    src={why}
                    alt="Who We Are"
                    className="relative z-10 shadow-lg w-full h-auto object-cover"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border border-white/50 z-0" />
                </div>
              </div>

              <motion.div
                className="w-full md:w-1/2 text-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold mb-4 border-l-4 border-white/40 pl-4">
                  Why Choose Us
                </h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Our team of certified advisors, Chartered Accountants, tax
                  consultants, and real estate experts work in your best
                  interest — delivering trustworthy advice, risk-optimized
                  planning, and strategic portfolio diversification.
                  <br />
                  <br />
                  All client investments are facilitated only through reputed,
                  licensed institutions regulated by recognized financial
                  authorities such as the Securities & Commodities Authority
                  (SCA), UAE. We offer top-tier access to Dubai’s booming
                  property market through our strategic partnerships.
                </p>
                <Link to="/ContactUs">
                  <Button className="bg-white text-[#957F63] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white/90 transition duration-300 mt-10 group relative overflow-hidden">
                    <span className="inline-block transition-all duration-300 group-hover:pr-6">
                      Contact Us Now
                    </span>

                    <ArrowUpRight
                      className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      size={16}
                    />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ✅ FAQ Section */}
        <motion.div
          className="bg-[#957F63] text-white py-20 px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-center text-3xl md:text-4xl font-Heading mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </motion.div>

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

        <Footer />
        <div
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-5 h-5" />
        </div>
      </main>
    </>
  );
};

export default Home;
