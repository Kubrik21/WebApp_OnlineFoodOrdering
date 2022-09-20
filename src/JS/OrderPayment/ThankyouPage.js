import { Nav } from '../NavBar/NavBar'
import { Graphic } from "../NavBar/Graphic"
import { Footer } from '../Footer/Footer'
import "../../CSS/Order.css"
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import {useDataClear} from "../../DataContext"
import {useBasket,useBasketAdd} from "../../BasketContext"
    

function Thanks() {
 const basket = useBasket()
    
    //console.log(basket)
    useEffect(()=>{console.log("tu")},[])
    return (<div>
                <Nav />
                <Graphic />
                <h1>Dziękujemy za zaufanie!</h1>
                <img className="Bike" src="./ICON/rajdowiec-bw.gif" alt="rowerzysta"></img>
                <h2>Twoje zamówienie jest w drodze</h2>
                <Link to={`/`}  ><button className="Order-button">Powrót do głównej</button></Link>            
                <Footer />
            </div >)
}

export { Thanks }
