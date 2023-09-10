import { useEffect } from "react";
import { fetch } from "./test/aa";

function App() {
  useEffect(() => {
    fetch("/", {
      mode: "no-cors",
    }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <h1> Hello vite </h1>
    </>
  );
}

export default App;
