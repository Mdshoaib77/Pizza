import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      img: "src/assets/img/menu1.jpg",
      title: "Margarita Marvel",
      price: "16.99",
    },
    {
      id: 2,
      img: "src/assets/img/menu2.jpg",
      title: "Pesto Paradise",
      price: "18.99",
    },
    {
      id: 3,
      img: "src/assets/img/menu3.jpg",
      title: "Hawaiian Bliss",
      price: "14.99",
    },
    {
      id: 4,
      img: "src/assets/img/menu4.jpg",
      title: "Truffle Treasures",
      price: "15.99",
    },
    {
      id: 5,
      img: "src/assets/img/menu5.jpg",
      title: "Farmhouse Harvest",
      price: "18.99",
    },
    {
      id: 6,
      img: "src/assets/img/menu6.jpg",
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
              key={item.id}
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
