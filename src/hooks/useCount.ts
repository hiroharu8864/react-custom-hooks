import { useCallback, useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  const onClickCountUp = useCallback(() => setCount(count + 1), [
    count,
    setCount
  ]);
  const onClickCountDown = useCallback(() => setCount(count - 1), [
    count,
    setCount
  ]);

  return { count, setCount, onClickCountUp, onClickCountDown };
};
