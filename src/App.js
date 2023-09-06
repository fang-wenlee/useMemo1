import "./styles.css";
import { memo, useState, useRef } from "react";
const Parent = (props) => {
  const [ticks, setTicks] = useState(0);
  const tableRef = useRef();
  tableRef.current = ticks;
  const [clicks, setClicks] = useState(0);

  setTimeout(() => setTicks(ticks + 1), 500);
  return (
    <div>
      <h2>
        Parent Rendered at tick {tableRef.current} with clicks {clicks}.
      </h2>
      <button onClick={() => setClicks(clicks + 1)}>Add extra click</button>
      <Child tableRef={tableRef} clicks={clicks} />
      <MemoChild tableRef={tableRef} clicks={clicks} />
    </div>
  );
};

const Child = ({ tableRef, clicks }) => (
  <p>
    Child Rendered at tick {tableRef.current} with clicks {clicks}.
  </p>
);

const MemoChild = memo(Child);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Parent />
    </div>
  );
}
