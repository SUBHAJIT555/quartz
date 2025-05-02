import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";

import { ShieldCheck } from "lucide-react";
import  heroImage from "../assets/images/legal/TermsandCondition.webp"

const TermsAndConditions: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  

  const termsData = [
    {
      title: "1. Use of Website",
      content: [
        "The content on this website is for informational purposes only and does not constitute professional financial, legal, or investment advice.",
        "You agree to use the website for lawful purposes only and not to engage in any activity that interferes with its operation or security.",
      ],
    },
    {
      title: "2. Investment Advisory Services",
      content: [
        "All investment services offered are subject to a client assessment, including risk profiling, financial goals, and compliance with international investment regulations.",
        "Investments involve risk, including the potential loss of principal. Past performance is not indicative of future results.",
        "Our advisory services are offered by certified professionals and are tailored to individual client needs based on available information and documentation.",
      ],
    },
    {
      title: "3. Real Estate Services",
      content: [
        "Real estate investment opportunities provided through Quartz are based on market research and strategic partnerships. All transactions are facilitated through licensed institutions.",
        "Clients are responsible for complying with local and international property laws, including taxes, ownership rights, and documentation.",
      ],
    },
    {
      title: "4. Training & Educational Programs",
      content: [
        "Our financial education offerings, including training programs, workshops, and seminars, are provided free of charge to help clients better understand the investment landscape.",
        "Participation in training programs does not guarantee investment success or certification.",
        "Quartz reserves the right to modify or cancel training sessions at any time.",
      ],
    },
    {
      title: "5. Regulatory Compliance & LRS",
      content: [
        "We assist Indian residents with international investments under the Liberalised Remittance Scheme (LRS), subject to RBI regulations and client eligibility.",
        "Clients must provide accurate documentation and comply with KYC norms for all remittance-related services.",
        "Quartz is not liable for delays or denials caused by incorrect or incomplete documentation or changes in regulatory frameworks.",
      ],
    },
    {
      title: "6. Intellectual Property",
      content: [
        "All content on this website including text, graphics, logos, and images are the property of Quartz Financial Advisory Services and protected by applicable copyright laws.",
        "You may not copy, reproduce, or distribute any part of the website without prior written permission.",
      ],
    },
    {
      title: "7. Privacy & Data Use",
      content: [
        "By using our services, you consent to the collection and use of your information as outlined in our Privacy Policy.",
        "We are committed to protecting your privacy and will not share your data with third parties without consent, except where required by law.",
      ],
    },
    {
      title: "8. Limitation of Liability",
      content: [
        "Quartz Financial Advisory Services shall not be held liable for any direct, indirect, or consequential loss or damage arising from your use of our website, services, or any reliance on the information provided.",
      ],
    },
    {
      title: "9. Modifications to Terms",
      content: [
        "We reserve the right to change these Terms and Conditions at any time. Updates will be posted on this page with the revised effective date.",
      ],
    },
    {
      title: "10. Contact Information",
      content: [
        "If you have any questions or concerns regarding these Terms and Conditions, please contact us at:",
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
          alt="Planning Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Terms & Conditions
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              Secure Investments Start with
              <span className="font-Signature text-primary text-5xl md:text-6xl ml-2">
                Clear Terms
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* header section  */}
      <header className="bg-primary text-white py-10 px-6 md:px-12 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold font-Heading">
              Terms & Conditions
            </h1>
          </div>

          <p className="text-white/80 text-sm md:text-base">
            Effective Date: <span className="font-medium">[1st April 2025]</span>
          </p>
        </div>
        <div className="h-px w-full bg-white/50 mb-4 mt-4"></div>
      </header>

      {/* ✅ Welcome Message Section */}
      <section className="bg-primary py-12 px-6 md:px-12 text-gray-800">
        <div className="max-w-4xl mx-auto text-base text-white md:text-lg leading-relaxed font-Text">
          <p>
            Welcome to <strong>Quartz Financial Advisory Services</strong>. By
            accessing or using our website, services, content, or training
            programs, you agree to be bound by the following terms and
            conditions. Please read them carefully before proceeding.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12 bg-primary">
        <div className="max-w-5xl mx-auto space-y-8">
          {termsData.map((item, index) => (
            <div
              key={index}
              id={item.title.toLowerCase().replace(/\s+/g, "-")}
              className=" border border-gray-200 shadow-sm rounded-xl p-6"
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

      {/* ✅ Welcome Message Section */}
      <section className="bg-primary py-12 px-6 md:px-12 text-gray-800">
        <div className="max-w-4xl mx-auto text-base text-white md:text-lg leading-relaxed font-Text">
          <p>
            Thank you for choosing{" "}
            <strong>Quartz Financial Advisory Services</strong> . We look
            forward to supporting your global investment journey.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
