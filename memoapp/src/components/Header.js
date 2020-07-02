import React from 'react'
import {slide as Menu } from 'react-burger-menu'
import logo2 from '../img/logo2.png';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom'

class Header extends React.Component {
   
    showSettings(event) {
        event.preventDefault();
        
    }
    render(){
            return(
                <header>
                        <div id="logoDiv">
                            <Link id="logo" to="/App"><img src={logo2} alt=""/></Link>
                        </div>
                    <div id="header-menu-wrap">

                    <nav id="menu-top">      
                            <ul>
                                <li id="menuElement1"><a href="http://lnb.cba.pl/">LnB</a></li>
                                <li id="menuElement2"><Link to="/Kalkulator">Kalkulator</Link></li>
                                <li id="menuElement4"><Link to="/MemeGenerator">MemeGenerator</Link></li>
                                <li id="menuElement7"><Link to="/App">React.js</Link></li>
                            </ul>
                    </nav>  
                    <div className="menuWraper">
                    <Menu> 
                            <ul>
                                <li id="menuElement1"><a href="http://lnb.cba.pl/">LnB</a></li>
                                <li id="menuElement2"><Link to="/Kalkulator">Kalkulator</Link></li>
                                <li id="menuElement4"><Link to="/MemeGenerator">MemeGenerator</Link></li>
                                <li id="menuElement7"><Link to="/App">React.js</Link></li>
                            </ul>
                     </Menu>
                     </div>
                     </div>    
                </header>
            )
        }
}

export default Header
