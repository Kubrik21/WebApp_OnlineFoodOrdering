import { Nav } from '../NavBar/NavBar'
import { Graphic } from "../NavBar/Graphic"
import { Footer } from '../Footer/Footer'
import { useBasket } from '../../BasketContext'
import "../../CSS/Order.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useDataAdd } from '../../DataContext'
import { useNavigate } from 'react-router-dom'



function OrderData() {
    const orderDataAdd=useDataAdd()
    const navigate = useNavigate()
    function OnHandler(event) {
        event.preventDefault()
        orderDataAdd(orderData)
        navigate(`/payment`, { replace: true })
    }

    const [orderData, setOrderData] = useState({
        imie: "",
        nazwisko: "",
        mail: "",
        adres: "",
        adres2: "",
        postcode: "",
        postcodeCity: ""
    })

    function handleChange(event) {
        setOrderData(prev => {
            console.log(">", event.target.value.length)
            return { ...prev, [event.target.name]: event.target.value }

        })

        console.log(event.target.value);
        console.log(orderData)
    }



    return (<div>
        <Nav />
        <Graphic />
        <h1>Krok 2: Dane do dostawy</h1>
        <form className="DataForm"onSubmit={OnHandler}>

            <div className="Form">
                <div>
                    <p>Dane kontaktowe</p>
                    <input type="text" placeholder="Imie" onChange={handleChange} name="imie" required />
                    <input type="text" placeholder="Nazwisko" onChange={handleChange} name="nazwisko" required />
                    <input type="text" placeholder="Mail" onChange={handleChange} name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                    required />
                </div>
                <div>
                    <p>Dane do wysyłki</p>
                    <input type="text" placeholder="Adres" onChange={handleChange} name="adres" required />
                    <input type="text" placeholder="Adres(Opcjonalnie)" onChange={handleChange} name="adres2" />
                    <p>Kod pocztowy</p>
                    <input type="text" placeholder="_ _ - _ _ _" pattern="[0-9]+[-]+[0-9]{3,3}$" onChange={handleChange}
                     minLength="6" maxLength="6" name="postcode" required />
                    <input type="text" placeholder="Miasto" onChange={handleChange} name="postcodeCity" required />
                </div>
            </div>
            <input type="submit" className="Order-button" value="Przejdź do płatności" />
        </form>
        <Footer />
    </div>)
}

export { OrderData }