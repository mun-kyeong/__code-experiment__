import { useState } from "react";
import { Test01 } from "./test-01-label/test";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Test01 />
    </>
  );
}
