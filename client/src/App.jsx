import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import Promotion from './pages/Promotion';
import Videopromotion from './pages/Videopromotion';

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/menu' element={ <MenuPage/>} />
    <Route path='/promotion' element={ <Promotion/>} />
    <Route path='/vidiopromotion' element={ <Videopromotion/>} />
    </Routes>

    </>
  )
}

export default App
