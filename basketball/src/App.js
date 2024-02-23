import logo from './logo.svg';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <label for="guest">Guest</label>
          <input type= "text" id='guest'/>
          <br/>

          <label for="punkteguest">Punkte</label>
          <input type="number" id='punkteguest'/>
          <br/>

          <button type="button">Werfen</button>
        </div>
        <div className="col">
        </div>
        <div className="col">
          <label for="home">Home</label>
          <input type= "text" id='home'/>
          <br/>

          <label for="punktehome">Punkte</label>
          <input type="number" id='punktehome'/>
          <br/>

          <button type="button">Werfen</button>
        </div>
      </div>
    </div>
  );
}

export default App;
