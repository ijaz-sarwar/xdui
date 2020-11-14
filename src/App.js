import React from "react";

import "./App.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import Footertop from "./Footertop";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Footertop />
      <Footer />
    </div>
  );
}

export default App;
