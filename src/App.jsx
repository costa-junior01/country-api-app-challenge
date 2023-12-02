import React from "react"
import "./App.css"
import Header from "./components/Header"
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {

  return (
    <>
        {/* <Header/> */}
        <Filter/>
        <Countries/>
    </>
  )
}

export default App
