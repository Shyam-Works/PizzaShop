import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
  return <div className="container">
  <Header/>
  <Menu />
  <Footer />
  </div>
}

function Header(){
  // const style = { color: "red", fontSize:"48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className='header footer'>
      <div>
        <h1 style = {style} >First React Pizza Shop</h1>
    </div>
    </header>
  
  );
}

function Menu(){
  return ( 
    <main className='menu'>
    <h2>Our Menu</h2>

    {/* <></> (React Fragments) By this we can make 2 attributes not judger as a one single div. */}
    <>
    <p>Authentic Italian cuisine. Creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
    <div className='pizzas'>
      {pizzaData.map((pizza)=>(
        <Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} image={pizza.photoName} key={pizza.name} soldOut={pizza.soldOut}/> 
      ))}
    </div>
    </>
    
    {/*  Pizza Components */}
    {/* <Pizza 
    name="Focaccia"
    ingredients="Bread with italian olive oil and rosemary"
    image="pizzas/focaccia.jpg"
    price={10}
    />
    <Pizza 
    name="Pizza Funghi"
    ingredients="Tomato, mozarella, mushrooms, and onion"
    image="pizzas/funghi.jpg"
    price = {12}
    />
    <Pizza
    name= "Pizza Spinaci"
    ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
    price= {12}
    image= "pizzas/spinaci.jpg"
    />
    <Pizza
    name= "Pizza Salamino"
    ingredients= "Tomato, mozarella, and pepperoni"
    price= {15}
    image= "pizzas/salamino.jpg"
    />
    <Pizza
    name= "Pizza Prosciutto"
    ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
    price= {18}
    image= "pizzas/prosciutto.jpg"
    /> */}
    

    
    </main>
  );
}
function Pizza(props){
  // if(props.soldOut) return null;
  return (
    // change class name according to condition
    <div className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
    <img src={props.image} alt={props.name}/>
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <span>{props.soldOut ? 'SOLD OUT' : props.price}</span>
    </div>
  );
}
function Footer(){
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hours>= openHour && hours <= closeHour;
  
  // if(hours>= openHour && hours <= closeHour) alert ("we are currently open"); else alert("sorry we are closed!!")
  // console.log(hours);
  return (
  <footer className='footer'>
    {isOpen? (<Order closeHour={closeHour}/>) : (
        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
      
    )}
  </footer>
  );}
function Order(props){
  return (
    <div className='order'>
      <p>We're open until {props.closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order</button> 
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

