import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
// import partner from "../assets/images/aboutImages/partner.jpg";
import investment from "../assets/images/services/Investment_Advisory.webp";
import realestate from "../assets/images/services/Real_Estate_Investment.webp";
import education from "../assets/images/services/Financial_Education.webp";
import support from "../assets/images/services/Client_Engagement_&_Support.webp";
import Button from "../components/ui/Button";
import { ArrowUpRight, ChevronDown, ArrowUp } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// image import
import serviceHero from "../assets/images/services/serviceHero.webp";
import empower from "../assets/images/services/Empowering_Futures_with_Confidence.webp";

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

const faqData = [
  {
    question: "What is the Liberalised Remittance Scheme (LRS)?",
    answer:
      "The LRS allows Indian residents to remit up to $250,000 per financial year for permitted current or capital account transactions, including overseas investments.",
  },
  {
    question: "How do you assist with real estate investments in Dubai?",
    answer:
      "We offer end-to-end support—from identifying high-yield properties to handling legalities and ensuring smooth transactions.",
  },
  {
    question: "What are the benefits of REITs?",
    answer:
      "REITs allow you to invest in real estate with lower capital, offering passive income, diversification, and full regulatory transparency.",
  },
  {
    question: "Are your educational offerings free?",
    answer:
      "Yes. Our financial education resources, workshops, and webinars are free and open to clients and prospects alike.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const parallaxRef = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const parallaxY = useTransform(parallaxProgress, [0, 1], ["0%", "30%"]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* hero section  */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={serviceHero} // Replace with your image path
          alt="Services Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/40 px-10">
          <div className="text-white text-right max-w-2xl pr-10">
            <h1 className="font-Heading text-5xl md:text-8xl">Our Services</h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              Discover what we offer to elevate your{" "}
              <span className="font-Signature text-primary text-7xl">
                experience
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Services at a Glance */}

      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Services at a Glance
          <p className="font-Text text-xl">
            Precision-driven offerings designed to empower your financial{" "}
            <span className="font-Signature text-primary text-6xl">
              {" "}
              &nbsp;journey
            </span>
          </p>
        </h2>
      </motion.div>
      <section
        className="relative bg-primary py-28 px-6 md:px-20"
        id="services-glance"
      >
        <div className="max-w-7xl mx-auto">
          {/* Card Grid */}
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              {
                id: "investment-advisory",
                title: "Investment Advisory",
                description:
                  "Strategic wealth-building guidance tailored to your goals.",
              },
              {
                id: "real-estate-investment",
                title: "Real Estate Investment",
                description:
                  "Exclusive access to premium real estate opportunities.",
              },
              {
                id: "financial-education",
                title: "Financial Education (Free Offering)",
                description:
                  "Free expert resources to elevate your financial literacy.",
              },
              {
                id: "client-engagement",
                title: "Client Engagement & Support",
                description:
                  "White-glove service with a proactive, client-first mindset.",
              },
            ].map((service, index) => (
              <motion.a
                key={index}
                href={`#${service.id}`}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-primary/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 transition duration-300 hover:shadow-2xl group relative"
              >
                <div className="absolute -top-6 left-6 bg-[#252526] text-white rounded-full px-4 py-2 text-sm font-bold shadow-md">
                  0{index + 1}
                </div>

                <h3 className="font-Heading text-xl tracking-wide md:text-2xl mb-3 text-white group-hover:text-secondary transition">
                  {service.title}
                </h3>
                <div className="w-[100%] h-px bg-white/30 my-4"></div>
                <p className="font-Text text-white leading-relaxed">
                  {service.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      {/* investment-advisory  */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Investment Advisory
        </h2>
      </motion.div>
      <section
        id="investment-advisory"
        className="bg-primary py-24 px-6 md:px-20 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            {/* List */}
            <ul className="space-y-8 font-Text text-white/90 text-base">
              {[
                {
                  title: "Personalized Portfolio Construction",
                  content:
                    "Diversify across global asset classes including equities, ETFs, bonds, and commodities.",
                },
                {
                  title: "Risk Profiling & Asset Allocation",
                  content:
                    "Build portfolios that reflect your risk appetite and financial goals.",
                },
                {
                  title: "Wealth Planning",
                  content:
                    "Long-term investment strategies supported by tax-efficient structuring.",
                },
                {
                  title: "Crypto & Digital Assets Guidance",
                  content:
                    "Stay ahead with strategic exposure to alternative investment options.",
                },
                {
                  title: "Legal International Fund Remittance Assistance",
                  content:
                    "End-to-end support in securing central bank approvals (such as RBI in India) and complying with international remittance laws.",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center mt-1 text-sm font-semibold">
                    {idx + 1}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-white text-xl">
                      {item.title}
                    </h4>
                    <div className="w-[50%] h-px bg-white/30 my-4"></div>
                    <p className="text-white/80 mt-1">{item.content}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Bottom Border Frame */}
              <div className="absolute top-6 left-6 w-full h-full border border-white/30 z-0" />

              {/* Actual Image Container */}
              <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
                <motion.img
                  src={investment} // your image path here
                  alt="Investment Advisory"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* real-estate-investment */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Real Estate Investment
        </h2>
      </motion.div>

      <section
        id="real-estate-investment"
        className="bg-primary py-24 px-6 md:px-20 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Background border effect */}
              <div className="absolute top-6 left-6 w-full h-full border border-white/30 z-0" />

              {/* Actual image */}
              <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
                <motion.img
                  src={realestate} // Replace with your actual image path
                  alt="Real Estate Investment"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            {[
              {
                title: "Property Investment Advisory",
                desc: "Access lucrative real estate opportunities across Dubai.",
              },
              {
                title: "Buying & Selling Assistance",
                desc: "From legal compliance to transaction management.",
              },
              {
                title: "REIT Investments",
                desc: "Access fractional ownership in income-generating real estate through regulated Real Estate Investment Trusts (REITs). REITs offer a cost-effective way to diversify into high-quality properties, earn passive rental income, and benefit from capital appreciation — all while enjoying full regulatory transparency and hassle-free management.",
              },
              {
                title: "High ROI Optimization",
                desc: "Target strong appreciation and rental yield properties.",
              },
              {
                title: "Property Management & Exit Planning",
                desc: "End-to-end service, including resale and rental strategies.",
              },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center mt-1 text-sm font-semibold">
                  {idx + 1}
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-semibold text-white text-xl">
                    {item.title}
                  </h4>
                  <div className="w-[50%] h-px bg-white/30 my-4"></div>
                  <p className="text-white/80 mt-1">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </div>
        </div>
      </section>
      {/* Financial Education (Free Offering)  */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Financial Education{" "}
          <span className="font-Signature text-primary text-6xl">
            Free Offering
          </span>
        </h2>
      </motion.div>
      <section
        id="financial-education"
        className="bg-primary py-24 px-6 md:px-20 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            {/* List */}
            <ul className="space-y-8 font-Text text-white/90 text-base">
              {[
                {
                  title: "Investor Training Programs",
                  content:
                    "Learn the fundamentals of investing in global markets",
                },

                {
                  title: "Trading Workshops",
                  content:
                    "Develop your skills in forex, indices, commodities, and crypto markets",
                },
                {
                  title: "Live Seminars with Experts",
                  content:
                    "Gain insight from certified trainers, CAs, and tax professionals",
                },
                {
                  title: "Platform & Tools Training",
                  content:
                    "Get familiar with industry-leading platforms and tools used by professionals",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center mt-1 text-sm font-semibold">
                    {idx + 1}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-white text-xl">
                      {item.title}
                    </h4>
                    <div className="w-[50%] h-px bg-white/30 my-4"></div>
                    <p className="text-white/80 mt-1">{item.content}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <Link to="/FinancialEducation">
              <Button className="bg-white text-[#957F63] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white/90 transition duration-300 mt-10 group relative overflow-hidden">
                <span className="inline-block transition-all duration-300 group-hover:pr-6">
                  Learn More
                </span>

                <ArrowUpRight
                  className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  size={16}
                />
              </Button>
            </Link>
          </div>

          {/* Right: Image */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Bottom Border Frame */}
              <div className="absolute top-6 left-6 w-full h-full border border-white/30 z-0" />

              {/* Actual Image Container */}
              <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
                <motion.img
                  src={education} // your image path here
                  alt="Investment Advisory"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Client Engagement & Support */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Client Engagement & Support
        </h2>
      </motion.div>

      <section
        id="client-engagement"
        className="bg-primary py-24 px-6 md:px-20 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Background border effect */}
              <div className="absolute top-6 left-6 w-full h-full border border-white/30 z-0" />

              {/* Actual image */}
              <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
                <motion.img
                  src={support} // Replace with your actual image path
                  alt="Real Estate Investment"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            {[
              {
                title: "Personal Relationship Management",
                desc: "Dedicated relationship managers for one-on-one consultations",
              },
              {
                title: "Proactive Portfolio Oversight",
                desc: "Continuous portfolio monitoring and rebalancing",
              },
              {
                title: "Strategic Market Updates",
                desc: "Periodic market updates and strategy reviews",
              },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center mt-1 text-sm font-semibold">
                  {idx + 1}
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-semibold text-white text-xl">
                    {item.title}
                  </h4>
                  <div className="w-[50%] h-px bg-white/30 my-4"></div>
                  <p className="text-white/80 mt-1">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </div>
        </div>
      </section>
      {/* parallar image  */}
      <div ref={parallaxRef} className="relative h-[70vh] overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            y: parallaxY,
            backgroundImage: `url(${empower})`, // Replace with your image path
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40 px-4 md:px-16">
          <h2 className="text-white text-3xl md:text-5xl font-bold font-Heading text-center max-w-4xl">
            Empowering Futures with{" "}
            <span className="font-Signature text-primary text-7xl">
              Confidence
            </span>
          </h2>
        </div>
      </div>

      {/* faq  */}
      <section className="bg-primary text-white py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-Heading text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-white/20 pb-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center justify-between font-semibold text-lg md:text-xl group"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 text-white/80 font-Text text-base"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Services;
