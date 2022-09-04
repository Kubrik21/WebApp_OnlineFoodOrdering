import '../../CSS/Dish.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


function Dish(props) {

    const [products, setProducts] = useState([])
    //
    
    //     async function getProduct() {
    //      try {
    //        const {data} = await axios.get('https://localhost:5001/api/restaurant/',{
    //         params: {
    //           id: location.state.id
    //         }
    //       });
    //        setProducts(data);
    //      } catch (error) {
    //        console.error(error);
    //      }
    //    }
       
    //    useEffect(() => {
    //      getProduct();   
    //    }, [])


    // const [counts, setCount] = useState([]);


    // useEffect(() => {
    //     let newArr = []
    //     props.param.Product.forEach(element => {
    //         const object = {
    //             name: element.ProductName,
    //             count: 0
    //         }
    //         newArr.push(object)
    //     }
    //     );
    //     console.log(newArr)
    //     setCount(newArr)
    // }, [])



    // function add(params) {
    //     setCount(prev => {
    //         const ret = prev.map(el => {
    //             return (params === el.name && el.count<10 ? { ...el, count: el.count + 1 } : { ...el })
    //         }
    //         )
    //         return (ret)
    //     })
    // }


    // function substract(params) {
    //     setCount(prev => {
    //         const ret = prev.map(el => {
    //             return (params === el.name && el.count > 0 ? { ...el, count: el.count - 1 } : { ...el })
    //         }
    //         )
    //         return (ret)
    //     })
    // }


    // const Dishes = (props.param.Product).map(elem => {
    //     let counter
    //     counts.forEach(el => {
    //          console.log(">", elem)
    //         if (el.name === elem.ProductName) counter = el.count
    //     })

    //     return (
    //         <div className="Dish">
    //             <div className="Dish-Left">
    //                 <img className="Dish-img" src={elem.logo} alt={elem.ProductName}></img>
    //                 <div className="Dish-info">
    //                     <h2>{elem.ProductName}</h2>
    //                     <p>Cena:  {elem.Price}  PLN</p>
    //                 </div>
    //             </div>
    //             <div className="Dish-choosing-products">
    //                 <div className="Dish-choosing-product-counter-and-value">
    //                     <div className="Dish-Counter">
    //                         <button id="left" onClick={() => substract(elem.ProductName)} >-</button>
    //                         <p>{counter}</p>
    //                         <button id='right' onClick={() => add(elem.ProductName)}>+</button>
    //                     </div>
    //                     <div className="Value-of-product">
    //                         <p><strong>Wartość:</strong><br/> {parseFloat(elem.Price*counter).toFixed(2)} PLN</p>
    //                     </div>
    //                 </div>      
    //                 <img alt="add-to-bracket" src="/ICON/add-to-basket.png" className="Dish-choosing-products-add-button"></img>
    //             </div>
    //         </div>
    //     )
    // })
    //console.log(props)
    // return (
    //     <div className="Header">
    //         <h1>{props.param.Category}</h1>
    //         {Dishes}
    //     </div>
    // )
    return(<h1>abba</h1>)
}
export { Dish }

