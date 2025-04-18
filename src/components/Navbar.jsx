import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="fixed w-full z-10 py-4 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-slate-100">
      {/* desktop navigation section */}
      <nav className="container flex flex-row items-center justify-between">
        <div>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <h1 className="text-2xl font-bold text-secondary">CheesyBites.</h1>
          </Link>
        </div>
        <nav className="hidden gap-10 text-xl font-semibold lg:flex text-secondary">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          >
            Home
          </Link>
          <Link
            to="speciality"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          >
            Speciality
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          >
            Review
          </Link>
        </nav>

        <div className="items-center hidden gap-4 md:flex">
          <Button title="Sign Up" />
        </div>

        <div className="flex items-center md:hidden">
          <motion.div
            animate={{
              scale: menu ? 1.2 : 1,
              rotate: menu ? 180 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={handleChange}
          >
            {menu ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenuUnfold size={25} />
            )}
          </motion.div>
        </div>
      </nav>

      {/* responsive navigation */}
      <motion.div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-16 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: menu ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="speciality"
          spy={true}
          smooth={true}
          duration={500}
          className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Speciality
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Menu
        </Link>
        <Link
          to="review"
          spy={true}
          smooth={true}
          duration={500}
          className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Review
        </Link>

        <div className="flex items-center justify-center gap-4">
          <Button title="Sign Up" />
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
