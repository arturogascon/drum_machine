var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modeOne = [{
    keyName: 'Q',
    id: 'Miau',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/Q.mp3'
}, {
    keyName: 'W',
    id: 'Blah!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/W.mp3'
}, {
    keyName: 'E',
    id: 'Buruburubu!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/E.mp3'
}, {
    keyName: 'A',
    id: 'Mouth-explosion',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/A.mp3'
}, {
    keyName: 'S',
    id: 'Ahhhrgh!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/S.mp3'
}, {
    keyName: 'D',
    id: 'Jijijijijiji!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/D.mp3'
}, {
    keyName: 'Z',
    id: 'Bazinnngah',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/Z.mp3'
}, {
    keyName: 'X',
    id: 'Spongebob-laugh',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/X.mp3'
}, {
    keyName: 'C',
    id: 'Mmmmmmmh!',
    url: 'https://raw.githubusercontent.com/arturogascon/drum_machine/master/sounds/C.mp3'
}];

//Button active style
var buttonPressed = {
    backgroundColor: '#01A7C2'
};
var buttonUnpressed = {
    backgroundColor: 'transparent'
};

var Drum_Machine = function (_React$Component) {
    _inherits(Drum_Machine, _React$Component);

    function Drum_Machine(props) {
        _classCallCheck(this, Drum_Machine);

        var _this = _possibleConstructorReturn(this, (Drum_Machine.__proto__ || Object.getPrototypeOf(Drum_Machine)).call(this, props));

        _this.state = {
            display: 'Press keyboard or clic!',
            volume: 0.7,
            displayMode: 'Click me to change mode'
        };
        _this.handleUpdateDisplay = _this.handleUpdateDisplay.bind(_this);
        _this.handleVolumeAdjustment = _this.handleVolumeAdjustment.bind(_this);
        return _this;
    }

    _createClass(Drum_Machine, [{
        key: 'handleUpdateDisplay',
        value: function handleUpdateDisplay(name) {
            this.setState({
                display: name
            });
        }
    }, {
        key: 'handleVolumeAdjustment',
        value: function handleVolumeAdjustment(e) {
            this.setState({
                display: 'Volume: ' + e.target.value * 10,
                volume: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'drum-machine' },
                React.createElement(
                    'div',
                    { id: 'display' },
                    React.createElement(
                        'p',
                        null,
                        this.state.display
                    )
                ),
                React.createElement(Keys, { updateDisplay: this.handleUpdateDisplay, volume: this.state.volume }),
                React.createElement('input', {
                    type: 'range', value: this.state.volume, min: '0', max: '1', step: '0.1',
                    onChange: this.handleVolumeAdjustment }),
                React.createElement(Worm, { displayMode: this.state.displayMode })
            );
        }
    }]);

    return Drum_Machine;
}(React.Component);

var Keys = function (_React$Component2) {
    _inherits(Keys, _React$Component2);

    function Keys(props) {
        _classCallCheck(this, Keys);

        var _this2 = _possibleConstructorReturn(this, (Keys.__proto__ || Object.getPrototypeOf(Keys)).call(this, props));

        _this2.playSound = _this2.playSound.bind(_this2);
        _this2.handleKeypress = _this2.handleKeypress.bind(_this2);
        _this2.handleClick = _this2.handleClick.bind(_this2);
        return _this2;
    }

    _createClass(Keys, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('keydown', this.handleKeypress);
        }
    }, {
        key: 'handleKeypress',
        value: function handleKeypress(e) {
            var keypressID = e.key.toUpperCase(); //id of the <audio> DOM element
            var keypress = document.getElementById(keypressID);
            this.playSound(keypress);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var sound = e.currentTarget.children[0];
            this.playSound(sound);
        }
    }, {
        key: 'playSound',
        value: function playSound(sound) {
            Object.assign(sound.parentElement.style, buttonPressed);
            sound.currentTime = 0;
            sound.volume = this.props.volume;
            sound.play();
            setTimeout(function () {
                return Object.assign(sound.parentElement.style, buttonUnpressed);
            }, 500);
            this.props.updateDisplay(sound.parentElement.id.replace(/-/g, ' '));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var keyBoard = modeOne.map(function (element, i, modeArray) {
                return React.createElement(
                    'button',
                    { className: 'drum-pad', onClick: _this3.handleClick, id: modeArray[i].id },
                    modeArray[i].keyName,
                    React.createElement('audio', { id: modeArray[i].keyName, className: 'clip', src: modeArray[i].url })
                );
            });

            return React.createElement(
                'div',
                { id: 'keys-container' },
                keyBoard
            );
        }
    }]);

    return Keys;
}(React.Component);

var Worm = function (_React$Component3) {
    _inherits(Worm, _React$Component3);

    function Worm(props) {
        _classCallCheck(this, Worm);

        return _possibleConstructorReturn(this, (Worm.__proto__ || Object.getPrototypeOf(Worm)).call(this, props));
    }

    _createClass(Worm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'worm' },
                React.createElement(
                    'div',
                    { id: 'message' },
                    React.createElement(
                        'p',
                        null,
                        this.props.displayMode
                    ),
                    React.createElement('div', null)
                ),
                React.createElement('img', { src: './styles/img/worm.png', alt: 'Friendly Worm' })
            );
        }
    }]);

    return Worm;
}(React.Component);

//Renderiza React en el DOM:


ReactDOM.render(React.createElement(Drum_Machine, null), document.getElementById('app'));