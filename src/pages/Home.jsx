import Navbar from "../compontents/navbar/Navbar";
import Foods from "../compontents/foods/Foods";
import { food_items } from "../food";
import cateroies from "../Categorys";
import { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card from "../compontents/card/card";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  const { cate, setCate, input, setShowCart, showCart } =
    useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }
  const items = useSelector((state) => state.cart);

  const subtotal = items.reduce((total, item) => total + item.qty*item.price, 0);
  const deliveryFees = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = Math.floor(subtotal + deliveryFees + taxes);

  return (
    <div className=" bg-slate-200 w-full min-h-screen">
      <Navbar />

      {/* /search category */}
      {!input ? (
        <div className="flex  flex-wrap gap-[50px]  text-blue-500 items-center justify-center">
          {cateroies.map((item) => {
            return (
              <div
                className="w-[130px] h-[140px] bg-white shadow-xl rounded-lg  cursor-pointer
           hover:bg-blue-200 flex flex-col 
           items-center gap-5 p-5 justify-center 
           font-semibold text-[20px] transition-all 
           duration-200"
                onClick={() => filter(item.name)}
              >
                {item.image}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      {/* //food card */}
      <div className="w-full flex flex-wrap justify-center items-center gap-5 px-5 pt-8 ">
        {cate.length>1? cate.map((item) => (
          <Foods
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
            id={item.id}
          />
        )):<div className="text-xl font-semibold text-gray-600 pt-5">No Dish Found</div>}
       
      </div>

      {/* //cart */}
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-blue-400 font-semibold text-[18px]">
            Order items
          </span>
          <RxCross2
            className="w-[25px] h-[25px] text-[18px] text-blue-400 font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {/* card */}

         {items.length>0? <>
        <div className="w-full flex flex-col ">
          {items.map((item) => (
            <Card
              name={item.name}
              image={item.image}
              price={item.price}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>
        <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 p-4  font-semibold">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-500">Subtotal</span>
            <span className="text-blue-400">Rs {subtotal}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-500">DeliveryFees</span>
            <span className="text-blue-400 text-md">Rs {deliveryFees}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-500">Taxes</span>
            <span className="text-blue-400">Rs {taxes}/-</span>
          </div>
        </div>
        <div className="w-full border-t-2 border-gray-400 p-4  font-semibold">
          <div className="w-full flex justify-between items-center" >
            <span className="text-xl text-gray-500">Total</span>
          <span className="text-blue-400 text-xl">Rs {total}/-</span>
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-md flex 
      justify-center items-center shadow-lg hover:bg-blue-300 font-semibold mt-7 cursor-pointer transition-all duration-300 " onClick={()=>{
        toast.success("Order Placed")
      }}>Place Order</button>
        </div></>:<div className="text-blue-400 text-center pt-7 font-semibold text-2xl">Empty Cart</div>}
       
      </div>
    </div>
  );
}

export default Home;
