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

export const getUserStates = async () => {
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/users/states/`
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Fetch failed:", res.status, errorText);
    throw new Error("Failed to fetch data");
  }

  return res.json(); // only if response is ok
};

export const userLogin = async ({ email, password }) => {
  const credentials = { email, password };
  console.log("credentisla in calls", credentials);
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/users/login/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );

  // Check if the response is successful
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "An error occurred");
  }

  // If successful, get the token from the response
  const data = await response.json();
  return data;
};
