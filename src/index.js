// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import "./styles/style.sass";

// import("./another-module.js").then(data => {
//   console.log(data);
// });

// ReactDOM.render(<App />, document.getElementById("app"));
// import { add, uniq } from "lodash-es";
const sleep = async timeOut =>
  new Promise(resolve => {
    setTimeout(resolve, timeOut);
  });

(async () => {
  for (var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(new Date(), i);
  }

  // console.log(add(3, 3));
  // console.log(uniq([1, 2, 3, 1]));
})();
