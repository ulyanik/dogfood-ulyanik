import './App.css'
import React from 'react'
import { Header } from './components/Header/header'
import { Modal } from './components/Modal/Modal'
import { ContextProvider } from './Context'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer/footer'

function App() {

  return (
    <ContextProvider>
      <div className="wrapper">
        <Header/>
        <Outlet/>
        <Footer />
      </div> 
      <Modal/>
    </ContextProvider>
  );
}

export default App;
