import React, { Component } from "react";
import CardPage from "./pages/CardPage";

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="col-6 justify-content-center my-5">
            <CardPage />
          </div>
      </div>
    );
  }
}

export default App;
