import '../../CSS/App.css';
import { Nav } from '../NavBar/NavBar'
import { Graphic } from '../NavBar/Graphic'
import { useLocation } from 'react-router-dom'
import { Nap } from './Nap'
import {Footer} from '../Footer/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react';


function ChoosenRestaurant() {
  const location = useLocation()

  const [products, setProducts] = useState([])
  //
  
      async function getProduct() {
       try {
         const {data} = await axios.get('https://localhost:5001/api/restaurant/',{
          params: {
            id: location.state.id
          }
        });
         setProducts(data);
       } catch (error) {
         console.error(error);
       }
     }
     
     useEffect(() => {
       getProduct();   
     }, [])

  
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Graphic restaurantLogo={products.restaurantLogo} />
      <Nap {...products} />
      <Footer/>
    </div>
  );
}

export { ChoosenRestaurant };
