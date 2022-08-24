import "../../CSS/Graphic.css"
function Graphic(param) {
    return (
        <div className="Graphics">
            <img className="Graphic-wave" src="/Background-image.png" alt="restaurant-meal"></img>
            {param.restaurantLogo &&  <img className="RestaurantLogo" src={param.restaurantLogo} alt="Logo firmy"></img>}
        </div>
    )
}
export { Graphic }