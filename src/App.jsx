import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/layout/Header'
import Layout from './component/layout/Layout'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './component/HomePage/CreatePost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
         <Route path = '/' element ={<HomePage/>}/>
         {/* <Route path = '/login' element ={<LoginPage/>}/> */}
         <Route path = '/post' element ={<PostPage/>}/>
         <Route path = '/createpost' element ={<CreatePost/>}/>


      </Routes>
    </>
  )
}

export default App
