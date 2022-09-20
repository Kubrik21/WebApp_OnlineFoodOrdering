import { useEffect, useState } from "react";
import {PayPalButtons} from "@paypal/react-paypal-js"
import { useNavigate } from 'react-router-dom'
import { useBasket,useBasketClear } from "../../BasketContext";
import { useData } from "../../DataContext";
import axios from 'axios'


const PaypalCheckoutButton = (props)=>{

    const navigate = useNavigate()
    const {product}=props;
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const data=useData()
    const basketClear=useBasketClear()
    const basket=useBasket()
   

   
    
    const handleApprove = (orderId) => {
        setPaidFor(true);
      };
      
      if (paidFor) {

        const menu=basket.map(e=>{
          return({
            OrderElementQuantity:e.quantity,
            ProductId:e.id,
            OrderElementValue:e.value
          })
        })
      data.OrdersElements=menu
        
  
      axios.post('https://localhost:5001/api/restaurant/Order', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      });    
        basketClear() 
        navigate(`/thanks`, { replace: true })
      }

      if (error) {
        alert(error);
      }

    return <PayPalButtons 
    style={{
        color:"silver",
        layout:"horizontal",
        height:48,
        tagline:false,
        shape:"pill"
    }}
    createOrder={(data, actions) => {
  return actions.order.create({
    purchase_units: [
      {
        
        description: product.description,
        amount: {
          currency_code: 'PLN',
          value: product.val
        }
      }
    ]
  })
}}
onApprove={async (data, actions) => {
  const order = await actions.order.capture(); 
  console.log("order", order);
  handleApprove(data.orderID);
}}
onError={(err) => {
  setError(err);
  console.error("PayPal Checkout onError", err);
}}
     />
}

export default PaypalCheckoutButton;
 