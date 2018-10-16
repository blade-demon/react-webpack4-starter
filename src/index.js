// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import "./styles/style.sass";

// ReactDOM.render(<App />, document.getElementById("app"));

const sleep = async timeOut =>
  new Promise(resolve => {
    setTimeout(resolve, timeOut);
  });

(async () => {
  for (var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(new Date(), i);
  }
  await sleep(1000);
  console.log(new Date(), a);
})();
