import React from 'react';
import { FiArrowRight  } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import diceImg from '../images/twenty-sided-dice.svg';
import '../styles/pages/Landing.css';

function Landing(){
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={diceImg} alt="epic sheets" />
                <main>
                    <h1>Start your adventure now!</h1>
                    <p>An easy way to create and store your RPG character sheets.</p>
                </main>

                <div className="auth">
                    <Link to="#" ><strong>Login</strong></Link>
                    <Link to="#" ><strong>Sign Up</strong></Link>
                </div>
    
            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgb(255,255,255)" />
            </Link>
            </div>

        </div>
    )
}

export default Landing;