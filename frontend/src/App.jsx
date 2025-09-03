import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("working");

    axios.get("/api/data").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  });

  return (
    <>
      <h1>Welcome to fullstack app</h1>
      <p>Data: {data.login}</p>
    </>
  );
}

export default App;
