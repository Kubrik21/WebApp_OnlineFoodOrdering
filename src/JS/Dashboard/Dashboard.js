import '../../CSS/App.css';
import { Nav } from '../NavBar/NavBar'
import { Graphic } from '../NavBar/Graphic'
import { useLocation } from 'react-router-dom'
import {Footer} from '../Footer/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react';
import "../../CSS/Dashboard.css"


function Dashboard() {

  const location = useLocation()

  const [products, setProducts] = useState([])
  
  
      async function getProduct() {
       try {
         const {data} = await axios.get('https://localhost:5001/api/restaurant/zarzadzanie',{});
         setProducts(data);
       } catch (error) {
         console.error(error);
       }
     }
     
     useEffect(() => {
       getProduct();   
     }, [])

     
     
  console.log(products)
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Graphic />
      <h1>Zamówienia klientów</h1>
      <div className="Fields">

      

    <table cellPadding="0" cellSpacing="0">
    <thead>
        <tr >
            <th>Nr. Zamówienia</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Mail</th>
            <th>Adres</th>
            <th>Adres2</th>
            <th>Kod pocztowy</th>
            <th>Miasto</th>
        </tr>
    </thead>

    <tbody>
        {
           products.map(e=>
            <tr>
                <td>{e.orderId}</td>
                <td>{e.orderName}</td>
                <td>{e.orderSurname}</td>
                <td>{e.orderMail}</td>
                <td>{e.orderAdres}</td>
                <td>{e.orderAdresSec}</td>
                <td>{e.orderPostCode}</td>
                <td>{e.orderCity}</td>
            </tr>
        )
        }
    </tbody>
</table>

      </div>
      <Footer/>
    </div>
  );
}

export { Dashboard };
