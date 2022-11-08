import React from "react";
import "../index.css";

const Notif = (props) => {
  return (
    <div className=" rounded-md flex grid-rows-2 p-3 mb-2">
      <div className="min-w-[35px] h-auto mr-2 row-span-2">
        <img src={props.img} alt="/" className="w-[32px]" />
      </div>
      <div className="flex flex-col max-w-[400px]">
        <div>
          <h3 className="text-gray-500 text-[0.7rem]">
            <span className="text-black font-[800] links">{props.name} </span>
            {props.action}
            <span className="text-gray-700 font-[800] links">
              {" "}
              {props.post}{" "}
              <span className="text-red-500 text-[13px]">{props.circle}</span>
            </span>
          </h3>
        </div>
        <div className="text-[0.7rem] text-[#5e6778] ">
          <p>{props.time} ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notif;
