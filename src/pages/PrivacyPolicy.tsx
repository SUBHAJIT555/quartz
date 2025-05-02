import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
import { GlobeLock } from "lucide-react";

import heroImage from "../assets/images/legal/Privacy_policy.webp"

const privacyData = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal Information: Name, email address, phone number, mailing address, nationality, and identification documents.",
      "Financial Information: Investment preferences, bank details (where required for legal remittance), and risk profile.",
      "Usage Data: Information on how you use our website (IP address, browser type, pages visited, etc.) collected via cookies and analytics tools.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Provide investment, real estate, and training services.",
      "Customize financial advice and portfolio recommendations.",
      "Process legal and regulatory documentation (e.g., for LRS remittance).",
      "Send updates, newsletters, and relevant market information.",
      "Improve website functionality and user experience.",
      "Comply with legal obligations and government regulations.",
    ],
  },
  {
    title: "3. Sharing and Disclosure",
    content: [
      "We do not sell your personal information. We may share it only in the following cases:",
      "With licensed institutions and financial partners to process transactions.",
      "With regulatory authorities, as required by law.",
      "With third-party service providers (e.g., email platforms, CRMs) under strict confidentiality agreements.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard measures to protect your information:",
      "Encrypted communication (HTTPS).",
      "Secure storage systems and firewalls.",
      "Access control with limited permissions.",
      "Regular audits and data protection protocols.",
      "Despite our efforts, no digital system is 100% secure. We encourage clients to also take necessary precautions.",
    ],
  },
  {
    title: "5. Cookies and Tracking",
    content: [
      "Our website uses cookies to enhance user experience and gather analytics.",
      "You can manage cookie preferences through your browser settings.",
      "Usage of the site implies consent to our use of cookies.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the right to:",
      "Access, update, or delete your personal information.",
      "Withdraw consent for certain uses.",
      "Opt-out of marketing communications.",
      "To exercise these rights, contact us via the details below.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and support future inquiries or audits.",
    ],
  },
  {
    title: "8. Updates to This Policy",
    content: [
      "We may update this Privacy Policy from time to time.",
      "Changes will be posted on this page with the revised effective date.",
      "Continued use of our services implies acceptance of the updated policy.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or how your information is handled, please reach out to us at:",
      "Email: advisory@qf-advisory.com",
      
    ],
  },
];

const PrivacyPolicy: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero Section */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Privacy Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Privacy Policy
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              Your Privacy, Our Responsibility
            </p>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <header className="bg-primary text-white py-10 px-6 md:px-12 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GlobeLock className="w-8 h-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold font-Heading">
              Privacy Policy
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
            At <strong>Quartz Financial Advisory Services</strong>, we are
            committed to protecting your privacy and safeguarding the personal
            information you share with us. This Privacy Policy outlines how we
            collect, use, disclose, and protect your data when you interact with
            our website, services, or educational programs.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="px-6 md:px-12 py-12 bg-primary">
        <div className="max-w-5xl mx-auto space-y-8">
          {privacyData.map((item, index) => (
            <div
              key={index}
              id={item.title.toLowerCase().replace(/\s+/g, "-")}
              className="border border-gray-200 shadow-sm rounded-xl p-6"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {item.title}
              </h2>
              <div className="h-px w-full bg-white/40 mb-7"></div>
              <div className="space-y-4 text-white text-base md:text-lg leading-relaxed">
                {item.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thank You Section */}
      <section className="bg-primary py-12 px-6 md:px-12 text-gray-800">
        <div className="max-w-4xl mx-auto text-base text-white md:text-lg leading-relaxed font-Text">
          <p>
            Thank you for trusting{" "}
            <strong>Quartz Financial Advisory Services</strong> with your
            information.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
