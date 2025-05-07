import React, { useEffect, useState } from "react";
import { getUserStates } from "../../../utils/apiCalls";
import { useAuth } from "./../../../hooks/AuthContext";
import useDifficultyManager from "../../../hooks/useDifficultyManager";

const DifficultySelector = ({
  btnFracNextRef,
  btnNextRef,
  efraction,
  operation,
  sameDenoms,
  mixOperation,
  setDifficulty2,
  difficulty2,
  difficulty,
  setDifficulty,
}) => {
  const { easy, medium, hard } = useDifficultyManager(operation, sameDenoms);

  return (
    <div>
      <h4 className="font-inter text-[11px] sm:text-[13px] md:text-[16px] text-black text-start">
        Level of Difficulty
      </h4>
      {efraction > 0 ? (
        <div className="difficulty-div w-100 h-6 sm:h-8 md:h-11 text-[12px] sm:text-[14px] md:text-[16px] mt-2   md:rounded-[4px] flex flex-row  justify-start">
          <button
            onClick={() => {
              setDifficulty2(1);
              setDifficulty(1);
              setTimeout(() => {
                btnFracNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 border font-inter font-semibold rounded-l-sm md:rounded-l-md border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${
              difficulty2 == 1 && "bg-gray-700 text-white hover:tracking-normal"
            } `}
          >
            Simple
          </button>

          <button
            onClick={() => {
              setDifficulty2(2);
              setDifficulty(1);
              setTimeout(() => {
                btnFracNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 font-inter font-semibold border border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${
              difficulty2 == 2 && "bg-gray-700 text-white hover:tracking-normal"
            } `}
          >
            Easy
          </button>

          <button
            onClick={() => {
              setDifficulty2(3);
              setDifficulty(1);
              setTimeout(() => {
                btnFracNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 font-inter font-semibold border border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${
              difficulty2 == 3 && "bg-gray-700 text-white hover:tracking-normal"
            } `}
          >
            Medium
          </button>

          <button
            onClick={() => {
              setDifficulty2(4);
              setDifficulty(1);
              setTimeout(() => {
                btnFracNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 font-inter  rounded-r-sm md:rounded-r-md font-semibold border border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${
              difficulty2 == 4 && "bg-gray-700 text-white hover:tracking-normal"
            } `}
          >
            Hard
          </button>
        </div>
      ) : (
        <div className="difficulty-div w-100 h-6 sm:h-8 md:h-11 text-[12px] sm:text-[14px] md:text-[16px] mt-2   md:rounded-[4px] flex flex-row  justify-start">
          <button
            onClick={() => {
              setDifficulty(1);
              setDifficulty2(1);
              setTimeout(() => {
                btnNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 border font-inter font-semibold rounded-l-sm md:rounded-l-md border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${
              difficulty == 1 && "bg-gray-700 text-white hover:tracking-normal"
            } `}
          >
            Simple
          </button>

          <button
            disabled={easy}
            onClick={() => {
              setDifficulty(2);
              setDifficulty2(1);
              setTimeout(() => {
                btnNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 font-inter font-semibold border border-gray-700 disabled:tracking-normal hover:tracking-widest transition-all duration-300 ease-in-out  ${
              difficulty == 2 && "bg-gray-700 text-white hover:tracking-normal"
            }  `}
          >
            Easy
          </button>

          <button
            disabled={medium}
            onClick={() => {
              setDifficulty(3);
              setDifficulty2(1);
              setTimeout(() => {
                btnNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 font-inter font-semibold border border-gray-700 disabled:tracking-normal hover:tracking-widest transition-all duration-300 ease-in-out ${
              difficulty == 3 && "bg-gray-700 text-white hover:tracking-normal"
            } `}
          >
            Medium
          </button>

          <button
            disabled={hard}
            onClick={() => {
              setDifficulty(4);
              setDifficulty2(1);
              setTimeout(() => {
                btnNextRef.current.click();
              }, 20);
            }}
            className={`flex-1 font-inter  rounded-r-sm md:rounded-r-md font-semibold border border-gray-700 disabled:tracking-normal hover:tracking-widest transition-all duration-300 ease-in-out ${
              difficulty == 4 && "bg-gray-700 text-white hover:tracking-normal"
            } `}
          >
            Hard
          </button>
        </div>
      )}
    </div>
  );
};

export default DifficultySelector;
