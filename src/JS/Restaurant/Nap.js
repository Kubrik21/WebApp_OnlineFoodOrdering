import "../../CSS/Nap.css"
import { useEffect, useState } from 'react'
import { Dish } from "./Dish"

function Nap(restaurantsData) {

    const { dishes, restaurantDelivery, restaurantMinValue, restaurantName, restaurantMotto } = restaurantsData;

    const [category, setCategory] = useState([{ Category: "Wszystko", isClicked: true }])


    useEffect(() => {
        createArray()
    }, [dishes])



    function createArray() {

        if (dishes !== undefined) {

            const listOfCategory = dishes.map(elem => elem.productCategory)

            let uniqueCategory = []

            listOfCategory.forEach((element) => {
                if (!uniqueCategory.includes(element)) {
                    uniqueCategory.push(element);
                }
            });
            console.log(category.length)
            if (category.length === 1) {
                setCategory(prev => {
                    const ret = uniqueCategory.map(elem => { return ({ Category: elem, isClicked: false }) })
                    return ([...prev, ...ret])
                });
            }

        }
    }


    function changeCategory(param) {

        setCategory(prev => {
            const result = prev.map(e => {
                return (e.Category === param ? { ...e, isClicked: true } : { ...e, isClicked: false })
            })
            return result;
        })
    }

    const Menu = category.map((elem, index) => <button key={index} className={elem.isClicked?"Button-category-clicked":"Button-category"}  onClick={() => changeCategory(elem.Category)}>{elem.Category}</button>)

    return (

        <div className="Nap">
            <h1 className="Restaurant-Name" >{restaurantName}</h1>
            <p className="Description">{restaurantMotto}</p>
            <div className="Abilities">
                <img className="Abilities-icon" src="/ICON/biker.png" alt="biker"></img>
                <p>{restaurantDelivery}  zł</p>
                <img className="Abilities-icon" src="/ICON/bag.png" alt="bag"></img>
                <p>  Min. {restaurantMinValue} zł</p>
            </div>
            <nav>
                <ul>
                    {Menu}
                </ul>
            </nav>
            <Dish restaurant={restaurantName} category={category} /> 
        </div>
    )
}

export { Nap }