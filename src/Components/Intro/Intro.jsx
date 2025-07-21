import React from 'react'
import ReactDOM from 'react-dom'
import './../../Asset/fontawesome-free-6.7.2-web/css/all.min.css'
import './Intro.css'

function Intro() {
    return(
        <div className='full-content'>
            <div className='main-box'>
                <div>
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
                    <div className='social-icons'>
                        <a href="https://www.linkedin.com/in/HabtamuAlemayehu777/" target='blank'>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='https://github.com/HabtamuAlemayehu777' target='blank'>
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href='href="https://www.instagram.com/in/HabtamuAlemayehu777/' target='blank'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href='https://x.com/HabtamuAlemayehu777' target='blank'>
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                    <a href='./asset.cv' className='btn-download' download='Habtamu_Alemayehu_CV.pdf'>Download Cv</a>
                </div>
            </div>
        </div>
    )
}

export default Intro