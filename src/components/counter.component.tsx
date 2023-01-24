import { useState } from "react";

export const Counter: React.FC<{ initialValue: number }> = ({
  initialValue,
}) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h3>{count}</h3>
      <div aria-label="button-wrapper">
        <button onClick={() => setCount((prev) => prev - 1)}>Less 1</button>
        <button onClick={() => setCount((prev) => prev + 1)}>Add 1</button>
      </div>
    </div>
  );
};
