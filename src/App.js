import React from 'react'

/* import Contact from './Pages/Contact' */
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import{BrowserRouter, Routes , Route} from 'react-router-dom'
/* import Projects from './Pages/Projects' */
function App() {
  return (
  <div>
    <Header/>
      <BrowserRouter>
    {  <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/about' element ={<About/>}/>
      <Route path = '/project' element ={<Project/>}/>
      <Route path = '/contact' element ={<Contact/>}/>

     {/*  <Route path = '/projects' element ={<Projects/>}/>  */}
    </Routes> }
    </BrowserRouter>
    <Footer/>

  </div>
  )
}

export default App