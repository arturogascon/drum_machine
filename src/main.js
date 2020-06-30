const modeOne = [{
    keyName: 'Q',
    id: 'Miau',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/Q.mp3'
}, {
    keyName: 'W',
    id: 'Blah!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/W.mp3'
}, {
    keyName: 'E',
    id: 'Buruburubu!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/E.mp3'
}, {
    keyName: 'A',
    id: 'Mouth-explosion',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/A.mp3'
}, {
    keyName: 'S',
    id: 'Ahhhrgh!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/S.mp3'
}, {
    keyName: 'D',
    id: 'Jijijijijiji!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/D.mp3'
}, {
    keyName: 'Z',
    id: 'Bazinnngah',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/Z.mp3'
}, {
    keyName: 'X',
    id: 'Spongebob-laugh',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/X.mp3'
}, {
    keyName: 'C',
    id: 'Mmmmmmmh!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/modeOne/C.mp3'
}
];

//Button active style
const buttonPressed = {
    backgroundColor: '#01A7C2'
}
const buttonUnpressed = {
    backgroundColor: 'transparent'
}

class Drum_Machine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Press keyboard or clic!',
            volume: 0.7,
            displayMode: 'Click me to change mode'
        }
        this.handleUpdateDisplay = this.handleUpdateDisplay.bind(this);
        this.handleVolumeAdjustment = this.handleVolumeAdjustment.bind(this);
    }

    handleUpdateDisplay(name) {
        this.setState({
            display: name
        });
    }

    handleVolumeAdjustment(e) {
        this.setState({
            display: `Volume: ${e.target.value * 10}`,
            volume: e.target.value
        })
    }

    render() {
        return (
            <div id="drum-machine">
                {/* <h1>Mensaje del gusanito</h1> */}
                <div id="display">
                    <p>{this.state.display}</p>
                </div>
                <Keys updateDisplay={this.handleUpdateDisplay} volume={this.state.volume} />
                <input
                    type="range" value={this.state.volume} min="0" max="1" step="0.1"
                    onChange={this.handleVolumeAdjustment} />
                <Worm displayMode={this.state.displayMode}/>                
            </div>
        );
    }
}

class Keys extends React.Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeypress)
    }

    handleKeypress(e) {
        const keypressID = e.key.toUpperCase(); //id of the <audio> DOM element
        const keypress = document.getElementById(keypressID);
        this.playSound(keypress);
    }

    handleClick(e) {
        const sound = e.currentTarget.children[0];
        this.playSound(sound);
    }

    playSound(sound) {
        Object.assign(sound.parentElement.style, buttonPressed);
        sound.currentTime = 0;
        sound.volume = this.props.volume;
        sound.play();
        setTimeout(() => Object.assign(sound.parentElement.style, buttonUnpressed), 500);
        this.props.updateDisplay(sound.parentElement.id.replace(/-/g, ' '));
    }

    render() {
        let keyBoard = modeOne.map((element, i, modeArray) => {
            return (
                <button className="drum-pad" onClick={this.handleClick} id={modeArray[i].id}>
                    {modeArray[i].keyName}
                    <audio id={modeArray[i].keyName} className="clip" src={modeArray[i].url} />
                </button>
            );
        });

        return (
            <div id="keys-container">
                {keyBoard}
            </div>
        );
    }
}

    
class Worm extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="worm">
                <div id="message">
                    <p>{this.props.displayMode}</p>
                    <div/>
                </div>
                <img src="./styles/img/worm.png" alt="Friendly Worm"/>
            </div>
        );
    }
}

//Renderiza React en el DOM:
ReactDOM.render(<Drum_Machine />, document.getElementById('app'));