import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import info1 from "../utils/userContext";
import { useSelector } from "react-redux";
import logo from "../Images/main-logo.png";

export const Title = () => {
  return (
    <a href="/">
      {" "}
      <img className=" w-20 mix-blend-multiply" src={logo} alt="Logo" />
    </a>
  );
}; //name export

//Composition component
const Header = () => {
  const isOnline = useOnline();
  const [isLoggedInUser, setIsLoggedInUser] = useState("true");
  const { user } = useContext(info1);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      className="flex justify-between items-center px-4  py-1 font-bold"
      id="shadow"
    >
      <Title />

      <div className=" mr-3">
        <ul className="flex gap-x-1 items-center">
          <Link to="/">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange transition duration-300 ease-in-out  h-10 w-16 pt-2 text-center rounded-lg">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange transition duration-300 ease-in-out h-10 w-16 pt-2 text-center rounded-lg">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange transition duration-300 ease-in-out h-10 w-20 pt-2 text-center rounded-lg">
              Contact
            </li>
          </Link>
          {/* <Link to="/instamart">
            <li className="">Instamart</li>
          </Link> */}
          <Link to="/cart">
            <li className="text-Primary relative transition duration-300 ease-in-out hover:text-Secondry hover:bg-Orange p-2 text-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            <span className="absolute -top-1.5 right-3.5">{cartItems.length} </span>
            </li>
          </Link>
          <Link to="/login">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange transition duration-300 ease-in-out h-10 w-16 pt-2 text-center rounded-lg relative pr-3">
              login
              {isOnline ? (
                <div className="h-3 w-3 rounded-full bg-LightGreen absolute right-1 top-4 "></div>
              ) : (
                <div className="h-3 w-3 rounded-full bg-gray-600 "></div>
              )}
            </li>
          </Link>

          {/* <div>{isLoggedInUser?
            (<button onClick={()=>{
                setIsLoggedInUser("false");
            }} > logout</button>)}
            {(<button onClick={()=>{
                setIsLoggedInUser("true");
            }}>Login</button>)}</div>  */}
        </ul>
      </div>
    </div>
  );
};

export default Header; //default export
// can export default only one component
