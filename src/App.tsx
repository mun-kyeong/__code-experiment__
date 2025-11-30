import { useState } from "react";
import Test2 from "./test-02-transition/test";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Test2 />
    </>
  );
}
