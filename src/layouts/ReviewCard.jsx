import React from "react";

const ReviewCard = ({ img, name }) => {
  return (
    <div className=" bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className=" text-lightText">
          "I had the best pizza ever! The crust was perfectly crispy, and the toppings were fresh and flavorful. Highly recommend!"
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 mt-4 ">
        <img className="w-1/4 rounded-full " src={img} alt="img" />
        <h3 className="font-semibold ">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
