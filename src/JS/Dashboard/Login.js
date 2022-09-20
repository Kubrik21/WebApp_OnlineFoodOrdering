import '../../CSS/App.css';
import { Nav } from '../NavBar/NavBar'
import {Footer} from '../Footer/Footer'
import axios from 'axios'
import { useState } from 'react';
import "../../CSS/Login.css"
import { useNavigate } from 'react-router-dom'
import { useAuthChange } from '../../AuthContext';

function Login() {
  const change =useAuthChange()
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [auth, setAuth] = useState({
    login: "",
    haslo: "",
})

function handleChange(event) {
    setAuth(prev => {
        return { ...prev, [event.target.name]: event.target.value }
    })
    console.log(auth)
}
  
     async function OnHandler(event){
        event.preventDefault()

            const rest = await axios.get('https://localhost:5001/api/restaurant/auth',{
                params:
                
                    {login: auth.login,haslo:auth.haslo}
            });
            setProducts(rest);
            //console.log(rest)

            if(rest.data==="Authorized"){
              change(true)
                navigate(`/zarzadzanie`, { replace: true })
            }
            else {
              document.getElementById('login').value = ''
              document.getElementById('passwd').value = ''
              navigate(`/login`, { replace: false })
            
            }
     }

    
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="Field">
        <h3 className="h3">Logowanie</h3>
        <form onSubmit={OnHandler}>

            <div className="Form">
                    <p>Dane kontaktowe</p>
                    <input id='login' type="text" placeholder="Login" onChange={handleChange} name="login" required />
                    <input id='passwd' type="password" placeholder="Hasło" onChange={handleChange} name="haslo" required security='password'/>
                </div>
                
            <input type="submit" className="Order-button" value="Zaloguj" />
        </form>
      </div>
      

   
      <Footer />
    </div>
  )
}

export { Login };
