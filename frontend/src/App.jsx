import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const [data, setData] = useState({})

  useEffect(() => {
    console.log("working");

    axios.get("/api/data").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <h1>Welcome to fullstack app</h1>
      {/* <p>Jokes: {data.length}</p>
     {
      data.map((data)=>{
            data.login
      })
     } */}
    </>
  );
}

export default App;
