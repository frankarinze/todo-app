import React from "react";
import TaskListContextProvider from "./context/TaskListContext";

import Home from "./Home/Home"

import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <Home />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;