const modeOne = [{
        keyName: 'Q',
        keyCode: 81,
        id: 'Miau',
        url: ''
    },{
        keyName: 'W',
        keyCode: 87,
        id: 'Blah!',
        url: ''
    },{
        //Continuar construyendo este objeto!!!

    }

]

class Drum_Machine extends React.Component{
    render(){
        return (
            <div id="drum-machine">
                {/* <h1>Mensaje del gusanito</h1> */}
                <Display/>
                <Keys/>
                <input type="range"/>          
            </div>
        );
    }
}

function Display(props){
    return (
        <div id="display">
            <p>Soy un display</p>
        </div>
    );
}

function Keys(props){
    return(
        <div id="keys-container">
            <button className="drum-pad">
                Q
                <audio id="Q" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                W
                <audio id="W" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                E
                <audio id="E" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                A
                <audio id="A" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                S
                <audio id="S" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                D
                <audio id="D" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                Z
                <audio id="Z" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                X
                <audio id="X" className="clip" src="">

                </audio>
            </button>
            <button className="drum-pad">
                C
                <audio id="C" className="clip" src="">

                </audio>
            </button>
        </div>
    );
}



//Renderiza React en el DOM:
ReactDOM.render(<Drum_Machine/>, document.getElementById('app'));