import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="App">
      <Link to="/" /> Go back Home
    </div>
  );
};

export default NotFoundPage;
