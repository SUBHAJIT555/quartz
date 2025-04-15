import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { ArrowUpRight, ArrowUp } from "lucide-react";

import insightHero from "../assets/images/insight/Insights_img_01.webp";
import TradingViewWidget from "../components/TradingViewWidget";

const Insights: React.FC = () => {
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
          src={insightHero}
          alt="Planning Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Market Insights & Illustrations
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              Visualizing trends and translating data into meaningful investment
              <span className="font-Signature text-primary text-5xl md:text-6xl ml-2">
                insights
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Companies with Strong Stock Price growth */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-4 text-center tracking-wide">
          Companies with Strong Stock Price&nbsp;
          <span className="font-Signature text-primary text-7xl">Growth</span>
        </h2>
        <p className="text-white/80 font-Text text-lg md:text-xl text-center pb-16 max-w-4xl mx-auto">
          Explore the phenomenal rise of globally renowned companies that have
          generated substantial long-term returns. These charts showcase
          real-world examples of how disciplined, long-term investing can result
          in significant wealth creation.
        </p>
      </motion.div>

      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="space-y-32 max-w-7xl mx-auto">
          {[
            {
              name: "Apple",
              desc: "From modest beginnings to one of the world's most valuable companies",
              symbol: "NASDAQ:AAPL",
            },
            {
              name: "Amazon",
              desc: "Revolutionizing retail and cloud computing",
              symbol: "NASDAQ:AMZN",
            },

            {
              name: "Tesla",
              desc: "Innovating electric mobility and clean energy",
              symbol: "NASDAQ:TSLA",
            },
            {
              name: "Microsoft Corporation",
              desc: "Dominant force in enterprise software, cloud computing, and AI innovation",
              symbol: "NASDAQ:MSFT",
            },
            {
              name: "NVIDIA Corporation",
              desc: "Pioneering GPU technology, now driving advancements in AI, gaming, and autonomous vehicles",
              symbol: "NASDAQ:NVDA",
            },
          ].map((company, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="lg:w-2/3 w-full h-[400px] overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                <TradingViewWidget symbol={company.symbol} />
              </div>

              {/* Text */}
              <div className="lg:w-1/3 w-full">
                <h3 className="font-Heading text-3xl md:text-4xl text-white mb-4">
                  {company.name}
                </h3>
                <div className="h-px w-1/2 bg-white mb-7"></div>
                <p className="font-Text text-white/80 text-lg leading-relaxed">
                  {company.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Companies with Strong Stock Price growth */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-4 text-center tracking-wide">
          Global Index Performance &nbsp;
          <span className="font-Signature text-primary text-7xl">
            — Barometers of Economic Strength
          </span>
        </h2>
        <p className="text-white/80 font-Text text-lg md:text-xl text-center pb-16 max-w-4xl mx-auto">
          Understanding the movement of major indices provides a macro
          perspective on market performance and investor sentiment.
        </p>
      </motion.div>

      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-32 max-w-7xl mx-auto">
          {[
            {
              name: "S&P 500",
              desc: "Benchmark of the top 500 publicly traded companies in the U.S.",
              symbol: "OANDA:SPX500USD",
            },
            {
              name: "Dow Jones Industrial Average",
              desc: "Tracks 30 large U.S. companies with consistent performance",
              symbol: "OANDA:US30USD",
            },
            {
              name: "NASDAQ Composite",
              desc: "Technology-heavy index reflecting innovation-led growth",
              symbol: "NASDAQ:IXIC",
            },
            {
              name: "Hang Seng Index",
              desc: "Key indicator of Hong Kong’s market health and China-linked companies",
              symbol: "INDEX:HSI",
            },
            {
              name: "Nikkei 225",
              desc: ": A bellwether for Japan’s economy and industrial giants",
              symbol: "OANDA:JP225USD",
            },
          ].map((company, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="lg:w-2/3 w-full h-[400px] overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                <TradingViewWidget symbol={company.symbol} />
                {/* <img
                  src={company.image}
                  alt={`${company.name} Chart`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                /> */}
              </div>

              {/* Text */}
              <div className="lg:w-1/3 w-full">
                <h3 className="font-Heading text-3xl md:text-4xl text-white mb-4">
                  {company.name}
                </h3>
                <div className="h-px w-1/2 bg-white mb-7"></div>
                <p className="font-Text text-white/80 text-lg leading-relaxed">
                  {company.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Companies with Strong Stock Price growth */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-4 text-center tracking-wide">
          Commodity Price Movements &nbsp;
          <span className="font-Signature text-primary text-7xl">
            — Historical & Strategic Trends
          </span>
        </h2>
        <p className="text-white/80 font-Text text-lg md:text-xl text-center pb-16 max-w-4xl mx-auto">
          Commodities remain a vital pillar of portfolio diversification. Here’s
          how key commodities have evolved over time
        </p>
      </motion.div>

      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="space-y-32 max-w-7xl mx-auto">
          {[
            {
              name: "WTI Crude Oil",
              desc: "Volatility driven by global politics and demand-supply cycles",
              symbol: "OANDA:WTICOUSD",
            },
            {
              name: "Gold",
              desc: "A timeless hedge against inflation and economic uncertainty",
              symbol: "TVC:GOLD",
            },
            {
              name: "Silver",
              desc: "Industrial utility and store of value",
              symbol: "TVC:SILVER",
            },
          ].map((company, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="lg:w-2/3 w-full h-[400px] overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                <TradingViewWidget symbol={company.symbol} />
                {/* <img
                  src={company.image}
                  alt={`${company.name} Chart`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                /> */}
              </div>

              {/* Text */}
              <div className="lg:w-1/3 w-full">
                <h3 className="font-Heading text-3xl md:text-4xl text-white mb-4">
                  {company.name}
                </h3>
                <div className="h-px w-1/2 bg-white mb-7"></div>
                <p className="font-Text text-white/80 text-lg leading-relaxed">
                  {company.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="font-Text text-white/90 text-lg md:text-xl text-center mt-16 leading-relaxed max-w-3xl mx-auto">
          Understanding these trends helps investors balance portfolios between
          growth and safety. Historical illustrations validate the importance of
          time in the market — not timing the market.
        </p>
      </motion.section>
      {/* Heading + Subheading + CTA */}
      <motion.div
        className="bg-[#957F63] py-16 px-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white font-Heading text-4xl md:text-5xl mb-4">
            Want to know how to invest in these opportunities?
          </h2>
          <div className="h-px bg-white/30 w-full max-w-6xl mx-auto mb-10"></div>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            To book a free consultation with our certified experts and start
            your journey in global markets today.
          </p>

          <Button className="bg-white text-[#957F63] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white/90 transition duration-300 mt-10 group relative overflow-hidden">
            <span className="inline-block transition-all duration-300 group-hover:pr-6">
              Schedule a Consultation
            </span>

            <ArrowUpRight
              className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              size={16}
            />
          </Button>
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

export default Insights;
