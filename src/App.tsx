import { useCount } from "../src/hooks/useCount";
import "./styles.css";

export default function App() {
  const { count, onClickCountUp, onClickCountDown } = useCount();

  return (
    <div className="App">
      {count}
      <br />
      <br />
      <button onClick={onClickCountUp}>CountUp</button>
      <br />
      <br />
      <button onClick={onClickCountDown}>CountDown</button>
    </div>
  );
}
