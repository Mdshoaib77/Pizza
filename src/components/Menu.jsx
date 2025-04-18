import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import MenuCard from "../layouts/MenuCard";

// Import images directly
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";
import img4 from "../assets/img/menu4.jpg";
import img5 from "../assets/img/menu5.jpg";
import img6 from "../assets/img/menu6.jpg";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      img: img1, // Direct import
      title: "Margarita Marvel",
      price: "16.99",
    },
    {
      id: 2,
      img: img2, // Direct import
      title: "Pesto Paradise",
      price: "18.99",
    },
    {
      id: 3,
      img: img3, // Direct import
      title: "Hawaiian Bliss",
      price: "14.99",
    },
    {
      id: 4,
      img: img4, // Direct import
      title: "Truffle Treasures",
      price: "15.99",
    },
    {
      id: 5,
      img: img5, // Direct import
      title: "Farmhouse Harvest",
      price: "18.99",
    },
    {
      id: 6,
      img: img6, // Direct import
      title: "Cheese Frenzy",
      price: "13.99",
    },
  ];

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <h1 className="pt-24 text-4xl font-semibold text-center">Our Speciality</h1>

      {/* Animated grid container */}
      <motion.div
        className="grid grid-cols-1 gap-5 px-0 mt-8 md:grid-cols-2 lg:grid-cols-3 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {menuData.map((item) => (
          <motion.div
            key={item.id}
            className="card-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }} // Stagger delay for each card
          >
            <MenuCard
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Menu;
