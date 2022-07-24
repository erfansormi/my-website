import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

//context
import DataContextProvider from './Context/DataContextProvider'

//components
import Home from './Components/Home/Home'

const App = () => {

  return (
    <DataContextProvider>
      <Home />
    </DataContextProvider>
  )
}

export default App