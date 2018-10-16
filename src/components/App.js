import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my starter app</h1>
        <button
          onClick={() => {
            console.log("异步加载代码");
            import("lodash/add")(2, 3).then(function(data) {
              console.log(data);
            });
          }}
        >
          加载异步代码
        </button>
      </div>
    );
  }
}

export default App;
