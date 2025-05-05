// import React, { useState, useContext, createContext } from 'react';

// // Create a context
// export const SharedContext = createContext();

// // SharedProvider Component
// const SharedProvider = ({ children }) => {
//   const [difficulty, setDifficulty] = useState(1);
//   const [inputRange, setInputRange] = useState({
//     min:1,
//     max:9
//   })


//   return (
//     <SharedContext.Provider value={{ difficulty,setDifficulty, inputRange, setInputRange }}>
//       {children}
//     </SharedContext.Provider>
//   );
// };


// export default SharedProvider;