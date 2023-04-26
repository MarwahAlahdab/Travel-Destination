import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DataJson from "../../data/db.json";
import { useState } from 'react';
import Header from '../header/Header';

function TourDetails() {

    const { tourId } = useParams();

//state 
const [showMore, setShowMore] = useState(false);


    function getTourInfo(id) {
        const matchingTours = DataJson.filter(e => e.id === id);
        return matchingTours[0];
    }

    const handleShowMore = () => {
        setShowMore(true);
    }



    const selectedItem = getTourInfo(tourId);

    
 return(
    <>
    <Header ></Header>
   { console.log(tourId)}
   
   <Card
          style={{ width: "25rem" }}
        
        >
        
          <Card.Img variant="top" src={selectedItem.image} />
          <Card.Body>
            <Card.Title><h2>This city name is {selectedItem.name}</h2></Card.Title>
            <Card.Text>
            <h4>Price = {selectedItem.price}</h4>
            {showMore ? selectedItem.info : `${selectedItem.info.slice(0, selectedItem.info.indexOf('.', selectedItem.info.indexOf('.') + 1))}...`}
           
  
            </Card.Text>
            { !showMore && <Button onClick={handleShowMore}>Show More</Button> }
  
           
          </Card.Body>
        </Card>

    </>
 )


}

export default TourDetails;


