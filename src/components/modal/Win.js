import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Win = () => {
  const { winner, handleNextRound, handleReset } = useContext(GameContext);
  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p className="score__p">ชนะแน้วแบร่~~~</p>
          <h3
            className={`score__title ${
              winner === "o" ? "text-yellow" : "text-blue"
            } `}
          >
            {winner === "x" && <Xicon />}
            {winner === "o" && <Oicon />}
            
          </h3>
        </>
      ) : (
        <h3 className="score__title text-yellow">แพ้แน้วงับ *-*</h3>
      )}
      <div className="score__btns">
        <button className="btn btn-sm btn-danger " onClick={handleReset}>
          Quit
        </button>
        <button
          className={`btn   btn-sm ${
            winner === "x" ? "btn-yellow" : "btn-blue"
          }`}
          onClick={handleNextRound}
        >
          Next Round
        </button>
      </div>
    </div>
  );
};

export default Win;
