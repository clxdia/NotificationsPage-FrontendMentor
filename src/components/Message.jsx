import React from "react";

const Message = (props) => {
  return (
    <div className=" rounded-md flex grid-rows-2 p-3 mb-2">
      <div className="min-w-[35px] h-auto mr-2 row-span-2">
        <img src={props.img} alt="/" className="w-[32px]" />
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="text-gray-500 text-[0.7rem]">
            <span className="text-black font-[800] links">{props.name} </span>
            {props.action}
            <span className="text-gray-700 font-[800] links">
              {" "}
              {props.post}
            </span>
          </h3>
        </div>
        <div className="text-[0.7rem] text-[#5e6778] ">
          <p>{props.time} ago</p>
        </div>
        <div className="p-2 rounded-[3px] border-[1px] border-gray-400 msg mt-2">
          <p className="text-gray-700 text-[0.7rem]">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
