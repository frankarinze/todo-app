import React from "react";
import Home from "./Home/Home"
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import AddTodo from "./components/AddTodo"
import EditTodo from "./components/EditTodo"


// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
        <div className="app-wrapper">
        <div className="main">
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddTodo} />
            <Route path="/edit/:id" component={EditTodo} />
          </Switch>
        </Router>
      </GlobalProvider>
        </div>
      </div>
    </div>
  )
}


export default App;