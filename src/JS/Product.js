import "../CSS/Product.css"

function Product(props){
    return(
        <div className="Product">
            <img src={props.img} alt={props.name} className="Product-img"></img>
            <p className="Product-description">{props.name}</p>
            <button className="Product-button"> Wybierz </button>
        </div>
    )
}

export {Product}