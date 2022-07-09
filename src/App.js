import React from 'react'

//context
import DataContextProvider from './Context/DataContextProvider'

//components
import Home from './Components/Home/Home'

const App = () => {

  return (
    <DataContextProvider  >
      <Home />
    </DataContextProvider>
  )
}

export default App