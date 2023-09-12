import React, { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { apiConfiguration } from "./services/api";

function App() {
  useEffect(() => {
    apiConfiguration()
    fetch("/movies")
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "json");
      })
    fetch("/movies", {
      method: "post",
      body: {
        id: 6,
        title: 'glenn'
      }
    })
      .then(res => res.json())
      .then((json) => {
        console.log(json, "json");
      })
  }, []);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
