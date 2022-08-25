import "../../CSS/Nap.css"
import { useState } from 'react'
import {Dish} from "./Dish"

function Nap(params) {

    const [product, setProduct] = useState(params.param.state.Menu)
    const [category,setCategory] = useState({Category:"Wszystko"})
  
    
    function changeCategory(param){
        setCategory(param.Category)
        changeMenu(param)
    }
    function changeMenu(param){
        setProduct(()=>{
            if(category==="Wszystko") {return(params.param.state.Menu)} else {
               return([param]) 
           }
        })
    }
    


   
    const Menu = (params.param.state.Menu).map((elem,index) => {
        console.log(elem)
        return (<button key={index+1} className="Button-category" onClick={()=>changeCategory(elem)} >{elem.Category}</button>)
    })
    

    const Product =product.map(elem=>{
        
        return(<Dish key={elem.Id} param={elem} />)
    })

    
    return (
        <div className="Nap">
            <h1 className="Restaurant-Name" >{params.param.state.Name}</h1>
            <p className="Description">{params.param.state.Description}</p>
            <div className="Abilities">
                <img className="Abilities-icon" src="/ICON/biker.png" alt="biker"></img>
                <p>{params.param.state.Delivery}  zł</p>
                <img className="Abilities-icon" src="/ICON/bag.png" alt="bag"></img>
                <p>  Min. {params.param.state.MinValue} zł</p>
            </div>
            <nav>
                <ul>
                    <button key={0} className="Button-category" onClick={()=>changeCategory({Category:"Wszystko"})} >Wszystkie</button>
                    {Menu}
                </ul>
            </nav>
            {Product}
        </div>
    )
}

export { Nap }