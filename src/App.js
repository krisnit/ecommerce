import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Aux from "./hoc/Auxillary";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Aux>
        <Header />
        <Layout />
      </Aux>
    </BrowserRouter>
  );
}

export default App;
