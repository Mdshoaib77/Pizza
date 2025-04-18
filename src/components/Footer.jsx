import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="mt-8 text-white bg-black rounded-t-3xl md:mt-0">
      <div className="flex flex-col justify-between p-8 px-5 md:flex-row md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="pb-4 text-xl font-semibold ">CheesyBites</h1>
          <p className="text-sm ">
            Best pizza in town, made with love and fresh ingredients. Our
            pizza is baked to perfection, with a crispy crust and a variety of
          </p>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Links</h1>
          <div className="flex flex-col gap-2 ">
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
          </div>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Menu</h1>
          <div className="flex flex-col gap-2 ">
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
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-yellow-500"
            >
              Menu
            </Link>
          </div>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Contact Us</h1>
          <div className="flex flex-col gap-2 ">
            <Link to="/" spy={true} smooth={true} duration={500}>
              CheesyBites@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +64 958 248 966
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              Social media
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="py-4 text-center ">
          @copyright developed by
          <span className="text-yellow-500 "> Md Shoaib</span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
