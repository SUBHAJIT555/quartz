import { ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import FooterLogo from "../assets/images/logo/QuartzLight.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#252526] text-white pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Branding */}
        <div>
          <Link to="/">
            <img className="h-16 mb-4" src={FooterLogo} alt="" />
          </Link>

          <div className="w-1/2 h-px bg-white/70 mb-4"></div>
          <h2 className="text-xl font-bold font-Text text-[#957F63] mb-4">
            Quartz Financial Advisory Services
          </h2>
          <p className="text-white/70 font-Text text-sm leading-relaxed max-w-sm">
            Empowering global investors with expert financial planning,
            strategic portfolios, and secure international opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 font-Text">
            Quick Links
          </h3>
          <div className="h-px w-1/2 bg-white/70 mb-5"></div>
          <ul className="space-y-3 text-sm font-Text">
            {[
              { label: "About Us", href: "/about-us" },
              { label: "Services", href: "/services" },
              { label: "Education", href: "/financial-education" },
              { label: "Remittance", href: "/remittance" },
              { label: "Planning", href: "/planning" },
              { label: "Insights", href: "/insights" },
              { label: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center group transition duration-300"
                >
                  <span className="group-hover:text-[#957F63] group-hover:underline underline-offset-4 transition-all">
                    {item.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#957F63]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links (NEW) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 font-Text">
            Legal
          </h3>
          <div className="h-px w-1/2 bg-white/70 mb-5"></div>
          <ul className="space-y-3 text-sm text-white/70 font-Text">
            {[
              { label: "Terms & Conditions", href: "/TermsAndConditions" },
              { label: "Privacy Policy", href: "/PrivacyPolicy" },
              { label: "Cookie Policy", href: "/CookiePolicy" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-[#957F63] hover:underline underline-offset-4 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 font-Text">
            Get in Touch
          </h3>
          <div className="h-px w-1/2 bg-white/70 mb-5"></div>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="mailto:advisory@qf-advisory.com"
                className="hover:text-[#957F63] transition font-Text text-xl"
              >
                advisory@qf-advisory.com
              </a>
            </li>
            <li>
              <a
                href="tel:+918668373752"
                className="hover:text-[#957F63] transition font-Text text-xl"
              >
                +91 866 8373 752
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-8 mb-4 font-Text">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/profile.php?id=61574824925807",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/qfinanceadvisory/",
              },
              {
                icon: Youtube,
                href: "https://www.youtube.com/@QuartzFinancialAdvisoryService",
              },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2 rounded-full bg-white/10 hover:bg-[#957F63]/20 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-white hover:text-[#957F63] transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/50">
        © {new Date().getFullYear()}{" "}
        <a href="">Quartz Financial Advisory Services</a> | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
