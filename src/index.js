import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Shop from './shop';

const NavBar = () => (
  <header className='navbar'>
    <div className="navbar_title navbar_item">My Cart</div>
    <div className="navbar_item ">Menu Item1</div>
    <div className="navbar_item ">Menu item2</div>
    <div className="navbar_item ">Menu item3</div>
    <div className="navbar_item">
      <input type="search" />
      <button>search</button>
    </div>
  </header>
);



const Apps = () => (
  <div>
    <NavBar />
    <Shop />
  </div>
)
ReactDOM.render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
