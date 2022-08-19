
import '../CSS/App.css';
import {Nav} from './NavBar'
import {Restaurants} from '../JS/Restaurant'
import {Product} from '../JS/Product'
import {Graphic} from '../JS/Graphic'
import {Motto} from '../JS/Motto'

function Main() {


  const elem=Restaurants.map(restaurant=>{ 
    return(<Product img={restaurant.Logo} name={restaurant.Name} id={restaurant.Id}/>)
  })

  return (
    <div className="App">
      <header className="App-header">
       <Nav />
       <Motto />
       <Graphic />
       <div className="List-of-restaurants">
          {elem}
       </div>
      </header>
    </div>
  );
}

export {Main};
