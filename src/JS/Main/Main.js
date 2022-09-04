
import '../../CSS/App.css';
import { Nav } from '../NavBar/NavBar'
import { Product } from './Product'
import { Graphic } from '../NavBar/Graphic'
import { Motto } from './Motto'
import { Footer } from '../Footer/Footer'
import { ThreeSteps } from '../Main/ThreeSteps'
import axios from 'axios'
import { useEffect, useState } from 'react';

function Main() {
  const [restaurants, setRestaurants] = useState([])


 async function getUser() {
  try {
    const {data} = await axios.get('https://localhost:5001/api/restaurant/');
    setRestaurants(data);
  //  console.log(data)
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  getUser();
}, [])



  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <Motto />
      <Graphic />
      <ThreeSteps />
      <div className="List-of-restaurants">
        {restaurants.map(restaurant => <Product key={restaurant.id} {...restaurant} />)}
      </div>
      <Footer />
    </div>
  );
}

export { Main };
