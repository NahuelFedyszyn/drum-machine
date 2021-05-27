import { useState } from 'react';
import './App.css';

function App() {

  const sounds = {
    81:{
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    87:{
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    69:{
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    65:{
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    83:{
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    68:{
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    90:{
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    88:{
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    67:{
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  }

  const [display, setDisplay] = useState("PLAY!")

  document.onkeydown = function(evt) {
    var sound = document.getElementsByTagName('audio');
    for(let i=0; i<sound.length; i++){
      sound[i].pause();
      sound[i].currentTime = 0;
    } 
    evt = evt || window.event;

    try{
      (document.getElementById(evt.keyCode).click());
    }
    catch{}
  };

  function transformPad(id){
    document.getElementById(id).style.backgroundColor = "black";
    document.getElementById(id).style.boxShadow = "0 0 15px 2px red inset";
    document.getElementById("display").style.textShadow = "black 0 0 30px";
    setTimeout(
      function(){
        document.getElementById(id).style.backgroundColor = "brown";
        document.getElementById(id).style.boxShadow = "0 0 15px 2px black inset";
        document.getElementById("display").style.textShadow = "none";
      },100
    )
  }

  function handleClick(event){
    var sound = document.getElementsByTagName('audio');
    for(let i=0; i<sound.length; i++){
      sound[i].pause();
      sound[i].currentTime = 0;
    
    } 
    transformPad(event.target.id)
    event.target.lastChild.play();
    setDisplay(sounds[event.target.id].id);
  }

  return (
    <div className="App">
      <div className = "mainDiv">
        <h1>DRUM MACHINE</h1>

        <div className="table">
          <div id="leftCol" className = "col">
            <div id="drum-machine">
              <div className="rowContainer">
                <div className="row">
                  <button onClick={handleClick} id="81" className="drum-pad">Q
                    <audio id="Q" className="clip" src={sounds[81].url} />
                  </button> 
                  <button onClick={handleClick} id="87" className="drum-pad">W
                    <audio id="W" className="clip" src={sounds[87].url} />
                  </button> 
                  <button onClick={handleClick} id="69" className="drum-pad">E
                    <audio id="E" className="clip" src={sounds[69].url} />
                  </button> 
                </div>
                <div className="row">
                  <button onClick={handleClick} id="65" className="drum-pad">A
                    <audio id="A" className="clip" src={sounds[65].url}  />
                  </button> 
                  <button onClick={handleClick} id="83" className="drum-pad">S
                    <audio id="S" className="clip" src={sounds[83].url} />
                  </button> 
                  <button onClick={handleClick} id="68" className="drum-pad">D
                    <audio id="D" className="clip" src={sounds[68].url}/>
                  </button> 
                </div>
                <div className="row">
                  <button onClick={handleClick} id="90" className="drum-pad">Z
                    <audio id="Z" className="clip" src={sounds[90].url} />
                  </button> 
                  <button onClick={handleClick} id="88" className="drum-pad">X
                    <audio id="X" className="clip" src={sounds[88].url} />
                  </button> 
                  <button onClick={handleClick} id="67" className="drum-pad">C
                    <audio id="C" className="clip" src={sounds[67].url} />
                  </button> 
                </div>

              </div>
            </div>
          </div>
          <div id="rightCol" className = "col">
            <h2 id="display">{display}</h2>
          </div>
        </div>
        <div className="linkContainer">
          <div className="nahuelContainer">
            <a target="_blank" href="https://nahuelfedyszyn.github.io/nahuelfedy/" className="aNahuel">by Nahuel Fedyszyn</a>
          </div>
          <span>
            <a target="_blank" href="https://www.linkedin.com/in/nahuel-fedyszyn-a95764186/" className="aIcon"><i className = "bi bi-linkedin"></i></a>
            <a target="_blank" href="https://github.com/NahuelFedyszyn" className="aIcon"><i className = "bi bi-github"></i></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
