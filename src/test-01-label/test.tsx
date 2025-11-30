import { useState } from "react";
/**
 *
 * label 태그가 input을 감싸고 있는 경우 htmlFor 속성은 필요하지 않습니다.
 */
export function Test01() {
  const [checked, setChecked] = useState(0);

  return (
    <>
      <label>
        <p>제주도 및 도서 산간 지역</p>
        <input
          type="checkbox"
          checked={checked === 1}
          onChange={() => setChecked((prev) => (prev === 0 ? 1 : 0))}
        />
      </label>
    </>
  );
}
