import { useState, createContext, useContext } from "react";
export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [current, setCurrent] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [state, setState] = useState([]);

  const contextValue = {
    loading,
    setLoading,
    hidden,
    setHidden,
    current,
    setCurrent,
    currentIndex,
    setCurrentIndex,
    timerDays,
    setTimerDays,
    timerHours,
    setTimerHours,
    timerMinutes,
    setTimerMinutes,
    timerSeconds,
    setTimerSeconds,
    isValid,
    setIsValid,
    email,
    setEmail,
    lastname,
    setLastname,
    firstname,
    setFirstname,
    state,
    setState,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
