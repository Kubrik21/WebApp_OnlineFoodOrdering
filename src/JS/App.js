import '../CSS/App.css';
import { Routes, Route } from "react-router-dom";
import { Main } from '../JS/Main/Main'
import { ChoosenRestaurant } from './Restaurant/ChoosenRestaurant';
import React from 'react'
import {Order} from "./OrderPayment/Order"
import {Thanks} from "./OrderPayment/ThankyouPage"
import {OrderData} from "./OrderPayment/OrderData"
import {Navigate } from "react-router-dom";
import {useBasket} from '../BasketContext';
import { Payment } from './OrderPayment/Payment';
import {Dashboard} from "../JS/Dashboard/Dashboard"
import {Login} from "../JS/Dashboard/Login"
import { useData } from '../DataContext';
import { useAuth } from '../AuthContext';




function App() {

  const basket=useBasket();
  const data=useData();
  const auth=useAuth()



  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main  />} />
          <Route path="/restaurant/:topicId" authed={true} element={<ChoosenRestaurant/ >} />
          <Route path="/order" authed={true} element={<Order / >} />
          <Route path="/checkout" element={basket.length===0 ? <Navigate to="/" /> : <OrderData /> }/> 
          <Route path="/payment" element={data.length===0?<Navigate to="/" /> : <Payment />}/> 
          <Route path="/thanks" element={<Thanks />}/> 
          <Route path="/zarzadzanie" element={auth?<Dashboard />:<Navigate to="/login"/>}/>
          <Route path="/login" element={auth?<Navigate to="/zarzadzanie"/>:<Login />}/>
        </Routes>
      </div>   
  );
}

export default App;
