import React from 'react'
import {Route,Routes} from  'react-router-dom'
import Dashboard from './Components/Dashboard'
import Saloon from './Components/Saloon'
import Explore from './Components/Explore'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='Saloon' element={<Saloon/>}/>
        <Route path='Explore' element={<Explore/>}/>
      </Routes>
    </div>
  )
}

export default App
