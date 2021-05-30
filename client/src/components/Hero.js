import React from 'react'
import Earth from '../assets/img/earth.png'

function Hero() {
    return (
        <section className="Hero">
            <div className="hero-container">
                <div className="figure">
                    <img src={Earth} className="earth"></img>
                    <div className="hero-text">
                        <p>explore</p> <p>new</p> <p>horizonts</p> <p> with us</p>
                    </div>
                </div>
            </div>
        </section>
        
    )

}

export default Hero
