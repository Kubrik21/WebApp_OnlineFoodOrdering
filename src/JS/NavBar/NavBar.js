import "../../CSS/Nav.css"
import { Link } from "react-router-dom";
import {useBasket} from "../../BasketContext"
import {useEffect, useState} from 'react'
import "./BasketEvent"
//import $ from "jquery";



function Nav() {
    const basket = useBasket()
    const [value,setValue]=useState(0)
    
    
useEffect(()=>{
    
    setValue(()=>{
        let temp=0
        basket.forEach(e=>temp=temp+e.value)
        return temp
    })
},[basket])

    const product=basket.map(e=>{
        return(
            
        <div className="product">
            <h4 className="product-name">{e.productName}</h4>
            <div className="product-description">
            <img src={e.logo} alt={e.productName} className="product-logo"></img>
            <p> {e.quantity} szt. x {e.price} zł = {e.value} zł</p>
            </div>
            <hr></hr>
            
        </div>
        
        )
    })

    return (
        <nav className="Nav">
                <div className="Nav-Logo-Name">
                <Link to={`/`}  ><img src="/Logo.png" alt="Logo" className="Nav-logo">
                </img></Link>
                <Link to={`/`}  >
                <h1 className="Nav-motto">On your food</h1>
                </Link>
                </div>
                <div className="Nav-Dropdown" data-dropdown >
                    <button className="Nav-Basket-button" data-dropdown-button><img className="Nav-basket" src="/ICON/Basket.png" alt="basket" data-dropdown-button></img></button>
                    <div className="Nav-Dropdown-Menu" >
                        <h3>Twój koszyk</h3>
                        {product}
                        <h4>Razem: {value} PLN</h4>
                        <Link to={`/order`} ><button className="order-button">Zamów</button></Link>
                    </div>
                </div>
        </nav>
    )
}

export { Nav }

