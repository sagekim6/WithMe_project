import Timer from "./components/Timer";
import "./app.css";
import { useState } from "react";

function App() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  return (
    <div className="App">
      <Timer min={min} sec={sec} setMin={setMin} setSec={setSec} />
    </div>
  );
}

export default App;
