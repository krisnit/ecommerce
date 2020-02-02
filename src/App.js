import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Aux from "./hoc/Auxillary";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Aux>
        <Layout />
      </Aux>
    </BrowserRouter>
  );
}

export default App;
