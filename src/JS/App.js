import '../CSS/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import {Main} from '../JS/Main'

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
