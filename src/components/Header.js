import React, { useState, useEffect } from "react";
import LogoWhite from "../assets/img/logoroyal.png";
import LogoDark from "../assets/img/logoroyal.png";
import { Link } from "react-scroll";



const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "bg-black py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* Logo */}
        <a href="/">
          {header ? (
            <img className="w-[60px]" src={LogoDark} alt="Logo Dark" />
          ) : (
            <img className="w-[60px]" src={LogoWhite} alt="Logo White" />
          )}
        </a>

        {/* Nav */}
        <nav
          className={`${
            header ? "text-primary " : "text-white"
          } flex gap-x-4  font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <ul className="flex justify-center gap-x-4 text-white">
            <li className="cursor-pointer hover:text-accent transition">
            <a href="/">Home</a>
            
            </li>

            <li className="cursor-pointer hover:text-accent transition text-whit">
              <Link to="room" smooth={true} duration={500} spy={true} activeClass="active">
                Rooms
              </Link>
            </li>

            <li className="cursor-pointer hover:text-accent transition text-whit">
              <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
