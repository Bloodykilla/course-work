import React, {useContext, useState} from 'react'
import { useHistory, useLocation } from 'react-router'

import { NavLink } from 'react-router-dom'
import AuthImg from '../assets/img/auth-img.jpg'
import { LOGIN_ROUTE, ADMIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from '../utils/const'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer'
import { login, registration } from '../http/userApi'
import { Context } from '..'
import { observer } from 'mobx-react-lite'


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()

    

    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)

        } catch (e) {
            alert(e.response.data.message)
        }

    }
        
    return (
        <>
        <NavBar />
        <section className="auth"> 
            <div className="auth-area" style={{boxShadow:'5px 4px 39px 0px rgba(101, 94, 89, 0.13)'}}>  
                <div className="auth-info">
                     <div className="title-text">
                            <h3>Welcome to <span>WE</span><span>TRVL</span></h3>
                            <h6>EXPLORE NEW HORIZONTS WITH US</h6>
                        </div>
                    <form className="form">
                        <h6>User name</h6>
                        <input type="email" 
                        class="text email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        />
                        <h6>Password</h6>
                        <input type="password" 
                        class="text password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        /> 
                    </form>
               
                    <div className="prop-section">
                    {isLogin ?
                    <div>
                    <a>Does not have an account?</a><NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                    </div>
                    : 
                    <div>
                    <a>You have already an account?</a><NavLink to={LOGIN_ROUTE}>Login!</NavLink>
                </div>
                    }
                    <div className="buttons">
                    <button className="btn" 
                    onClick={click}
                    >
                        
                       {isLogin ? "Login":"Sign Up"}
                    </button>
                   
                    </div>
                    </div>
                </div>
                <div className="auth-sidebar">
                     <div className="figure">
                        <img src={AuthImg} class="auth-img" styles={"height:640px"}/>
                        </div>
                    </div>
                 </div>
        </section>
        <Footer/>
         
         </>
    )
})
export default Auth;