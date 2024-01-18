import { useState } from "react";
import SearchCity from "./SearchCity";
import Timer from "./Timer";
import Weather from "./Weather";
import './App.css';
function App() {

  const [background, setBackground] = useState("heat");
  return (
    <div className={`App back-${background}`}>
      <SearchCity />
      <Timer />
      <Weather />
    </div>
  );
}

export default App;
