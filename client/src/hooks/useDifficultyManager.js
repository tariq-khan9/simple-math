import { useEffect, useState } from "react";
import { getUserStates } from "../utils/apiCalls";
import { useAuth } from "./AuthContext";
import { useSharedState } from "./SharedContext";

const useDifficultyManager = (
  operation,
  mixOperation,
  sameDenoms,
  efraction
) => {
  const { user } = useAuth();

  const { fetchStates, setFetchStates } = useSharedState();
  const [userStates, setUserStates] = useState([]);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetchInitialStates = async () => {
      try {
        const states = await getUserStates(user.id);
        setUserStates(states);
      } catch (err) {
        console.error("Error fetching user states:", err);
      }
    };

    fetchInitialStates();
  }, [user]);

  useEffect(() => {
    if (!user || !fetchStates) return;
    const fetchInitialStates = async () => {
      try {
        const states = await getUserStates(user.id);
        setUserStates(states);
        setFetchStates(false);
      } catch (err) {
        console.error("Error fetching user states:", err);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchInitialStates();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [user, fetchStates]);

  useEffect(() => {
    const userLevelManager = () => {
      if (!user) return;
      const relevantOperationMap = {
        3: 1, // 1 is operation id in database
        4: 2, // 2 is division
        1: sameDenoms ? 3 : 4, // 3 is addition with same denoms
        2: sameDenoms ? 5 : 6,
        5: 7,
      };

      function gettingReferenceOp(operation, mixOperation, efraction) {
        if (efraction > 0) return efraction + 7;
        if (operation > 0) return relevantOperationMap[operation];
        if (mixOperation > 0) return relevantOperationMap[5];
      }

      const referenceOp = gettingReferenceOp(
        operation,
        mixOperation,
        efraction
      );

      if (!referenceOp) {
        setEasy(false);
        setMedium(false);
        setHard(false);
        return;
      }

      const filteredStates = userStates.filter(
        (item) => item.operation === referenceOp
      );
      console.log("filtered data ", referenceOp, filteredStates);
      const easyPassed = !!filteredStates.find(
        (item) => item.difficulty_level === 1 && item.successes > 2
      );
      const mediumPassed = !!filteredStates.find(
        (item) => item.difficulty_level === 2 && item.successes > 2
      );
      const hardPassed = !!filteredStates.find(
        (item) => item.difficulty_level === 3 && item.successes > 2
      );

      setEasy(!easyPassed);
      setMedium(!mediumPassed);
      setHard(!hardPassed);
    };

    userLevelManager();
  }, [userStates, operation, efraction, sameDenoms, user]);

  return { easy, setEasy, medium, setMedium, hard, setHard };
};

export default useDifficultyManager;
