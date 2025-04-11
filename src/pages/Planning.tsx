import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { ArrowUpRight,ArrowUp } from "lucide-react";

import planningHome from "../assets/images/Planning/Planning_img.webp";
import parallaxTwo from "../assets/images/Planning/Minimize_Risk_and_Maximize_Returns.webp";
import longterm from "../assets/images/Planning/img_01.webp";
import power from "../assets/images/Planning/img_02.webp";

const Planning: React.FC = () => {
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
          src={planningHome}
          alt="Planning Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Strategic Planning
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              Strategic Investment Insights & Long-Term
              <span className="font-Signature text-primary text-5xl md:text-6xl ml-2">
                Planning
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Long-Term Investment Section */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Long-Term Investments as{" "}
          <span className="font-Signature text-primary text-7xl">
            &nbsp;Family Support
          </span>
        </h2>
      </motion.div>
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="w-[70px] h-1 bg-white mb-6"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed mb-6">
              Long-term investments not only build individual wealth — they can
              also serve as a powerful financial safety net for families.
              Consider a scenario where a father invests in a well-researched
              stock portfolio or diversified fund. Years later, an unforeseen
              life event occurs. That timely investment becomes a crucial
              lifeline for his family, helping to cover living expenses,
              children’s education, or even housing needs.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed">
              Investing with foresight ensures your loved ones are protected
              when they need it most.
            </p>
          </div>

          {/* Image or Graphic */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-6 left-6 w-full h-full border border-white/30 z-0" />
            <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
              <motion.img
                src={longterm}
                alt="Family Investment Support"
                className="w-full h-full object-cover max-h-[500px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Long-Term Investment Section */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          The Power of Price{" "}
          <span className="font-Signature text-primary text-7xl">
            &nbsp;Appreciation
          </span>
        </h2>
      </motion.div>
      {/* Price Appreciation Story Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Image Block on Left */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-6 left-6 w-full h-full border border-white/20 z-0" />
            <div className="relative z-10 overflow-hidden shadow-2xl border border-white/10">
              <motion.img
                src={power}
                alt="Investment Growth Story"
                className="w-full h-full object-cover max-h-[500px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Text Content on Right */}
          <div className="lg:w-1/2">
            <h3 className="font-Heading text-3xl md:text-4xl mb-6">
              Real Stories of{" "}
              <span className="text-secondary">Wealth Creation</span>
            </h3>
            <div className="w-[70px] h-1 bg-white mb-6"></div>
            <p className="font-Text text-white/80 text-lg leading-relaxed mb-4">
              History is filled with stories of visionary investors. Someone who
              invested a few thousand rupees in a fundamentally strong stock 15
              years ago may now hold a portfolio worth crores — thanks to
              business growth, compounding, and market momentum.
            </p>
            <p className="font-Text text-white/80 text-lg leading-relaxed mb-4">
              Take Bitcoin for example: early adopters who invested in BTC when
              it launched at just a few rupees have since become millionaires.
            </p>
            <p className="font-Text text-white/90 text-lg leading-relaxed font-medium">
              These stories highlight a simple truth — consistent, informed, and
              long-term investing has the potential to create life-changing
              wealth.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Why Long-Term Investments Are Necessary */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Why Long-Term Investments Are{" "}
          <span className="font-Signature text-primary text-7xl">
            &nbsp;Necessary
          </span>
        </h2>
      </motion.div>
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-Text text-white/80 text-lg md:text-xl leading-relaxed mb-16">
            Long-term investing is one of the most effective strategies for
            building sustainable wealth. Unlike short-term trading, which can be
            influenced by market noise and volatility, long-term investments are
            grounded in patience, research, and planning.
          </p>

          {/* Benefit Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Compound Growth
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Returns are reinvested over time, allowing capital to grow
                exponentially.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Market Recovery
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Long-term horizons allow portfolios to weather temporary
                downturns and recover stronger.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Financial Discipline
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Encourages consistent saving and strategic wealth building.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Tax Efficiency
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Many jurisdictions offer tax benefits for long-term capital
                gains.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Risks Associated with Long-Term Investments */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Risks Associated with{" "}
          <span className="font-Signature text-primary text-7xl">
            &nbsp;Long-Term Investments
          </span>
        </h2>
      </motion.div>

      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-Text text-white/80 text-lg md:text-xl leading-relaxed mb-16">
            While long-term investing is generally lower in volatility, it still
            carries certain risks that investors should be aware of and plan for
            accordingly.
          </p>

          {/* Risk Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Market Risk
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Economic downturns or sector-specific challenges may affect
                asset performance.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Inflation Risk
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Returns may be diluted if not adjusted for inflation over time.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Concentration Risk
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Overexposure to one sector or asset class can compromise overall
                returns.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* How We Help - Hero Image with Parallax */}
      <section ref={ref} className="relative h-[70vh] overflow-hidden">
        <motion.img
          src={parallaxTwo}
          alt="Financial Guidance"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/50 px-6">
          <h2 className="text-white font-Heading text-4xl md:text-6xl text-center">
            How We Help Minimize Risk and Maximize Returns
          </h2>
        </div>
      </section>

      {/* How We Help - Content Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* opening message  */}
        <p className="font-Text text-white/90 text-lg md:text-xl text-center mb-7 leading-relaxed max-w-4xl mx-auto">
          At the core of our investment philosophy is a balanced approach to
          growth and protection. We help minimize risk and maximize returns
          through strategic diversification, personalized portfolio design, and
          careful product selection. Our expert advisors continuously monitor
          market shifts to ensure your investments remain aligned with your
          goals. By combining patience, insight, and active guidance, we empower
          you to navigate uncertainty and build long-term financial confidence.
        </p>
        <div className="flex justify-center">
          <div className="bg-white/40 w-1/4 h-[3px] mb-10"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Strategic Diversification
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Spreading investments across asset classes and geographies to
                reduce volatility.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Tailored Portfolio Design
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Customized to match your goals, timelines, and risk tolerance.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Product Selection
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                Our advisors choose a prudent mix of regulated products with
                growth potential and capital protection.
              </p>
            </div>
            <div className="bg-white/5 p-6 shadow-lg">
              <h4 className="font-Heading text-2xl text-white mb-2">
                • Ongoing Monitoring
              </h4>
              <div className="w-full h-px bg-white/30 mb-4"></div>
              <p className="font-Text text-white/80 text-base leading-relaxed">
                We adjust portfolios as markets evolve to stay aligned with your
                objectives.
              </p>
            </div>
          </div>

          {/* Closing Message */}
          <p className="font-Text text-white/90 text-lg md:text-xl text-center mt-16 leading-relaxed max-w-3xl mx-auto">
            Empower your financial journey by understanding the value of
            patience, planning, and professional guidance.
          </p>
        </div>
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
            Start Your Investment Journey Today
          </h2>
          <div className="h-px bg-white/30 w-full max-w-6xl mx-auto mb-10"></div>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced advisors help you build a strategy that works
            for you. Take the first step toward your financial future.
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

export default Planning;
