import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { RiSunLine ,RiMoonLine} from "react-icons/ri";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
import { FiSettings } from "react-icons/fi";

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
        <div className="icons">
        <span className="theme" >
        { !toggle? <RiSunLine size={28} style={{cursor:"pointer" }} onClick={handleclick}/>:<RiMoonLine size={28} style={{cursor:"pointer",margin:"0px 10px"}} onClick={handleclick}/>}
        <span className="settings" style={{marginLeft:"20px"}}>
          <FiSettings size={28}/>
        </span>
        </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;