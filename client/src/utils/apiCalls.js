export const getOperations = async () => {
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/users/operation/`
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Fetch failed:", res.status, errorText);
    throw new Error("Failed to fetch data");
  }

  return res.json(); // only if response is ok
};

export const getUserStates = async (user_id) => {
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/states/${user_id}/`
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Fetch failed:", res.status, errorText);
    throw new Error("Failed to fetch user states");
  }

  return res.json();
};
