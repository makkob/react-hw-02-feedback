import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import "./base.css";
// ReactDom.render(<App />, document.querySelector("#root"));

// const container = document.getElementById("root");//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

let countApp = new App();
countApp.positiveFeedback();

countApp.countPositiveFeedbackPercentage();
countApp.test();
