import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={HomePage} />
      </Layout>
    </Router>
  );
}


export default App;
