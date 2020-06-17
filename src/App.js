import React, { Component } from "react";
import "./App.css";
import Form from "./Form/Form.js"


function App () {

  const onSubmit = (fields) => {
    console.log("App comp got:", fields);
  }

  return (
    <div className="App">
    <Form onSubmit={fields => this.onSubmit(fields)} />
  </div>
  );
};

export default App;
