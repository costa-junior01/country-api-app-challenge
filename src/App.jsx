import React, { StrictMode } from 'react'
import './App.css'
import Header from './components/Header'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {

  return (
    <React.StrictMode>
    <Header />
    <Filter />
    <Countries />
       
    </React.StrictMode>
  )
}

export default App
