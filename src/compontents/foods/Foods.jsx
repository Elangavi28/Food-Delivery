import React from "react";
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Additem } from "../../redux/cartSlice";
import { toast } from "react-toastify";

function Foods({ name, image, id, price, type }) {

  const dispatch=useDispatch()
  return (
    <div
      key={id}
      className="w-[280px] h-[400px] bg-white flex flex-col items-start justify-start 
    p-[10px] shadow-lg rounded-lg m-3 gap-2 hover:border-2 border-blue-500 transition-all duration-500 "
    >
      <div>
        <img
          src={image}
          alt=""
          className="w-[450px] h-[250px] object-cover rounded-lg"
        />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="flex text-blue-500  text-lg font-semibold w-full justify-between items-center">
        <div>Rs {price}/-</div>
        <div className="flex items-center gap-1">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded-md flex 
      justify-center items-center shadow-lg hover:bg-blue-300 font-semibold transition-all duration-500 cursor-pointer" onClick={()=>{dispatch(Additem({id:id ,name:name,price:price,image:image,qty:1}))
    toast.success(`${name} added`)}
  }
      >
        Add to Dish
      </button>
    </div>
  );
}

export default Foods;
