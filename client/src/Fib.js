import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");
  console.log("valuesvalues", values);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index,
    });
    setIndex("");
  };

  const fetchValues = async () => {
    const values = await axios.get("api/values/current");
    setValues(values.data);
  };

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    setIndex(seenIndexes.data);
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter your Index</label>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {seenIndexes.map(({ number }) => number).join(", ")}
      <h3>Calculated Values: </h3>
      {values.map((el) => {
        console.log("el", el);

        return <div>foo</div>;
      })}
    </div>
  );
};

export default Fib;
