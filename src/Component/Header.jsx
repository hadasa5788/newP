import React from 'react'
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
<nav 
style={{
    position:"fixed",
    display:"flex",
    justifyContent: "space-around",
    top:"0px",
    left:"0px",
    right:"0px",
    background:"black",
}}
>


<div>
    <NavLink
    to="/"
    style={({isActive})=>({color : isActive ? "red" :"green"})}
    >HomePage
    </NavLink>
</div>
<div>
<NavLink to="/about"
style={({isActive})=>({color: isActive ? "red": "green"})}
>
    about
</NavLink>
</div>
<div>
<NavLink to="/CallMe"
style={({isActive})=>({color: isActive ? "red": "green"})}
>
CallMe
</NavLink>
</div>
<div>
  <NavLink to="/countrys"
  style={({isActive})=>({color: isActive ? "red":"green"})}
  >
CountryAll  </NavLink>
</div>
</nav>
    </div>
  );
};

export default Header;