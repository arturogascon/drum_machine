var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modeOne = [{
    keyName: 'Q',
    keyCode: 81,
    id: 'Miau',
    url: ''
}, {
    keyName: 'W',
    keyCode: 87,
    id: 'Blah!',
    url: ''
}, {
    //Continuar construyendo este objeto!!!

}];

var Drum_Machine = function (_React$Component) {
    _inherits(Drum_Machine, _React$Component);

    function Drum_Machine() {
        _classCallCheck(this, Drum_Machine);

        return _possibleConstructorReturn(this, (Drum_Machine.__proto__ || Object.getPrototypeOf(Drum_Machine)).apply(this, arguments));
    }

    _createClass(Drum_Machine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'drum-machine' },
                React.createElement(Display, null),
                React.createElement(Keys, null),
                React.createElement('input', { type: 'range' })
            );
        }
    }]);

    return Drum_Machine;
}(React.Component);

function Display(props) {
    return React.createElement(
        'div',
        { id: 'display' },
        React.createElement(
            'p',
            null,
            'Soy un display'
        )
    );
}

function Keys(props) {
    return React.createElement(
        'div',
        { id: 'keys-container' },
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'Q',
            React.createElement('audio', { id: 'Q', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'W',
            React.createElement('audio', { id: 'W', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'E',
            React.createElement('audio', { id: 'E', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'A',
            React.createElement('audio', { id: 'A', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'S',
            React.createElement('audio', { id: 'S', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'D',
            React.createElement('audio', { id: 'D', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'Z',
            React.createElement('audio', { id: 'Z', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'X',
            React.createElement('audio', { id: 'X', className: 'clip', src: '' })
        ),
        React.createElement(
            'button',
            { className: 'drum-pad' },
            'C',
            React.createElement('audio', { id: 'C', className: 'clip', src: '' })
        )
    );
}

//Renderiza React en el DOM:
ReactDOM.render(React.createElement(Drum_Machine, null), document.getElementById('app'));