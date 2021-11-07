import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { RiSunLine ,RiMoonLine} from "react-icons/ri";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

const Navbar = () => {
    let history = useHistory()
    const handleClick = ()=>{
        history.push('/')
    }
    let [toggle,settoggle]=useState(false)
    let {theme,settheme}=useContext(GlobalContext)
    const handleclick = ()=>{
        settoggle(!toggle)
        settheme(!toggle)
        console.log(theme);
    }

  return (
    <div className={"navbar "+ theme}>
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