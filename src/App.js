import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [
    'razzak', 'jasim', 'rubel', 'salman', 'shuvo', 'bappi'
  ]
  const products = [
    { name: 'Photpshop', price: '$69.99' },
    { name: 'Illustrator', price: '$49.99' },
    { name: 'PDF Reader', price: '$19.99' },
    { name: 'Premier Pro', price: '249.99' }
  ]

  const productNames = products.map(product => product.name)
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react Person</p>
        <Counter></Counter>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person></Person>
      </header>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: 10</h1>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'black',


  }
  const { name, price } = props.product;
  console.log(name, price);

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const PersonStyle = {
    border: '2px solid yellow',
    margin: '20px'
  }
  return (
    <div style={{ border: '2px solid gold', width: '400px' }}>
      <h3>My name: {props.name}</h3>
      <p>Profession: {props.job}</p>

    </div>
  )
}

export default App;
