import React from "react";
import ReactDOM from "react-dom/client";

const RestarentCard = () => {
  return (
    <div className="card">
      <img />
      <h3>Anil restarent</h3>
      <h4>Biryani,Meals,Starters</h4>
      <h4>4.0 rating</h4>
      <h4>400 for two</h4>
    </div>
  )
}

const Header = () => {
  return (
    <div className="head-container">
      <div className="logo-container">
        <img
          alt="logo"
          className="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkML6BRWil3kliTdFT-6LYBEeRsnkd_hmMNAowM3oalP-VbwLnT7vvG70rlP2_gcxbd0&usqp=CAU"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-box">Search box</div>
      <div className="res-container">
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
          <RestarentCard />
      </div>
    </div>
  )
}

function AppLayout() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
