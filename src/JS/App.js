import '../CSS/App.css';
import { Routes, Route } from "react-router-dom";
import { Main } from '../JS/Main/Main'
import { ChoosenRestaurant } from './Restaurant/ChoosenRestaurant';
import {useState} from 'react'
import React from 'react'
import {BasketProvider} from "../BasketContext"

function App() {

  return (
    <BasketProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main  />} />
          <Route path="/restaurant/:topicId" authed={true} element={<ChoosenRestaurant/ >} />
        </Routes>
      </div>
    </BasketProvider>
  );
}

export default App;
