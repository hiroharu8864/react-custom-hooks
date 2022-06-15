import { useCount } from "../src/hooks/useCount";

import { PrimaryButton } from "../src/components/atoms/button/PrimaryButton";
import "./styles.css";

export default function App() {
  const { count, onClickCountUp, onClickCountDown } = useCount();

  return (
    <div className="App">
      {count}
      <br />
      <br />
      <PrimaryButton onClick={onClickCountUp}>CountUp</PrimaryButton>
      <br />
      <br />
      <PrimaryButton onClick={onClickCountDown}>CountDown</PrimaryButton>
    </div>
  );
}
