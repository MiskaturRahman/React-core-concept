import React, { useState, useEffect } from 'react';
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



  //CREATE MULTIPLE COMPONENTS FROM AN ARRAY OF OBJECTS
  const productNames = products.map(product => product.name)
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react Person</p>
        <Counter></Counter>
        <Users></Users>
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



//click handler
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}




//fetch APi
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(data => setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}, {user.phone}</li>)
        }
      </ul>
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
