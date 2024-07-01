import { Link as Linker, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import hunterlogo from "../assets/hunterlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (path) => {
    navigate("/");
    setTimeout(() => {
      const scroll = document.getElementById(path);
      if (scroll) {
        scroll.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation to home page first
  };

  const navItems = [
    { link: "Главная", path: "home" },
    { link: "O Hac", path: "about" },
    { link: "Сepвис", path: "service" },
    { link: "Продукты", path: "product" },
    { link: "Напишите нам", path: "contactus" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}>
        <div className="flex justify-between items-center text-base gap-8">
          <Linker
            to="/"
            className="text-2xl font-semibold flex items-center space-x-3">
            <img
              src={hunterlogo}
              alt=""
              className="w-32 inline-block items-center"
            />
          </Linker>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer">
                <button onClick={() => handleNavClick(path)}>{link}</button>
              </li>
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
          className={`fixed inset-x-0 top-0 z-40 p-4 bg-brandPrimary transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ transitionDuration: "300ms" }}>
          <div className="flex justify-between items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none">
              <FaXmark className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {navItems.map(({ link, path }) => (
              <button
                key={path}
                onClick={() => {
                  handleNavClick(path);
                  setIsMenuOpen(false);
                }}
                className="block text-base text-white hover:text-brandPrimary first:font-medium cursor-pointer">
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
