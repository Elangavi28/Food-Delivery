import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../../context/UserContext";
import { food_items } from "../../food";
import { useSelector } from "react-redux";

function Navbar() {
  const { input, setInput, setCate,setShowCart } = useContext(dataContext);
  useEffect(() => {
    const newList = food_items.filter(
      (items) =>
        items.food_name.includes(input) ||
        items.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);

  const items =useSelector(state=>state.cart)
  return (
    <div className="w-full h-[100px] flex justify-between px-[30px] items-center md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center cursor-pointer rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-blue-500" />
      </div>
      <form
        action=""
        className="flex bg-white items-center w-[45%] h-[50px] p-2 text-center cursor-pointer rounded-md shadow-xl md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-blue-500 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search items..."
          className="ml-4 outline-none w-[100%] text-[16px] md:[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center cursor-pointer rounded-md shadow-xl relative"
      onClick={()=>setShowCart(true)}>
        <span className="absolute top-0 right-2 text-blue-500 font-bold">
          {items.length}
        </span>
        <FiShoppingBag className="w-[30px] h-[30px] text-blue-500" />
      </div>
    </div>
  );
}

export default Navbar;
