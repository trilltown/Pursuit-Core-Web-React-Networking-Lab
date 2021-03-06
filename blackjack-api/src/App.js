import React from "react";
import "./App.css";
import Cards from "./Cards";
import CardSelector from "./CardSelector";
import Header from "./Header";
import Menu from "./menu";

class App extends React.Component {
  state = { cards: "" };

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Cards />
        <CardSelector />
      </div>
    );
  }
}

export default App;
