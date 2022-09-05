import "../../CSS/Nap.css"
import { useEffect, useState } from 'react'
import { Dish } from "./Dish"

function Nap(restaurantsData) {

    const { dishes, restaurantDelivery, restaurantMinValue, restaurantName, restaurantMotto } = restaurantsData;

    const [category, setCategory] = useState([{ Category: "Wszystko", isClicked: true }])
    
    const [restaurantMenu, setRestaurantMenu] = useState()
   // const [chosenRestaurantMenu, setChosenRestaurantMenu]=useState()

    useEffect(() => {
        createArray();
        createMenu("Wszystko")
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


            if (category.length === 1) {
                setCategory(prev => {
                    const ret = uniqueCategory.map(elem => { return ({ Category: elem, isClicked: false }) })
                    return ([...prev, ...ret])
                });
            }
        }
    }
    function createMenu(par) {
        
        if (dishes !== undefined){


            let uniqueCategory = []
            if(par==="Wszystko"){
            const listOfCategory = dishes.map(elem => elem.productCategory)


                listOfCategory.forEach((element) => {
                    if (!uniqueCategory.includes(element)) {
                        uniqueCategory.push(element);
                    }
                });
                uniqueCategory.sort()
            }
            else uniqueCategory.push(par)
            


                if(uniqueCategory.length!==0)
                {

                setRestaurantMenu(()=>{
                    const tempo = uniqueCategory.map(prev => {
                    let tempArr = []
                    dishes.forEach(e => { if (e.productCategory === prev) tempArr.push(e) })
                    return (
                        {
                            category: prev,
                            menu: tempArr
                        }
                        )
                        
                    })
                    return tempo})
                }
            }
        }
        
        function changeCategory(param) {
        createMenu(param)

        //setChosenRestaurantMenu(prev=>{const choosen = restaurantMenu.forEach(e=>{}); return choosen})

        setCategory(prev => {
            const result = prev.map(e => {
                return (e.Category === param ? { ...e, isClicked: true } : { ...e, isClicked: false })
            })
            return result;
        })
    }

    const Menu = category.map((elem, index) => <button key={index} className={elem.isClicked ? "Button-category-clicked" : "Button-category"} onClick={() => changeCategory(elem.Category)}>{elem.Category}</button>)

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
            <Dish menu={restaurantMenu} />
        </div>
    )
}

export { Nap }