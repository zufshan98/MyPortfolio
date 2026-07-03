import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

const socials = [
  {Icon : FaEnvelope , label : "Gmail" , href : "mailto:zufshannaaz00@gmail.com"},
  {Icon : FaLinkedin , label : "LinkedIn" , href : "https://www.linkedin.com/in/zufshan-naaz-89312818b/"},
  {Icon : FaGithub , label : "GitHub" , href : "https://github.com/zufshan98"},

]

const Footer = () => {
  return (
    <section id='footer' className='w-full flex relative items-center justify-center bg-pink text-white'>
      
      {/** Wrapper Container */}
        <div className=' relative w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-center items-center mt-12 mb-10 gap-5 bg-pink'>

          <div className='w-[70%] flex items-center justify-between'>

            <div className='w-full flex flex-col gap-5 '>
              <h3>Quick Links</h3>

              <div className='w-full flex flex-col'>

                <a href="#home" className='relative transition duration-500 hover:underline group'>
                  <span>Home</span>
                </a>   
                <a href="#about" className='relative transition duration-500 hover:underline group'>
                  <span>About</span>
                </a>
                <a href="#skills" className='relative transition duration-500 hover:underline group'>
                  <span>Skills</span>
                </a>
                <a href="#projects" className='relative transition duration-500 hover:underline group'>
                  <span>Projects</span>
                </a>
                <a href="#learnings" className='relative transition duration-500 hover:underline group'>
                  <span>Learnings</span>
                </a>
                <a href="#contact" className='relative transition duration-500 hover:underline group'>
                  <span>Contact</span>
                </a>
              </div>
              
            </div>

            <div className='w-full flex flex-col gap-5'>

              <h3>Connect with me!</h3>
              <div className='w-full flex items-center gap-4 text-2xl'>
                {socials.map(({Icon , label, href}) => (
                  <a 
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className='hover:scale-110'>
                    <Icon/>
                  </a>
                ))}
              </div>
              
            </div>

          </div>

          <p>Thanks for visiting!</p>
          <p>© 2025 Zufshan Naaz — Designed & Coded with 💖</p>

        </div>


    </section>
  )
}

export default Footer
