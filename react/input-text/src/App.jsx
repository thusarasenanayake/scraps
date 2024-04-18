import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <h2>Hello, {name}</h2>

      <input type="text" onChange={(eve) => setName(eve.target.value)} />
    </>
  );
}

export default App;
