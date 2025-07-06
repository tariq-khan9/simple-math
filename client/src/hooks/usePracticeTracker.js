import { useState, useEffect } from "react";
import { useGlobalContext } from "../utils/AuthContext";
import { useSharedState } from "./SharedContext";

export function usePracticeTracker() {
  const { user } = useGlobalContext();
  const { setFetchStates } = useSharedState();

  const [practiceData, setPracticeData] = useState([]);
  const [operationId, setOperationId] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [success, setSuccess] = useState(false);

  const prepareParams = ({
    operation,
    mixOperation,
    efraction,
    difficulty,
    success,
    sameDenoms,
  }) => {
    if (!user) return;
    const getOperationId = (operation, mixOperation, sameDenoms, efraction) => {
      if (operation > 0) {
        if (operation === 3) return 1;
        if (operation === 4) return 2;
        if (operation === 1) return sameDenoms ? 3 : 4;
        if (operation === 2) return sameDenoms ? 5 : 6;
      }
      if (mixOperation > 0) return 7;
      if (efraction > 0) return efraction + 7;
      return 0;
    };

    const operationId = getOperationId(
      operation,
      mixOperation,
      sameDenoms,
      efraction
    );

    handleAttempt(user.id, operationId, difficulty, success);
  };

  const handleAttempt = (userId, operationId, difficultyLevel, success) => {
    setPracticeData((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.userId === userId &&
          item.operation_id === operationId &&
          item.difficulty_level === difficultyLevel
      );

      if (existingIndex > -1) {
        // Object exists, update attempts and successes
        return prev.map((item, index) =>
          index === existingIndex
            ? {
                ...item,
                attempts: item.attempts + 1,
                successes: item.successes + (success ? 1 : 0),
              }
            : item
        );
      } else {
        // Object does not exist, create a new one
        return [
          ...prev,
          {
            userId: userId,
            operation_id: operationId,
            difficulty_level: difficultyLevel,
            attempts: 1,
            successes: success ? 1 : 0,
          },
        ];
      }
    });
  };

  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      if (Object.keys(practiceData).length > 0) {
        savePracticeDataToServer(practiceData);
        setPracticeData([]);
        setFetchStates(true);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [practiceData]);

  const savePracticeDataToServer = async (data) => {
    console.log("practice data ", practiceData);
    try {
      await fetch("http://127.0.0.1:8000/update-states", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        keepalive: true,
      });
    } catch (error) {
      console.error("Failed to save practice data:", error);
    }
  };

  // handle unload with sendBeacon is not-functional for now

  // useEffect(() => {
  //   const handleUnload = () => {
  //     if (practiceData.length > 0) {
  //       // 1. Prepare the JSON string
  //       const jsonData = JSON.stringify(practiceData);

  //       // 4. Send the Blob using sendBeacon
  //       const success = navigator.sendBeacon(
  //         "http://127.0.0.1:8000/api/users/update-states",
  //         jsonData
  //       );
  //     } else {
  //       console.log("No practice data to send.");
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleUnload);
  //   };
  // }, [practiceData]);

  return { prepareParams };
}
