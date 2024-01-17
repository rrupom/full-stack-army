import { useState } from "react";

const useCounter = ({ lowerBound = 0, upperBound = 10 }) => {
  const [counter, setCounter] = useState(lowerBound);

  const handleInc = () => {
    if (counter < upperBound) {
      setCounter(counter + 1);
    }
  };

  const handleDec = () => {
    if (counter > lowerBound) {
      setCounter(counter - 1);
    }
  };

  return { counter, handleInc, handleDec, lowerBound, upperBound };
};

export default useCounter;
