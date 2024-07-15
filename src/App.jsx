import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './component/HomePage/CreatePost'
import SignInSignUp from './pages/SignInSignUp'
import AuthCallback from './hooks/AuthCallback'
import CreatePostPage from './pages/CreatePostPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
         <Route path = '/' element ={<HomePage/>}/>
         <Route path = '/login' element ={<SignInSignUp/>}/>
         <Route path="/auth/callback" element={<AuthCallback />} />
         <Route path = '/post' element ={<PostPage/>}/>
         <Route path = '/createpost' element ={<CreatePostPage/>}/>
      </Routes>
    </>
  )
}

export default App
