"use client";  // If using App Router

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment Button</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement Button</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
