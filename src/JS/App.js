import '../CSS/App.css';
import { Routes, Route } from "react-router-dom";
import { Main } from '../JS/Main/Main'
import { ChoosenRestaurant } from './Restaurant/ChoosenRestaurant';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/restaurant/:topicId" authed={true} element={<ChoosenRestaurant/ >} />
      </Routes>
    </div>
  );
}

export default App;
