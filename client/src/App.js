import React from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Fib from "./Fib";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to="/">Fibo</Link>
      <Router>
        <Route exatc path="/" component={Fib} />
        <Route exatc path="/notfound" component={NotFoundPage} />
      </Router>
    </div>
  );
};

export default App;
