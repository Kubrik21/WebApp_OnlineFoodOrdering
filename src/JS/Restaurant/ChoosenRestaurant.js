import '../../CSS/App.css';
import { Nav } from '../NavBar/NavBar'
import { Graphic } from '../NavBar/Graphic'
import { useLocation } from 'react-router-dom'
import { Nap } from './Nap'

function ChoosenRestaurant(param) {
  const location = useLocation()

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Graphic restaurantLogo={location.state.Logo} />
      <Nap param={location} />
    </div>
  );
}

export { ChoosenRestaurant };
