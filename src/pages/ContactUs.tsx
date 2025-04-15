import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import contactHero from "../assets/images/insight/Contact_img.webp";
import companyLogo from "../assets/images/logo/QuartzDark.webp";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUs = () => {
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

  const [loading, setLoading] = useState<boolean>(false);

  // const [status, setStatus] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    const formData = {
      ...data,
      formType: "contact",
    };

    try {
      const response = await fetch(
        "https://quartz-server-six.vercel.app/api/v1/email/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        // setStatus("Message sent successfully!");
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message.");

        console.error("Error sending message:");
      }
    } catch (err) {
      toast.error("Failed to send message.");
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={contactHero}
          alt="Planning Hero"
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-end h-full bg-black/50 pr-20">
          <div className="text-white text-right max-w-2xl">
            <h1 className="font-Heading text-5xl md:text-7xl leading-tight">
              Contact Us
            </h1>
            <p className="font-Text text-xl md:text-2xl mt-4">
              We’d love to hear from you
              <span className="font-Signature text-primary text-5xl md:text-6xl ml-2">
                — reach out anytime
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <motion.div
        className="w-full bg-secondary"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-Heading text-3xl md:text-[2vw] pt-16 pb-16 text-center tracking-wide">
          Your journey to financial confidence
          <span className="font-Signature text-primary text-7xl">
            &nbsp;starts with a conversation
          </span>
        </h2>
      </motion.div>

      {/* Contact Section */}
      <motion.section
        className="bg-primary text-white py-24 px-6 md:px-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-Heading mb-2">
              Send Us a Message
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Whether you're ready to invest or just exploring your options,
              we’re here to help.
            </p>
            <div className="w-[70px] h-1 bg-white"></div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-white/70 mb-2 font-Text">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 font-Text focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-white/70 mb-2 font-Text">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="username@domain.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 font-Text focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-white/70 mb-2 font-Text">
                  Contact Number
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    // pattern: {
                    //   value: /^\+971\d{9}$/,
                    //   message: "Invalid phone number",
                    // },
                  })}
                  maxLength={13}
                  placeholder="+971-50-123-4567"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-Text placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-white/70 mb-2 font-Text">
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-Text placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="bg-white text-[#957F63] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white/90 transition duration-300 mt-10 group relative overflow-hidden"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <p>Sending</p>
                    <div className="flex items-center gap-1">
                      <span className="dot-animation"></span>
                      <span className="dot-animation"></span>
                      <span className="dot-animation"></span>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="inline-block transition-all duration-300 group-hover:pr-6">
                      Send
                    </span>
                    <ArrowUpRight
                      className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      size={16}
                    />
                  </>
                )}
              </Button>

              {/* <p className="text-white/80 mt-4">{status}</p> */}
            </form>
          </div>

          {/* Info */}
          <div className="p-6">
            <img src={companyLogo} alt="Company Logo" className="h-12 mb-4" />
            <h3 className="font-Heading text-2xl md:text-3xl mb-2 text-white">
              Let’s Start a Conversation
            </h3>
            <p className="text-white/70 text-lg mb-6">
              We’re here to guide your financial journey with clarity and
              confidence.
            </p>

            <div className="space-y-6 text-white/90 text-base font-Text">
              <div className="w-[70px] h-1 bg-white"></div>

              <div className="mb-8 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0032220917786!2d73.8966674!3d18.4732608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea6f0b41a257%3A0xcef2546d5e1b3c1!2sClover%20Highlands!5e0!3m2!1sen!2sin!4v1712822630993!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-56"
                  style={{ border: 0 }}
                ></iframe>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-white mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-white/80">
                    Clover Highlands, NIBM Road,
                    <br />
                    Pune, Maharashtra
                    <br />
                    India 411048.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-white mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:advisory@qf-advisory.com"
                    className="text-white/80 hover:text-white transition"
                  >
                    advisory@qf-advisory.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-white mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+918668373752"
                    className="text-white/80 hover:text-white transition"
                  >
                    +91 866 8373 752
                  </a>
                </div>
              </div>
            </div>
          </div>
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

export default ContactUs;
