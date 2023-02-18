import React, { useEffect } from 'react'
import { Home,CreatePost } from './pages'
import { BrowserRouter, Router, Link, Route,Routes } from 'react-router-dom'
import { NavBar } from './components'


const App = () => {


  return (
    <>
    <BrowserRouter >
      <NavBar/>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f1fe] dark:bg-navy/60  min-h-[calc(100vh-73px)]'>
      <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='/create-post' element={<CreatePost/>} />

      </Routes>
    </main>

    </BrowserRouter>
    </>

  )
}

export default App