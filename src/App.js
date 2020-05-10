import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form.js";
import Covid19 from "./components/Covid19";

class App extends React.Component {
  //React.Component lives somewhere inside the node modules folder and we are
  // here creating an instance of App

  render() {
    return (
      <div>
        <a1>
          HELLO !
          <Titles />
          <Form />
          <Covid19/>
        </a1>
      </div>
    );
  }
}

export default App;
//we need to have this export method otherwise will get a compilation error
//Attempted import error: './App' does not contain a default export (imported as 'App').
