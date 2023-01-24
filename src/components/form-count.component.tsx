import { useState } from "react";

export const FormCounter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <>
      <h1>{count}</h1>
      <input
        type="number"
        name="amount"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setCount(parseInt(value))}>Set count</button>
    </>
  );
};
