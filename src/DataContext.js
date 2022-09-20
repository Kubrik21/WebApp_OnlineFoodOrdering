import React, { useState, useContext } from 'react'


const DataContext=React.createContext()
const DataAddContext=React.createContext()
const DataClearContext=React.createContext()



export function useData(){return useContext(DataContext)}
export function useDataAdd(param){return useContext(DataAddContext)}
export function useDataClear(){return useContext(DataClearContext)}


export function DataProvider({ children }) {

    const [data,setData]=useState({});

   

    function addToData(param){
        setData(()=>{
            const obj={
                OrderName: param.imie,
                OrderSurname: param.nazwisko,
                OrderMail: param.mail,
                OrderAdres: param.adres,
                OrderAdresSec: param.adres2,
                OrderPostCode: param.postcode,
                OrderCity: param.postcodeCity
            };

            return(obj);
    })
}

    function clearData(){
        setData([])
    }

    return (
        <DataContext.Provider value={data}>
            <DataAddContext.Provider value={addToData}>
                <DataClearContext.Provider value={clearData}>
               {children}
               </DataClearContext.Provider>
            </DataAddContext.Provider>
        </DataContext.Provider>
    )


}
