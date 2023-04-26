import logo from './logo.svg';
import './App.css';


import Home from './components/home/Home';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourDetails from './components/TourDetails/TourDetails';
import Switch from 'react-router-dom'

function App() {
  return (
    <>
   {/* <Home>
   </Home> */}

   <Routes>
 
    <Route exact path="/" element = {<Home></Home>} ></Route>
    <Route path="/city/:tourId" element = {<TourDetails></TourDetails>} ></Route>
    
   </Routes>
    </>
  )
}

export default App;
