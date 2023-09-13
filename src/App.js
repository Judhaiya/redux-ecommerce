import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes";

function App() {

  return (
   <div className="App">
     <AppRoutes/>
    </div>
 
  );
}

export default App;
