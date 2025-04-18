import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import MenuCard from "../layouts/MenuCard";

const OtherMenu = () => {
  const menuData = [
    {
      id: 7,
      img: "src/assets/img/menu7.jpg",
      title: "Margarita Marvel",
      price: "16.99",
    },
    {
      id: 8,
      img: "src/assets/img/menu8.jpg",
      title: "Pesto Paradise",
      price: "18.99",
    },
    {
      id: 9,
      img: "src/assets/img/menu9.jpg",
      title: "Hawaiian Bliss",
      price: "14.99",
    },
    {
      id: 10,
      img: "src/assets/img/menu10.jpg",
      title: "Truffle Treasures",
      price: "15.99",
    },
  ];

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <h1 className="mt-20 mb-3 text-4xl font-semibold text-center md:mt-10">
        Other Menu
      </h1>

      {/* Animated grid container */}
      <motion.div
        className="grid grid-cols-1 gap-5 px-0 mt-4 md:grid-cols-2 lg:grid-cols-4 md:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {menuData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: item.id * 0.2, // Staggered delay for smooth animation
            }}
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

export default OtherMenu;
