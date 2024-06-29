import React, { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import hunterlogo from "../assets/hunterlogo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Главная", path: "home" },
    { link: "O Hас", path: "about" },
    { link: "Сepвис", path: "service" },
    { link: "Продукты", path: "product" },
    { link: "Напишите нам", path: "contactus" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3">
            <img
              src={hunterlogo}
              alt=""
              className="w-32 inline-block items-center"
            />
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer">
                {link}
              </Link>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              className="focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6 text-neutralDGrey" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen
              ? "block fixed top-0 right-0 left-0 text-white"
              : "hidden"
          }`}>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white gray900 hover:text-brandPrimary first:font-medium ">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
