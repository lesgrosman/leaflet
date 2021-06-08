import React from "react";
import "./App.css";

import Map from "./components/Map/Map";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <main>
        <Search /> 
        <Map />
      </main>
    </>
  );
}

export default App;
