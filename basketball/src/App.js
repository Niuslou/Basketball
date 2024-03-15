import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, ProgressBar} from 'react-bootstrap';
import basketballimg from './basketballCourt.avif';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <label for="guest">Guest</label>
          <input type= "text" id='guest' defaultValue="guest"/>
          <br/>

          <p id="punkteguest">0 Punkte</p>

          <button type="button" className="An guest" onClick={werfen}>Werfen</button>
        </div>
        <div className="col">
        <img className="bild"src={basketballimg}></img>

        <button type="reset" onClick={reset}>reset</button>
        <br/>
        <div id="liste">

        </div>
        </div>
        <div className="col">
          <label for="home">Home</label>
          <input type= "text" id='home' defaultValue="home"/>
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
  const gast = document.getElementById("guest").value
  const heim = document.getElementById("home").value
  let list = document.getElementById("liste")
  if (1 == 1){
    const number = Math.floor(Math.random()*100)
    if (number > 50) {
      if (event.target.classList.contains("guest")) {
        scoreGuest = scoreGuest +2;
        let p = document.createElement('p')
        p.innerText = gast + ' ' + ' hat 2 Punkte gemacht';
        list.append(p)
      } else {
        scoreHome = scoreHome +2;
        let p = document.createElement('p')
        p.innerText = heim + ' ' + ' hat 2 Punkte gemacht';
        list.append(p)
      }
    } else{
      if (event.target.classList.contains("guest")) {
        let p = document.createElement('p')
        p.innerText = gast + ' ' + ' hat verfehlt';
        list.append(p)
      } else {
        let p = document.createElement('p')
        p.innerText = heim + ' ' + ' hat verfehlt';
        list.append(p)
      }
    }
    document.getElementById("punktehome").innerText = scoreHome + " Punkte"
    document.getElementById("punkteguest").innerText = scoreGuest + " Punkte"
  } else{

  }
}

function reset(){
  scoreGuest = 0;
  scoreHome = 0;

  let list = document.getElementById("liste");
  list.innerHTML = '';

  document.getElementById("punktehome").innerText = "0 Punkte";
  document.getElementById("punkteguest").innerText = "0 Punkte";
}

export default App;
