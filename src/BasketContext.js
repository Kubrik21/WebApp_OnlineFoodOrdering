import React, { useState, useContext } from 'react'

const BasketContext = React.createContext()
const BasketAddContext = React.createContext()
const BasketClearContext=React.createContext()




export function useBasket(){return useContext(BasketContext)}
export function useBasketAdd(params){return useContext(BasketAddContext)}
export function useBasketClear(){return useContext(BasketClearContext)}



export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);
  

    function addToBracket(params,counter) {
      setBasket(prev=>{
        const obj={
            id:params.productId,
            logo:params.productLogo,
            productName:params.productName,
            price:params.productPrice,
            quantity: counter,
            value:params.productPrice*counter
        }
        return([...prev,obj])})
    }
    function clearBasket(){
        setBasket([])
    }

    return (
        <BasketContext.Provider value={basket}>
            <BasketAddContext.Provider value={addToBracket}>
                <BasketClearContext.Provider value={clearBasket}>
               {children}
               </BasketClearContext.Provider>
            </BasketAddContext.Provider>
        </BasketContext.Provider>
    )


}
