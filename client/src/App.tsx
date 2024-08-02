import { useState } from "react";
import "./App.css";
import * as React from "react";
import Base from "./components/Base/Base";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Base />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
