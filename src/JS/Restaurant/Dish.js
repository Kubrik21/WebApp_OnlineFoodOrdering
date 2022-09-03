import '../../CSS/Dish.css'
import { useEffect, useState } from 'react'

function Dish(props) {
    const [counts, setCount] = useState([]);


    useEffect(() => {
        let newArr = []
        props.param.Product.forEach(element => {
            const object = {
                name: element.ProductName,
                count: 0
            }
            newArr.push(object)
        }
        );

        console.log(newArr)
        setCount(newArr)
    }, [])



    function add(params) {
        setCount(prev => {
            const ret = prev.map(el => {
                return (params === el.name ? { ...el, count: el.count + 1 } : { ...el })
            }
            )
            return (ret)
        })
    }


    function substract(params) {
        // if (count !== 0) setCount(prev => { return (prev - 1) })
        setCount(prev => {
            const ret = prev.map(el => {
                return (params === el.name && el.count>0 ? { ...el, count: el.count - 1 } : { ...el })
            }
            )
            return (ret)
        })
    }


    const Dishes = (props.param.Product).map(elem => {
        let counter
        counts.forEach(el => {
            // console.log(">", el.name,elem.ProductName)
            if (el.name === elem.ProductName) counter = el.count
        })

        return (
            <div className="Dish">
                <div className="Dish-Left">
                    <img className="Dish-img" src={elem.logo} alt={elem.ProductName}></img>
                    <div className="Dish-info">
                        <h2>{elem.ProductName}</h2>
                        <p>Cena:  {elem.Price}  PLN</p>
                    </div>
                </div>
                <div className="Dish-Counter">
                    <button id="left" onClick={() => substract(elem.ProductName)} >-</button>
                    <p>{counter}</p>
                    <button id='right' onClick={() => add(elem.ProductName)}>+</button>
                </div>
            </div>
        )
    })
    //console.log(props)
    return (
        <div className="Header">
            <h1>{props.param.Category}</h1>
            {Dishes}
        </div>
    )
}
export { Dish }

