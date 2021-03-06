import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Header.css';
import logo from '../Images/logo.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faChevronDown} from '@fortawesome/free-solid-svg-icons';
import RoomIcon from '@material-ui/icons/Room';

var bool=false;
var bool2=false;

function openAndCloseDropdown()
{
    console.log(bool)

    var divLocation=document.getElementById('div-location');
    var chevron=document.getElementById('chev');
    if(bool==false)
    {   
        bool=true;
        chevron.style.transform='rotate(180deg)';
        divLocation.style.border='2px solid rgb(17, 188, 255)';
    }
    else if(bool==true){
        bool=false;
        chevron.style.transform='rotate(360deg)';
        divLocation.style.border='2px solid black';
    }
    console.log(bool)

}

function changeInputColor()
{
    var location2Div=document.getElementById('location-2');

    if(bool2==false)
    {  
        bool2=true;
        location2Div.style.border='2px solid rgb(17, 188, 255)';
    }
    else{
        bool2=false;
        location2Div.style.border='2px solid black';
    }
}

class Header extends Component{
    
    render(){
        return(
            <div className="container-fluid container-1 sticky-top">
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2 my-auto">
                    <div className="img-div">
                        <img src={logo} alt=""/>
                    </div>
                </div>
    
                <div className="col-xl-3 col-lg-4 col-md-7 col-sm-6 d-none d-sm-block">
                    <div id="div-location" className="location">
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                        <input type="text" name=""  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={openAndCloseDropdown} placeholder=" Search City, area or loc...." />
                        <span className="down-chevron"><FontAwesomeIcon icon={faChevronDown} id="chev" /></span>
                        <div id="dropdown-location" className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <span className="dropdown-item loc">Recent Locations</span>
                            <a className="dropdown-item mt-3" href="#"><RoomIcon /> &nbsp;&nbsp;Sindh</a>
                            <div className="dropdown-divider"></div>
                            <span className="dropdown-item loc">Popular Locations</span>
                            <a className="dropdown-item mt-3" href="#"><RoomIcon />&nbsp;&nbsp;<span>Punjab</span></a>
                            <a className="dropdown-item mt-3" href="#"><RoomIcon />&nbsp;&nbsp;<span>Balochistan</span></a>
                            <a className="dropdown-item mt-3" href="#"><RoomIcon />&nbsp;&nbsp;<span>Islamabad</span></a>
                        </div>
                    </div>
                </div>
    
                <div className="col-xl-6 col-lg-3 d-none d-lg-block">
                    <div className="location-2" id="location-2">
                        <input type="text" name="" id="search" onClick={changeInputColor} placeholder=" Find Cars, Mobile Phones.." />
                        <span className="bg-search"><span><FontAwesomeIcon icon={faSearch} style={{color: "white"}} /></span></span>
                    </div>
                </div>
                <div className="col-xl-1 col-lg-2 col-md-2 col-sm-1 my-auto d-none d-sm-block">
                    <div className="login"><span>Login</span></div>
                </div>
    
                <div className="col-xl-1 col-lg-2 col-md-2 col-sm-4 col-10 my-auto">
                   <div className="control-btn">
                        <div className="login d-inline-block d-sm-none">
                            <span>Login</span>
                        </div>
    
                        <div className="sell d-inline-block">
                            <a href="">+ SELL</a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    
        )
    }
}

export default Header;
