import '../../CSS/Dish.css'
import { useState } from 'react'
import {useBasket,useBasketAdd} from "../../BasketContext"


function Dish(props) {
    const [counts, setCount] = useState([]);
    const basket = useBasket()
    const basketAdd = useBasketAdd()
    
    let newArr = []

    if (counts.length === 0 && props.menu !== undefined && newArr.length === 0) {
        props.menu.forEach(element => {
            element.menu.forEach(p => {
                const object = {
                    name: p.productId,
                    count: 0
                }
                newArr.push(object)
            })
        }
        )
        setCount(newArr)
    }


    function add(params) {
        setCount(prev => {
            const ret = prev.map(el => {
                return (params === el.name && el.count < 10 ? { ...el, count: el.count + 1 } : { ...el })
            }
            )
            return (ret)
        })
    }


    function substract(params) {
        setCount(prev => {
            const ret = prev.map(el => {
                return (params === el.name && el.count > 0 ? { ...el, count: el.count - 1 } : { ...el })
            })
            return (ret)
        })
    }

    function counterToZero(params){
        setCount(prev => {
            const ret = prev.map(el => {
                return (params === el.name  ? { ...el, count: 0 } : { ...el })
            })
            return (ret)
        })
    }


    let Result

    if (props.menu !== undefined) {


        Result = props.menu.map(e => {

            const dish = e.menu.map(p => {
                let counter
                counts.forEach(el => {
                    if (el.name === p.productId) counter = el.count
                })


                return (
                    <div key={p.productId} className="Dish">
                        <div className="Dish-Left">
                            <img className="Dish-img" src={p.productLogo} alt={p.productName}></img>
                            <div className="Dish-info">
                                <h2>{p.productName}</h2>
                                <p>Cena:  {p.productPrice}  PLN</p>
                            </div>
                        </div>
                        <div className="Dish-choosing-products">
                            <div className="Dish-choosing-product-counter-and-value">
                                <div className="Dish-Counter">
                                    <button id="left" onClick={() => substract(p.productId)} >-</button>
                                    <p>{counter}</p>
                                    <button id='right' onClick={() => add(p.productId)}>+</button>
                                </div>
                                <div className="Value-of-product">
                                    <p><strong>Wartość:</strong><br /> {parseFloat(p.productPrice*counter).toFixed(2)} PLN</p>
                                </div>
                            </div>
                            <img alt="add-to-bracket" src="/ICON/add-to-basket.png" className="Dish-choosing-products-add-button" onClick={()=>{basketAdd(p,counter); counterToZero(p.productId)} }></img>
                        </div>
                    </div>

                )
            }
            )

            return(
                <div>
                    <h2>{e.category}</h2>
                    {dish}
                </div>)
        })
    }


    return (
        <div className="Header">
            {Result !== undefined ? Result : <h3>Loading</h3>}
        </div>
    )

}
export { Dish }

