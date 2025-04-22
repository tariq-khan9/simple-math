import React, { useEffect } from "react";

const SubmitResultModal = ({
  showSubmitResultModal,
  setShowSubmitResultModal,
  divisionArrayResult,
  submitResult,
  sheets,
}) => {
  useEffect(() => {
    console.log("final result", submitResult);
  }, []);

  const percentage = ((submitResult / sheets) * 100).toFixed(0);
  const handleClose = () => {
    setShowSubmitResultModal(false);
  };
  if (showSubmitResultModal) {
    return (
      <div className=" fixed top-0 left-0 w-full h-full pt-48 bg-transparent w-scree  backdrop-blur-sm flex justify-center items-center ">
        <div className="bg-white rounded-md z-40 w-96 max-h-85 mt-[80px] overflow-y-auto  p-4  mb-[200px]">
          <div className="text-center w-full">
            <h2 className="text-[25px] font-bold italic  text-green-800 ">
              Final Result
            </h2>
            <div className="mt-10 mb-10 p-6">
              {percentage < 50 && (
                <p className="text-[22px] font-thin">
                  <span className="text-orange-600 italic text-[25px]">
                    Oops!
                  </span>{" "}
                  you secured{" "}
                  <span className="font-semibold text-[30px] italic">
                    {percentage}%
                  </span>{" "}
                  result.
                </p>
              )}
              {percentage >= 50 && (
                <p className="text-[22px] font-thin">
                  <span className="text-green-800 italic text-[25px]">
                    Excellent!
                  </span>{" "}
                  you secured{" "}
                  <span className="font-semibold text-[30px] italic">
                    {percentage}%
                  </span>{" "}
                  result.
                </p>
              )}
            </div>
          </div>

          {/* ====================================== close button ======================================== */}
          <div
            onClick={() => handleClose()}
            className="flex flex-row w-full  justify-end mt-4 pr-4"
          >
            <button className="flex justify-items-end p-1 pb-2 px-8 text-white rounded-md bg-orange-500">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default SubmitResultModal;
