import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(1); //can explicitly define type for state or let TS infer. Can also make it a union type if we're waiting on data (number | null)

  return (
    <>
      <h3>Count is {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </>
  );
};

export default Counter;
