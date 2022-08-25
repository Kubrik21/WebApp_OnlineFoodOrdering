import '../../CSS/Dish.css'




function Dish(props) {

    const Dishes=(props.param.Product).map(elem=>{return(
        <div className="Dish">
            <img className="Dish-img" src={elem.logo} alt={elem.ProductName}></img>
            <div className="Dish-info">
                <h2>{elem.ProductName}</h2>
                <p>Cena:  {elem.Price}  PLN</p>
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

