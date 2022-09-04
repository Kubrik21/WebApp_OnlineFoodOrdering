import "../../CSS/Nav.css"
import { Link } from "react-router-dom";

function Nav() {
    
    


    return (
        <nav className="Nav">
                <div className="Nav-Logo-Name">
                <Link to={`/`}  ><img src="/Logo.png" alt="Logo" className="Nav-logo">
                </img></Link>
                <Link to={`/`}  >
                <h1 className="Nav-motto">On your food</h1>
                </Link>
                </div>
                <div className="Nav-Dropdown" data-dropdown>
                    <button className="Nav-Basket-button" data-dropdown-button><img className="Nav-basket" src="/ICON/Basket.png" alt="basket"></img></button>
                    <div className="Nav-Dropdown-Menu">sth </div>
                </div>
        </nav>
    )
}

export { Nav }

