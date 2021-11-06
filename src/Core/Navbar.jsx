import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { RiSunLine ,RiMoonLine} from "react-icons/ri";

const Navbar = () => {
    let history = useHistory()
    const handleClick = ()=>{
        history.push('/')
    }
    let [toggle,settoggle]=useState(false)
    const handleclick = ()=>{
        settoggle(!toggle)
    }
  return (
    <div className="navbar">
      <div className="container navbar-wrapper">
        <h1 onClick={handleClick}>Budget App</h1>
        <span className="theme" onClick={handleclick}>
        { !toggle? <RiSunLine size={28} style={{cursor:"pointer"}} hand/>:<RiMoonLine size={28} style={{cursor:"pointer"}} onClick={handleclick}/>}
        </span>
      </div>
    </div>
  );
};

export default Navbar;