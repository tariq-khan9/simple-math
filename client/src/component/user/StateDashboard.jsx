import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { getUserStates } from "../../utils/apiCalls";

const StateDashboard = () => {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  console.log("states in dashbaord ", data);
  useEffect(() => {
    if (!user) return;

    const fetchInitialStates = async () => {
      try {
        const states = await getUserStates(user.id);
        setData(states);
      } catch (err) {
        console.error("Error fetching user states:", err);
      }
    };

    fetchInitialStates();
  }, [user]);

  const operationMap = {
    1: "Multiplication",
    2: "Division",
    3: "Addition Same-denoms",
    4: "Addition Different-denoms",
    5: "Subtraction Same-denoms",
    6: "Subtraction Different-denoms",
    7: "Mixed",
    8: "Equal Fractions A",
    9: "Equal Fractions B",
    10: "Equal Fractions C",
    11: "Equal Fractions D",
    12: "Complex Fractions Multiply",
    13: "Complex Fractions Division",
    14: "Complex Fractions Addition",
    15: "Complex Fractions Subtraction",
    16: "Decimal Fraction Multiply",
    17: "Decimal Fraction Divide",
    18: "Decimal Fraction Addition",
    19: "Decimal Fraction Subtraction",
  };

  const difficultyMap = {
    1: "Simple",
    2: "Easy",
    3: "Medium",
    4: "Hard",
  };

  const groupedMap = {};

  data.forEach((row) => {
    const key = `${row.operation}-${row.difficulty_level}`;
    if (!groupedMap[key]) {
      groupedMap[key] = {
        operation: row.operation,
        difficulty_level: row.difficulty_level,
        total_attempts: 0,
        total_successes: 0,
      };
    }
    groupedMap[key].total_attempts += row.attempts;
    groupedMap[key].total_successes += row.successes;
  });

  const groupedArray = Object.values(groupedMap).map((item) => ({
    ...item,
    success_rate:
      item.total_attempts > 0
        ? ((item.total_successes / item.total_attempts) * 100).toFixed(0)
        : "0",
  }));

  // Sort and group by operation for rowSpan logic
  const groupedByOperation = {};
  groupedArray.forEach((item) => {
    if (!groupedByOperation[item.operation]) {
      groupedByOperation[item.operation] = [];
    }
    groupedByOperation[item.operation].push(item);
  });
  if (!user) return;
  return (
    <div className="p-2 mt-16 sm:p-4">
      <div className="w-full flex justify-center ">
        <h1 className="text-[22px] font-semibold ">Progress Dashboard</h1>
      </div>
      <div className="w-full flex flex-row justify-between mb-1">
        <h2 className="">
          <span className="font-semibold">Name:</span> {user.username}
        </h2>

        <h1>
          <span className="font-semibold">Email:</span> {user.email}
        </h1>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[300px]">
          <table className="w-full border border-gray-300 text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="p-1 sm:p-2 border">S.No</th>
                <th className="p-1 sm:p-2 border">Operation</th>
                <th className="p-1 sm:p-2 border">Level</th>
                <th className="p-1 sm:p-2 border">Attempts</th>
                <th className="p-1 sm:p-2 border">Successes</th>
                <th className="p-1 sm:p-2 border">Success %</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedByOperation).map(
                ([operationId, rows], opIndex) =>
                  rows.map((row, index) => (
                    <tr
                      key={`${operationId}-${row.difficulty_level}`}
                      className={`text-center ${
                        opIndex % 2 === 1 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      {index === 0 && (
                        <>
                          <td
                            className="p-1 sm:p-2 border"
                            rowSpan={rows.length}
                          >
                            {opIndex + 1}
                          </td>
                          <td
                            className="p-1 sm:p-2 border"
                            rowSpan={rows.length}
                          >
                            <span className="hidden sm:inline">
                              {operationMap[row.operation]}
                            </span>
                            <span className="sm:hidden">
                              {operationMap[row.operation]
                                .split(" ")
                                .map((word) => word[0])
                                .join("")}
                            </span>
                          </td>
                        </>
                      )}
                      <td className="p-1 sm:p-2 border">
                        {difficultyMap[row.difficulty_level]}
                      </td>
                      <td className="p-1 sm:p-2 border">
                        {row.total_attempts}
                      </td>
                      <td className="p-1 sm:p-2 border">
                        {row.total_successes}
                      </td>
                      <td className="p-1 sm:p-2 border">{row.success_rate}%</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StateDashboard;
