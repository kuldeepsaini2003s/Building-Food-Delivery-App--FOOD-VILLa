import React from "react";
import pizza from "../Images/contact us.png";
const Contact = () => {
  return (
    <div className="flex justify-center pt-10 items-center ">
      <div className="w-[40%] flex justify-center items-center">
        <img className="w-[80%]" src={pizza}></img>
      </div>
      <div className="w-[50%]">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="font-bold text-5xl font-PT Sans">Contact us</h2>
          <input
            type="text"
            placeholder="Name"
            className="h-[40px] w-[600px] border border-LightOrange rounded-md p-4"
            id="shadow-1"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="h-[40px] w-[600px] border border-LightOrange rounded-md p-4"
            id="shadow-1"
          ></input>
          <textarea
            typeof="text"
            placeholder="Type your Message here..."
            className="h-[56px] w-[600px] border border-LightOrange rounded-md pl-4 pt-2"
            id="shadow-1"
          ></textarea>
          <button className="h-10  w-20 rounded-md  bg-LightOrange text-White">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
