import React, { useContext } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start__header">
        <Xicon />
        <Oicon />
      </div>
      <div className="card ">
        <h1 className="text-lg">เลือกได้ 1 ตัว *-*</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        
      </div>
      <div className="start__btns">
        <button className="btn btn-warning" onClick={() => handleStart("cpu")}>
          เริ่มเล่น (vs บอท)
        </button>
        <button className="btn btn-primary" onClick={() => handleStart("user")}>
          {" "}
          เริ่มเล่น (vs เล่นกับเพื่อน)
        </button>
      </div>
    </div>
  );
};

export default Start;
