import React, { useState } from 'react';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../_actions/users.action';


function Header(){

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false)

   function handleClick(){
      setVisible(true);
   }

   function handleClose(){
       setVisible(false);
   }

   function logout(){
    dispatch(userActions.logout());
   }

   return(
        <div className="header">
            <div className="header-panel" style={{backgroundImage:"linear-gradient(to right, darkOrchid , purple)", height:"50px", padding:"0.5rem",color:"white"}}>
                <div className="header-items">
                <i style={{cursor:"pointer"}} className="fa fa-bars" onClick={handleClick}></i>
                <label style={{marginLeft:"50px"}}>Sistem Informasi Kepegawaian</label>
                <div className="float-right items">
                    <div className="dropdown dropCustom">
                        <a href="#" id="dropdownMenuButton" data-toggle="dropdown">
                            <img style={{height:"30px",width:"30px",borderRadius:"100%"}} src="https://www.w3schools.com/w3images/avatar6.png"></img>
                        </a>
                            <div className="dropdown-menu dropCustoms" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                </div>
                <div className="float-right items">
                    <label>Dendi Madisanto</label>
                </div>
                <div className="notification float-right items">
                    <i className="fa fa-bell"></i>
                    <small className="msg">100</small>
                </div>
                </div>
            </div>
       <div className={`full-menu ${visible ? "appear" : ""}`}>
            <div className="btn-close">
                <i className="fa fa-remove fa-2x" style={{margin:"2rem",cursor:"pointer"}} onClick={handleClose}></i>
            </div>
            <div className="fullmenu-content">
                <div className="row">
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                <div className="col-md-3">
                <div className="card menu-item"></div>
                </div>
                </div>
 
            </div>
       </div>
       </div>
   );
}

export default Header;