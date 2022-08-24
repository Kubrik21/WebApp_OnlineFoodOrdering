import "../../CSS/Nav.css"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="Nav">
            <Link to={`/`}  ><img src="/Logo.png" alt="Logo" className="Nav-logo">
                </img></Link>
                <Link to={`/`}  >
                <h1 className="Nav-motto">On your food</h1>
                </Link>
        </nav>
    )
}

export { Nav }

