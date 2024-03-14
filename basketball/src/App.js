import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, ProgressBar} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <label for="guest">Guest</label>
          <input type= "text" id='guest'/>
          <br/>

          <p id="punkteguest">0 Punkte</p>

          <button type="button" className="An guest" onClick={werfen}>Werfen</button>
        </div>
        <div className="col">
        </div>
        <div className="col">
          <label for="home">Home</label>
          <input type= "text" id='home'/>
          <br/>

          <p id="punktehome">0 Punkte</p>
          
          <button type="button" className="home" onClick={werfen}>Werfen</button>
        </div>
      </div>
    </div>
  );
}

let scoreGuest = 0;
let scoreHome = 0;

function werfen(event){
  if (1 == 1){
    const number = Math.floor(Math.random()*100)
    if (number > 50) {
      if (event.target.classList.contains("guest")) {
        scoreGuest = scoreGuest +2;
      } else {
        scoreHome = scoreHome +2;
      }
    }
    document.getElementById("punktehome").innerText = scoreHome + " Punkte"
    document.getElementById("punkteguest").innerText = scoreGuest + " Punkte"
  } else{

  }
}

export default App;
