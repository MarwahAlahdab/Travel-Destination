// Tours component:

// Import the data.json file in your app
// Map the data that you have from the JSON file.
// Each time you map the data it returns and renders a <div>, displaying data for every tour separated by a line manner.
// Your <div> should only contain the name and an image for each tour.

import ToursStyle from "./Tours.css"
import Tour from "./Tour/Tour.js"
import {  Link } from 'react-router-dom';
import TourDetails from '../TourDetails/TourDetails';


function Tours(props){

    console.log(props)

return(
    <>

    
   {props.data.map(tour =>{

return(


 <Link to={`/city/${tour.id}`}
 >
 <Tour 
 tour={tour}
   key={tour.id}
   name={tour.name}
   image={tour.image}
   tourId={tour.id} // pass the Id as a props
 />
</Link>

)



   }
    
    
    )}
    </>


    )



}



export default Tours;










