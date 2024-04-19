import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  useEffect(function () {
    console.log("use effect");
  }, []);

  return (
    <>
      <h2>Hello, {name}</h2>

      <input type="text" onChange={(eve) => setName(eve.target.value)} />

      <br />
      <br />
      <code>#{new Date().getTime()}</code>
    </>
  );
}

export default App;
