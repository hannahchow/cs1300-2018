import React from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'



// A few different ways to define App
const App = () => <h1 id="blah">{arr}</h1>

const App = () => React.createElement('h1', null, "hey class")

const App = function() { return React.createElement('h1', null, "heya class"); }

function App(props) {
    return React.createElement('h1', null, "heyas class " + props.number);
}

function App(props) {
    return <h1 id="blah">har class {props.number}</h1>
}

// A component
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { // initialize state in constructor
            gold: 5,
            silver: 7
        }
    }

    iwasclicked = () => { // defines what happens on click
        console.log('I got clicked :(')
    }
    render() { // all components need a render function
        return (
            <div>
                <h1>Howdy class</h1>
                <p>I love doggs</p>
                // Event handler assigns iwasclicked to be called on click
                <button onClick={this.iwasclicked} name="mybutton"/>click me!</button>
            </div>
        )
    }
}




// Functions
// New style
var add = function(a,b) {return a+b};

// Standard style
function add(a, b) {
    return a+b;
}

console.log(add(3,4))


// FILTERING:
// Function to filter
// New style:
const f = num => num > 1
//Old style:
function f(num) {
    return num > 1;
}

const addby1 = a => a + 3
var arr = [1,2,3]
arr = arr.map(addby1)
arr = arr.filter(num => num > 1)


ReactDOM.render(<App number="7"/>, document.getElementById("main"))
