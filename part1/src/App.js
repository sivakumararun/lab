import logo from './logo.svg';
import './App.css';
import React from 'react';

const Header = (props) => {
return (
<h1>{props.name}</h1>
)
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.count}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Part {props.name} excersice {props.excersice}</p> 
    </div>
  )
}

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

return (
  <div>
  <Header name="Half Stack application development" />
  <Content name="Fundamentals of React" excersice={exercises1} />
  <Content name="Using props to pass data" excersice={exercises2} />
  <Content name="State of a component" excersice={exercises3} />
  <Total count={exercises1 + exercises2 + exercises3} />
  </div>
)

}
//function App() {
//  return (
//    <div className="App">

//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
