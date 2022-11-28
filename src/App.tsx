import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonAppBar } from "./__npm/Header/Header";
import { SideBar } from "./__npm/NavigationSideBar/SideBar/SideBar";
import { headerData, sidebarData } from "./mockedData";

function App() {
  return (
    <div className="App">
      <ButtonAppBar {...headerData} />
      <SideBar {...sidebarData} />
    </div>
  );
}

export default App;
