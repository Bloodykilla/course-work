import React, { useContext } from 'react'
import {Context} from '../index'
import {observer} from 'mobx-react-lite';
import {BASKET_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SUPPORT_ROUTE, TOURS_ROUTE, USER_ROUTE } from '../utils/const';
import { Link, useHistory} from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        history.push(MAIN_ROUTE)
    }
    return (
        <nav>
            <div className="Navbar">
                <div className="nav-left">
                <Link to={MAIN_ROUTE}>
                <div className="logo">
                    <span>WE</span>
                    <span>TRVL</span>
                    </div>
                    </Link>
                <ul className="nav-menu">
                    
                    <Link to = {MAIN_ROUTE}>
                        <li className="menu-item">Home</li>
                    </Link>

                    <Link to = {TOURS_ROUTE}>
                        <li className="menu-item">Tours</li>
                    </Link>

                    <Link to = {FAQ_ROUTE}>
                        <li className="menu-item">FAQ</li>
                    </Link>

                    <Link to = {SUPPORT_ROUTE}>
                        <li className="menu-item">Support</li>
                    </Link>
                    
                
                </ul>  

                </div>
             
              
                <div className="nav-right">
                {user.isAuth ?
                    <div className="user-btns">
                        <Link to  ={BASKET_ROUTE}>
                        <i class="fas fa-shopping-basket" style={{color:"#222222"}}></i>
                        </Link>
                        &nbsp;&nbsp;
                        <Link to = {USER_ROUTE}>
                        <i class="fas fa-user" style={{color:"#222222"}}></i> 
                        </Link>
                        &nbsp;&nbsp;
                        <button className="btns"onClick={() => logOut()}><a>Logout</a></button>
                       
                    </div>
                :
                <div className="user-btns">
                  <a style={{fontSize:'1.5rem', cursor:'pointer'}} onClick={() => history.push(LOGIN_ROUTE)}>Login</a>
                    <span>or</span>

                    <button className="btns" onClick={() => history.push(REGISTRATION_ROUTE)}><a>Sign Up</a></button>

                </div>
            }
            </div>
            </div>
        </nav>
    );
})
export default NavBar;
