import { useSelector, useDispatch } from "react-redux";
import { reset, incrementByAmount, decrementByAmount } from "./counterSlice";
import { useState } from "react";

function Counter() {
  const counter = useSelector((store) => store.counter.count);
  const [userInput, setUserInput] = useState(0);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByNumber = () => {
    dispatch(incrementByAmount(userInput));
  };

  const handleDecrementByNumber = () => {
    dispatch(decrementByAmount(userInput));
  };
  return (
    <div>
      <p> Count: {counter}</p>
      <button onClick={handleIncrementByNumber}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrementByNumber}>-</button>
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setUserInput(Number(e.target.value))}
        placeholder="Please add the increment value"
      />
    </div>
  );
}

export default Counter;
