import Notif from "./components/Notif";
import React, { useState } from "react";
import mark from "./assets/images/avatar-mark-webber.webp";
import angela from "./assets/images/avatar-angela-gray.webp";
import anna from "./assets/images/avatar-anna-kim.webp";
import jacob from "./assets/images/avatar-jacob-thompson.webp";
import kimberly from "./assets/images/avatar-kimberly-smith.webp";
import nathan from "./assets/images/avatar-nathan-peterson.webp";
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Message from "./components/Message";
import ImageNotif from "./components/ImageNotif";
import "./index.css";

function App() {
  const [read, setRead] = useState("unread");
  const [circle, setCircle] = useState("●");
  const [zero, setZero] = useState("3");

  const handleNotifs = () => {
    setRead("read");
    setZero("0");
    setCircle("");
  };

  return (
    <div className="bg-white absolute m-auto left-0 right-0 md:top-0 top-5 md:bottom-0 md:w-[31rem] w-[18rem] md:h-[39rem] h-[46rem] md:p-5 p-3 rounded-xl font-jakarta drop-shadow-xl">
      <div className="flex items-center mb-5">
        <h1 className="font-[800] text-[1.1rem]">Notifications</h1>
        <div className="bg-[#0e2152] pl-2 pr-2 ml-2 rounded-[4px]">
          <p className="text-[13px] text-white">{zero}</p>
        </div>
        <div className="absolute right-5">
          <p className="text-[12px] text-gray-500 links" onClick={handleNotifs}>
            Mark all as read
          </p>
        </div>
      </div>
      <div className={read}>
        <Notif
          img={mark}
          name={"Mark Webber"}
          action={"reacted to your recent post"}
          post={"My first tournament today!"}
          time={"1m"}
          circle={circle}
        />
      </div>
      <div className={read}>
        <Notif
          img={angela}
          name={"Angela Gray"}
          action={"followed you"}
          post={""}
          time={"5m"}
          circle={circle}
        />
      </div>
      <div className={read}>
        <Notif
          img={jacob}
          name={"Jacob Thompson"}
          action={"has joined your group"}
          post={"Chess Club"}
          time={"1 day"}
          circle={circle}
        />
      </div>

      <Message
        img={rizky}
        name={"Rizky Hasanuddin"}
        action={"sent you a private message"}
        post={""}
        time={"5 days"}
      />
      <ImageNotif
        img={kimberly}
        name={"Kimberly Smith"}
        action={"commented on your picture"}
        post={""}
        time={"1 week"}
      />
      <Notif
        img={nathan}
        name={"Nathan Peterson"}
        action={"reacted to your recent post"}
        post={"5 end-game strategies to increase your win rate"}
        time={"2 weeks"}
      />
      <Notif
        img={anna}
        name={"Anna Kim"}
        action={"left the group"}
        post={"Chess Club"}
        time={"2 weeks"}
      />
    </div>
  );
}

export default App;
