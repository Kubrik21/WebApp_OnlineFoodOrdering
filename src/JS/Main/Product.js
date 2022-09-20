import "../../CSS/Product.css"
import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react';



function Product(props) {
    const { restaurantLogo, restaurantName } = props

    const [restaurants, setRestaurants] = useState([])


    async function getUser() {
     try {
       const {data} = await axios.get('https://localhost:5001/api/restaurant/');
       setRestaurants(data);
     } catch (error) {
       console.error(error);
     }
   }
   
   useEffect(() => {
     getUser();
   }, [])
//


    return (
        <div className="Product">
            <img src={restaurantLogo} alt={restaurantName} className="Product-img"></img>
            <h2 className="Product-description">{restaurantName}</h2>
            <button className="Product-button">
                <Link to={`/restaurant/${restaurantName}`} state={props}>Wybierz</Link>
            </button>

        </div>
    )
}

export { Product }