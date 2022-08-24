
import '../../CSS/App.css';
import {Nav} from '../NavBar/NavBar'
import {Restaurants} from '../Restaurant'
import {Product} from './Product'
import {Graphic} from '../NavBar/Graphic'
import {Motto} from './Motto'

function Main() {


  const elem=Restaurants.map(restaurant=>{ 
    return(<Product key={restaurant.Id} props={restaurant}/>)
  })

  return (
    <div className="App">
      <header className="App-header">
       <Nav />
      </header>
       <Motto />
       <Graphic />
       <div className="List-of-restaurants">
          {elem}
       </div>
    </div>
  );
}

export {Main};
