import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { BsCupHot } from "react-icons/bs";
import { MdOutlineFoodBank } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";

const cateroies = [
  {
    id: 1,
    name: "All",
    image: <TiThSmallOutline className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 2,
    name: "Breakfast",
    image:<BsCupHot className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 3,
    name: "Soups",
    image: <TbSoup className="w-[60px] h-[60px] text-blue-500"  />,
  },
  {
    id: 4,
    name: "Pasta",
    image: <CiBowlNoodles  className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 5,
    name: "Main_course",
    image: <MdOutlineFoodBank className="w-[60px] h-[60px] text-blue-500" />,
  },
  {
    id: 6,
    name: "Pizza",
    image: <GiFullPizza className="w-[60px] h-[60px] text-blue-500"  />,
  },
  {
    id: 7,
    name: "Burger",
    image: <GiHamburger className="w-[60px] h-[60px] text-blue-500" />,
  },
];

export default cateroies