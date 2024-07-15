import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Feed_insta from './components/Feed_insta'
import Box_cantian from './components/Box_cantian'
import Home from './pages/Home'
import Sign from './pages/Sign'
import Login from './pages/Login'
import Error_404 from './pages/Error_404'
import Blog_list from './pages/Blog_list'
import Wishlist from './pages/Wishlist'
import Contect from './pages/Contect'




                                                                                                                 

function App() {
  
  return (
    <>
     {/* <Sign/> */}
     {/* <Login/> */}
     {/* <Error_404/> */}
     {/* <Blog_list/> */}
	 {/* <Wishlist/> */}
      {/* <Navbar/> */}
      {/* <Footer/> */}
      {/* <Feed_insta/> */}
      {/* <Box_cantian/> */}
      <Home/>
      {/* <Contect/> */}
  
	
     
    </>
  )
}

export default App

