import { Nav } from '../NavBar/NavBar'
import { Graphic } from "../NavBar/Graphic"
import { Footer } from '../Footer/Footer'
import { useBasket } from '../../BasketContext'
import "../../CSS/Order.css"
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";


function Order() {
    const basket = useBasket()
    const [value,setValue]=useState(0)
    
    
    useEffect(()=>{
        
        setValue(()=>{
            let temp=0
            basket.forEach(e=>temp=temp+e.value)
            return temp
        })
    },[basket])



    
    const orderElement = basket.map(e => {
        return (
            <div className='Order'>
                <div className="Order-left">
                    <img src={e.logo} alt={e.productName} className="orderImg"></img>
                    <div>
                        <h2>{e.productName}</h2>
                        <p className="OrderProductSingleValue">Cena: {e.price} zł</p>
                    </div>
                </div>
                <div className="Order-right"><h3 className="OrderRightH3">Ilość: {e.quantity} szt.</h3><p className="OrderProductValue">{e.quantity*e.price} zł</p></div>

            </div>
        )
    })



    return (<div>
        <Nav />
        <Graphic />
        <h1>Krok 1: Podsumowanie zamówienia</h1>
        {orderElement}
        <div className="OrderToAdress">
            <p><strong>Do zapłaty:</strong> {value} zł</p>
            <Link to={`/checkout`} state={true}><button className="Order-button">Przejdź do realizacji</button></Link>
        </div>
        <Footer />
    </div>)
}
export { Order }