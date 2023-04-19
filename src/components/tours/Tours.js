// Tours component:

// Import the data.json file in your app
// Map the data that you have from the JSON file.
// Each time you map the data it returns and renders a <div>, displaying data for every tour separated by a line manner.
// Your <div> should only contain the name and an image for each tour.

import ToursStyle from "./Tours.css"


function Tours(props){

    console.log(props)
    return(
    <>
   {props.data.map(tour =>{

return(
<div key={tour.id}>
    <h3>{tour.name}</h3>
<img src={tour.image} alt=""
></img><hr></hr>

</div>




)



   }
    
    
    )}
    </>


    )

}



export default Tours;