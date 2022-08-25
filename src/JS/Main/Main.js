
import '../../CSS/App.css';
import {Nav} from '../NavBar/NavBar'
import {Restaurants} from '../Restaurant'
import {Product} from './Product'
import {Graphic} from '../NavBar/Graphic'
import {Motto} from './Motto'
import {Footer} from '../Footer/Footer'
import {ThreeSteps} from '../Main/ThreeSteps'

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
       <ThreeSteps />
       <div className="List-of-restaurants">
          {elem}
       </div>
       <Footer />
    </div>
  );
}

export {Main};
