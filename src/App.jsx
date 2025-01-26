import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './layouts/Loader'
import MainContent from './layouts/MainContent'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'
import ControlSideBar from './layouts/ControlSideBar'
import Header from './layouts/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import Prescription from './pages/Prescription'


function App() {
  const [count, setCount] = useState(0)

  return (

    
    <>
    {/* 
 Loader
 Header
 sidebar
 Dashboard /Main Page Content
 Footer
 Control SideBar
 */}
    {/* <Loader /> */}
    
  
    <BrowserRouter>
  
    <Routes>
       <Route element={<MainContent />}>   
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/prescription" element={<Prescription />} />

       </Route>
     
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
