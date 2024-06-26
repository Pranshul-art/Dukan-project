import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PayoutGrid } from './components/PayoutGrid'
import { AppTopBar } from './components/AppTopBar'
import { IDComp } from './components/IDComp'
import { TransactionDetails } from './components/TransactionsDetails'
import { PayoutsComp } from './components/PayoutsComp'
import { SideBar } from './components/SideBar'
import { SideBarComp } from './components/SideBarComp'

function App() {
 

  return (
    <div className=" h-screen flex">
      <div className='hidden sm:block     h-screen  overflow-y-auto overflow-x-hidden'><SideBar/></div>
      <div className='w-auto sm:w-3/4 md:w-5/6  overflow-y-auto'><PayoutsComp/></div>
      
      
    </div>
  )
}

export default App
