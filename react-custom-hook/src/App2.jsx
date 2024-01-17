import useCounter from "./hooks/useCounter";

const CountController = ({ count, handleInc, handleDec }) => {
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

const App = () => {
  const count1 = useCounter({ lowerBound: 1, upperBound: 15 });
  const count2 = useCounter({ lowerBound: 5, upperBound: 9 });
  const count3 = useCounter({ lowerBound: 2, upperBound: 12 });

  return (
    <div>
      <h3>App</h3>
      <CountController
        count={count1.counter}
        handleInc={count1.handleInc}
        handleDec={count1.handleDec}
      />
      <CountController
        count={count2.counter}
        handleInc={count2.handleInc}
        handleDec={count2.handleDec}
      />
      <CountController
        count={count3.counter}
        handleInc={count3.handleInc}
        handleDec={count3.handleDec}
      />
    </div>
  );
};
export default App;
