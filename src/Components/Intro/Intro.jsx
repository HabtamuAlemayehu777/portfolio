import React from 'react'
import ReactDOM from 'react-dom'
import Linkdn from "./../../Asset/linkedin.png"
import './Intro.css'

function Intro() {
    return(
        <div className='full-content'>
            <div className='main-box'>
                <div className='border-left-radious border-right-radious'>
                    <h1 className='selamta'>Hi,</h1>
                    <h1 className='anim'>I am <span style={{color: "#33C3AC"}}>web Developer</span></h1>
                    <p className='description'>
                    I'm a web developer passionate about building clean, 
                    responsive, and user-friendly websites and web applications.
                    I specialize in front-end development with HTML, CSS, and JavaScript,
                    and have experience working with frameworks like React and Bs.
                    I enjoy turning complex problems into intuitive digital experiences
                    and continuously learning new technologies to improve my craft.
                    </p>
                    <div className='img-border'>
                        <img className='img-circle' src={Linkdn} alt="fsjkflj"/>
                    </div>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/yordanos-ayenew-89a97a358/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/YordanosAyenew"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro