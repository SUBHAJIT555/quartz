import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import Logo from "./Logo";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY", scrollY?.get(), scrollY?.getPrevious());
      setHidden(
        scrollY?.get() > 50 &&
          (scrollY?.getPrevious() ?? 0) < (scrollY?.get() ?? 0)
      );
      setIsAtTop(scrollY.get() === 0);
      setIsScrollingDown((scrollY?.get() ?? 0) > (scrollY?.getPrevious() ?? 0));
    };

    return scrollY.onChange(handleScroll);
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log("issclollingDown", isScrollingDown);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/Services" },
    { name: "Education", href: "/FinancialEducation" },
    { name: "Remittance", href: "/Remittance" },
    { name: "Planning", href: "/Planning" },
    { name: "Insights", href: "/Insights" },
    { name: "Contact", href: "/ContactUs" },
  ];

  return (
    <>
      <div className="flex justify-center">
        {/* Navbar */}
        <nav
          className={`fixed top-0 w-11/12 mx-auto md:w-full z-30 transition-all duration-300 `}
        >
          <motion.div
            variants={{
              visible: { y: 0 },
              hidden: { y: "-130%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`max-w-7xl mx-auto flex justify-between items-center px-5 py-3 rounded-4xl mt-4 bg-white/70 ${
              (isAtTop && !isMenuOpen) || isScrollingDown
                ? "bg-transparent"
                : "bg-white/20 backdrop-blur-md shadow-md"
            }`}
          >
            <div className="mr-auto -ml-10">
              <Logo />
            </div>

            <div className="hidden lg:flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className="relative text-lg font-medium hover:text-gray-600 transition-colors group"
                  whileHover={{ color: "#4B5563" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {/* Top border animation */}
                  <span className="absolute top-0 left-0 w-0 h-[3px] bg-[#8F7F6A] transition-all duration-300 group-hover:w-full"></span>
                  {/* Bottom border animation */}
                  <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#8F7F6A] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Hamburger icon for mobile view */}
            {isMenuOpen ? (
              <X
                onClick={toggleMenu}
                className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-black lg:hidden"
              />
            ) : (
              <AlignJustify
                onClick={toggleMenu}
                className="w-5 h-5 md:w-8 md:h-8 cursor-pointer text-black lg:hidden"
              />
            )}
          </motion.div>
        </nav>
      </div>
      {/* Menu panel that slides up from below */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={isMenuOpen ? { y: "calc(100vh - 100%)" } : { y: "100vh" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed bottom-0 left-0 right-0 z-30 bg-primary/70 backdrop-blur-md shadow-lg  rounded-t-4xl overflow-hidden`}
        style={{ height: "calc(100vh - 90px)" }}
      >
        {/* Centered menu items */}
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="space-y-8 text-center">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  color: "#4B5563",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="text-2xl text-white  font-medium hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
