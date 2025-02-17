import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Calender from './components/Calender'
import Jan from './components/months/Jan'
import Feb from './components/months/Feb'
import March from './components/months/March'
import April from './components/months/April'
import May from './components/months/May'
import June from './components/months/June'
import July from './components/months/July'
import Aug from './components/months/Aug'
import Sep from './components/months/Sep'
import Oct from './components/months/Oct'
import Nov from './components/months/Nov'
import Dec from './components/months/Dec'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/Jan',
      element: <><Navbar/><Jan /></>
    },
    {
      path: '/Feb',
      element: <><Navbar/><Feb /></>
    },
    {
      path: '/March',
      element: <><Navbar/><March /></>
    },
    {
      path: '/April',
      element: <><Navbar/><April /></>
    },
    {
      path: '/May',
      element: <><Navbar/><May /></>
    },
    {
      path: '/June',
      element: <><Navbar/><June /></>
    },
    {
      path: '/July',
      element: <><Navbar/><July /></>
    },
    {
      path: '/Aug',
      element: <><Navbar/><Aug /></>
    },
    {
      path: '/Sep',
      element: <><Navbar/><Sep /></>
    },
    {
      path: '/Oct',
      element: <><Navbar/><Oct /></>
    },
    {
      path: '/Nov',
      element: <><Navbar/><Nov /></>
    },
    {
      path: '/Dec',
      element: <><Navbar/><Dec /></>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
      <div class="fixed inset-0 -z-10 h-90 w-full bg-slate-700 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      {/* <Router>
        <Navbar />
      </Router>
      <Calender /> */}
    </>
  )
}

export default App
