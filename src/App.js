// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users,setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>External Users</h3>
      {
        users.map(user=> <User name={user.name} username={user.username} email= {user.email} id={user.id}>{user.name}</User>)
      }
    </div>
  )
}


function User(props){
  const userStyle = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    borderRadius: '20px',
    margin: '20px'
  }
  return(
    <div style={userStyle}>
      <h2>Name: {props.name}</h2>
      <p>User Name: {props.username}</p>
      <p>E-mail: {props.email}</p>
      <p>ID: {props.id}</p>
      
    </div>
  )
}








function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  // const handleIncrease = () => {
  //   const newCount = count+1;
  //   setCount(newCount);
  // };
  
  // const handleDecrease = () => {
  //   const newCount = count-1;
  //   setCount(newCount);
  // };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}




//Component || function
function Person(props){
  // console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    borderRadius: '20px',
    margin: '20px'
  }
  return (
  // <div className= 'person'>
  <div style= {person}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of: {props.nayika}</h3>
  </div>
  )
}


function Cinema(props){
  return(
    <div className="person">
      <h2>Movie: {props.name}</h2>
      <h3>Nayok: {props.nayok}</h3>
      <h3>Nayika: {props.nayika}</h3>
    </div>
  )
}

/*
      <Friend phone = "01516358828" address="Noakhali"></Friend>
      <Friend phone = "01631394078" address="cox's bazar"></Friend>
      <Friend phone = "01843921915" address="California"></Friend>
*/
  function Friend(props){
    console.log(props);
    return(
      <div className="person">
        <h3>Phone : {props.phone}</h3>
        <h5>Address : {props.address}</h5>
      </div>
    )
  }

export default App;






  /*
  return (
  <div style= {{backgroundColor: 'skyblue',border: '3px solid lightsalmon',borderRadius: '20px',margin: '20px'}}>
    <h1>Name: Sakib Al Hasan</h1>
    <h4>Profession: Cricketer</h4>
  </div>
  )
  */


  /*

        <Person name = {nayoks[0]} nayika = "moushumi"></Person>
        <Person name = {nayoks[1]} nayika ="Cheka"></Person>
        <Person name = {nayoks[2]} nayika= "kopila"></Person>

  */

  /*
    const products = [
    {name: 'Mobile', price: 15000},
    {name: 'Camera', price: 55000},
    {name: 'Laptop', price: 150000},
    {name: 'Watch', price: 5000},
    {name: 'Shoe', price: 500},
    ]
  */

  /*
      {
        products.map(product => <product name={product.name} price={product.price}></product> )
      }
      <product name="Mobile" price= "15000"></product>
      <product name="Mobile" price= "15000"></product>
      <product name="Mobile" price= "15000"></product>
      <product name="Mobile" price= "15000"></product>
      <product name="Mobile" price= "15000"></product>
  */

/*
const nayoks = ['Rubel', 'Bapparaj', 'kuber', 'Shuvo']
  const cinemas = [
    {name: 'Titanic', nayok: 'Leonardo DiCaprio', nayika: 'Kate Winslet'},
    {name: '3 Idiots', nayok: 'Aamir Khan', nayika: 'Kareena Kapoor'},
    {name: 'Premam ', nayok: 'Nivin Pauly', nayika: 'Sai Pallavi'},
    {name: 'Money Heist ', nayok: 'Professor', nayika: 'Raquel'},
    {name: 'Money Heist ', nayok: 'Rio', nayika: 'Tokyo'}
  ]
*/

 /*
  <ul>
        {
          nayoks.map(nayok=> <li>{nayok}</li>)
        }
      </ul> }
      { <Cinema name="Titanic" nayok="Jems Bond" nayika= "Cat Woman"></Cinema>
      {
        cinemas.map(cinema => <Cinema name={cinema.name} nayok={cinema.nayok} nayika= {cinema.nayika}></Cinema>)
      }
 */

 /**/
 /**/
 /**/
 /**/
 /**/