// Home component:

// Render Header component.
// Render Tours component.
// Render Footer component.
import DataJson from "../../data/db.json";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import Tour from '../tours/Tour/Tour';

function Home(){

    
    return(
    <>


<Header></Header>

<Tours data={DataJson}></Tours>
{/* <Tour data={DataJson}></Tour> */}
<Footer></Footer>
    </>


    )

}



export default Home;