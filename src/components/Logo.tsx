import { Link } from "react-router-dom";
import logo from "../assets/images/logo/QuartzDark.webp";

const Logo = () => {
  return (
    <div className="h-[25px] w-52 md:w-64 md:h-[40px]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </Link>
    </div>
  );
};

export default Logo;
