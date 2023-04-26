
import ToursStyle from "../Tours.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Tour(props) {

  
    console.log(props);
  
    let getInfo = () => {
      console.log(props.tourId);
      return (
        <>
           

       </>
      );
 
      
    };
  




    return (
      <>
      <div  style={{  display:"flex", flexDirection:"row",justifyContent:'center' }}>
        <Card
          style={{ width: "18rem" }}
          onClick={getInfo}
          
        >
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <h2> </h2>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </>

    );
  }

export default Tour;


