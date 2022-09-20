import { Nav } from '../NavBar/NavBar'
import { Graphic } from "../NavBar/Graphic"
import { Footer } from '../Footer/Footer'
import { useBasket } from '../../BasketContext'
import "../../CSS/Order.css"
import { useState, useEffect } from "react"
import { useData } from '../../DataContext'
import PaypalCheckoutButton from "./PayPalCheckoutButton"



function Payment() {

    const [value, setValue] = useState(0)
    const data = useData()
    const order = useBasket()

    useEffect(() => {

        setValue(() => {
            let temp = 0
            order.forEach(e => temp = temp + e.value)
            return temp
        })
    }, [order])


   
    return (<div>
                <Nav />
                <Graphic />
                <h1>Krok 3: Płatność</h1>
                <div className="ValueToPay"><h3>Do zapłaty: </h3><p>{value} zł.</p></div>
                {value && <div className="paypal-button-container">
                    <PaypalCheckoutButton product={{
                    description:"OnYourFoot",
                    val: value.toString() }} />
                </div>}
                <Footer />
            </div >)
}

export { Payment }
