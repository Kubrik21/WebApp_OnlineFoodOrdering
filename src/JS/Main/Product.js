import "../../CSS/Product.css"
import { Link } from "react-router-dom";


function Product(props){
    return(
        <div className="Product">
            <img src={props.props.Logo} alt={props.props.Name} className="Product-img"></img>
            <h2 className="Product-description">{props.props.Name}</h2>
             <button  className="Product-button"> <Link to={`/restaurant/${props.props.Name}`} state={props.props} >
            Wybierz</Link> </button> 
            
        </div>
    )
}

export {Product}