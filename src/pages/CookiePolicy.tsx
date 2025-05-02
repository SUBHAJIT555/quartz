import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
import heroImage from "../assets/images/legal/Cookie_policy.webp";

import { Cookie } from "lucide-react";

const CookiePolicy: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const cookiePolicyData = [
    {
      title: "1. What Are Cookies?",
      content: [
        "Cookies are small text files stored on your device when you visit a website. They help the site recognize your device, remember your preferences, and track user behavior for analytics and marketing purposes.",
      ],
    },
    {
      title: "2. Types of Cookies We Use",
      content: [
        "Essential Cookies: Required for basic site functionality and security.",
        "Performance Cookies: Collect anonymous usage data to improve website performance.",
        "Functionality Cookies: Remember your preferences and settings (e.g., language selection).",
        "Analytics Cookies: Help us analyze traffic sources, user interactions, and site performance.",
        "Marketing Cookies: Track user behavior to display personalized advertisements (where applicable).",
      ],
    },
    {
      title: "3. How We Use Cookies",
      content: [
        "We use cookies to:",
        "Ensure website functionality and security",
        "Analyze site traffic and user behavior",
        "Enhance user experience by remembering preferences",
        "Provide relevant marketing and advertising",
        "Measure the effectiveness of our content and campaigns",
      ],
    },
    {
      title: "4. Managing Your Cookie Preferences",
      content: [
        "Most web browsers automatically accept cookies. However, you can modify your browser settings to decline some or all cookies. Disabling cookies may affect website functionality.",
        "Browser settings allow you to:",
        "View and delete stored cookies",
        "Block all cookies or only third-party cookies",
        "Receive notifications before a cookie is stored",
      ],
    },
    {
      title: "5. Third-Party Cookies",
      content: [
        "Some cookies on our site may be placed by trusted third-party services (such as Google Analytics or CRM tools). These third parties may collect data based on your interactions for analytics and advertising purposes.",
      ],
    },
    {
      title: "6. Updates to This Policy",
      content: [
        "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our services. All updates will be posted on this page with the updated effective date.",
      ],
    },
    {
      title: "7. Contact Us",
      content: [
        "If you have any questions about our use of cookies or this policy, please contact us:",
        "Email: advisory@qf-advisory.com",

      ],
    },
  ];

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Cookie Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Cookie Policy
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              We use cookies to enhance your experience, analyze traffic, and
              personalize content
              <span className="font-Signature text-primary text-5xl md:text-6xl ml-2">
                — transparently and respectfully
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <header className="bg-primary text-white py-10 px-6 md:px-12 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-8 h-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold font-Heading">
              Cookie Policy
            </h1>
          </div>
          <p className="text-white/80 text-sm md:text-base">
            Effective Date: <span className="font-medium">[1st April 2025]</span>
          </p>
        </div>
        <div className="h-px w-full bg-white/50 mb-4 mt-4"></div>
      </header>

      {/* Welcome Message */}
      <section className="bg-primary py-12 px-6 md:px-12 text-gray-800">
        <div className="max-w-4xl mx-auto text-base text-white md:text-lg leading-relaxed font-Text">
          <p>
            This Cookie Policy explains how{" "}
            <strong>Quartz Financial Advisory Services</strong> ("we", "our", or
            "us") uses cookies and similar tracking technologies on our website
            to improve your browsing experience and better understand how you
            use our services.
          </p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="px-6 md:px-12 py-12 bg-primary">
        <div className="max-w-5xl mx-auto space-y-8">
          {cookiePolicyData.map((item, index) => (
            <div
              key={index}
              id={item.title.toLowerCase().replace(/\s+/g, "-")}
              className="border border-gray-200 shadow-sm rounded-xl p-6"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {item.title}
              </h2>
              <div className="h-px w-full bg-white/40 mb-7"></div>
              <div className="space-y-4 text-gray-700 text-base text-white md:text-lg leading-relaxed">
                {item.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thank You Message */}
      <section className="bg-primary py-12 px-6 md:px-12 text-gray-800">
        <div className="max-w-4xl mx-auto text-base text-white md:text-lg leading-relaxed font-Text">
          <p>
            Thank you for visiting{" "}
            <strong>Quartz Financial Advisory Services</strong>. Your privacy
            and trust mean everything to us.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CookiePolicy;
