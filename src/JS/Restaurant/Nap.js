import "../../CSS/Nap.css"
function Nap(params) {
    console.log(params.param.state.Menu)
    const Menu = (params.param.state.Menu).map(elem => {
        return (<button className="Button-category">{elem.Category}</button>)
    })

    console.log(params.param.state)
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
                    <button className="Button-category" >Wszystkie</button>
                    {Menu}
                </ul>
            </nav>
        </div>
    )
}

export { Nap }