import { useContext, createContext, useState } from "react";
const ScoreContext = createContext(undefined);
export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
export const useScore = () => useContext(ScoreContext);
