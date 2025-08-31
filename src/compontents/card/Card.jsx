import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, Removeitem } from "../../redux/cartSlice";

function Card({ name, price, image, qty, id }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] p-2 rounded-lg my-5 shadow-lg flex justify-between ">
      <div className="w-[60%] h-full flex gap-6">
        <div className="w-[70%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[100%] h-full flex flex-col gap-5">
          <div className="text-blue-400 font-semibold text-lg">{name}</div>
          <div
            className="border-1 border-blue-400 rounded-xl w-[100px] h-[35px] text-blue-400 flex 
             font-semibold text-lg shadow-xl bg-white"
          >
            <button
              className="cursor-pointer flex w-[30%] h-full
                justify-center items-center hover:text-gray-500"
              onClick={() => (qty > 1 ? dispatch(DecrementQty(id)) : 1)}
            >
              -
            </button>
            <span
              className=" w-[40%] h-full flex 
                justify-center items-center  "
            >
              {qty}
            </span>
            <button
              className="cursor-pointer flex w-[30%] h-full
                justify-center items-center hover:text-gray-500"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-blue-400 font-semibold text-[18px]">
          Rs {price}/-
        </span>
        <RiDeleteBinLine
          className="text-[18px] text-red-500 font-semibold cursor-pointer"
          onClick={() => dispatch(Removeitem(id))}
        />
      </div>
    </div>
  );
}

export default Card;
