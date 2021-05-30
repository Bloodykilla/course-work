import React, { useContext } from 'react'
import {Context} from '../index'
import {observer} from 'mobx-react-lite';
import { ADMIN_ROUTE, FAQ_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SUPPORT_ROUTE, TOURS_ROUTE } from '../utils/const';
import { Link} from 'react-router-dom';
const NavBar = observer(() => {
    const {user} = useContext(Context)
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
                        <i class="fas fa-shopping-basket"></i>
                        &nbsp;&nbsp;
                        <i class="fas fa-user"></i> 
                        &nbsp;&nbsp;
                        <Link to ={ADMIN_ROUTE}>
                            <button className="btns"><a>Admin</a></button>
                        </Link>
                        &nbsp;&nbsp;
                        <button className="btns"onClick={() => user.setIsAuth(false)}><a>Logout</a></button>
                       
                    </div>
                :
                <div className="user-btns">
                  <a style={{fontSize:'1.5rem', cursor:'pointer'}} onClick={() => user.setIsAuth(true)}>Login</a>
                    <span>or</span>
                   <Link to={REGISTRATION_ROUTE}>
                    <button className="btns"><a>Sign Up</a></button>
                    </Link>
                </div>
            }
            </div>
            </div>
        </nav>
    );
})
export default NavBar;
