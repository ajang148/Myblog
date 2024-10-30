import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbars from './components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom'
import  { Routes, Route} from 'react-router-dom'
import About from './components/About'
import Stories from './components/Stories'
import Resources from './components/Resources'
import PlacesVisited from './components/PlacesVisited'
import Blog from './components/Blog'
import AddStories from './components/AddStories'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path='/' element={<><Home/><Content/></>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/stories' element={<Stories/>} ></Route>
      <Route path='/resources' element={<Resources/>} ></Route>
      <Route path='/visits' element={<PlacesVisited/>} ></Route>
      <Route path='/blog' element={<Blog/>} ></Route>
      <Route path='/addstory' element={<AddStories/>} ></Route>
    </Routes>
 </BrowserRouter>   
    
    <Footer/>
    
    </>
  )
}

export default App
