import React from 'react'
import Hero from '../assets/hero-img.png'
import{ motion } from 'framer-motion'
import { FaEnvelope, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";


const socials = [
  {Icon : FaEnvelope , label : "Gmail" , href : "mailto:zufshannaaz00@gmail.com"},
  {Icon : FaLinkedin , label : "LinkedIn" , href : "https://www.linkedin.com/in/zufshan-naaz-89312818b/"},
  {Icon : FaGithub , label : "GitHub" , href : "https://github.com/zufshan98"},


]

const Home = () => {
  return (

    <section id='home' className='w-full max-h-[95vh] flex flex-col items-center justify-center'>

      {/** Main Hero Section (Text + Image) */}
      <div className='relative w-full flex flex-col items-center overflow-hidden'>

        {/** Text */}
        <div className='absolute top-1/25 lg:top-1/18 z-20 w-full flex flex-col justify-center px-8 sm:px-[19%] md:px-[22%] lg:px-[26%] xl:px-[30%]'> 

            <h2 className='text-[38px] sm:text-[42px] md:text-[44px] lg:text-[46px] xl:text-5xl typewriter mt-30 font-medium'>Frontend Developer...</h2>

            <motion.p 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.4, duration:0.8}}
            viewport={{once:true}}
            className='w-85 md:w-90 lg:w-95 xl:w-md text-[13px]/6 sm:text-[14px]/6 md:text-[15px]/6 lg:text-[16px]/6 xl:text-[18px]/6 mt-2 text-[#777]'>React Frontend Developer creating clean, responsive and user-focused web experiences.
            </motion.p>

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.8, duration:0.8}}
            viewport={{once:true}}
            className='flex space-x-6 mt-4'>

              <a href="/myResume.pdf" download className='px-3 py-1.5 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-lg bg-darkgreen hover:bg-darkgreen/75 rounded-xl text-white transition duration-300'>My Resume</a>

              <a href="#about" className='px-3 py-1.5 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-lg  bg-transparent border-2 border-darkgreen hover:bg-darkgreen/20 rounded-xl text-darkgreen transition duration-300'>About Me</a>
            </motion.div>

            
            
        </div> 

        {/** Image */}
        <div className='w-full bg-white flex items-center justify-center mt-80 sm:mt-72 md:mt-33 lg:mt-20'>

          <motion.img 
          initial={{opacity:0, y:60}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          viewport={{once:true}}
          src={Hero} alt="hero image" className='max-w-[90vw] xl:max-w-[95vw] h-[48vh] md:h-[90vh] object-contain select-none pointer-events-none'/> 

          {/** For xl screen - Line on the side besides icons */}
          <span className='hidden md:block absolute md:right-18  xl:right-30 top-1/2 h-12 w-0.5 bg-pink'></span>
        </div>

      </div>

      <div className='flex flex-col items-center gap-4'>
        {/** For sm and below screen - Line at the bottom above icons */}
      <span className='w-12 h-0.5 bg-pink md:hidden'></span>

      {/** Icons */}
      <motion.div className='md:absolute md:top-1/2 md:right-8 md:left-auto md:-translate-y-1/2 md:translate-x-0 lg:top-1/2 xl:right-20 xl:top-1/2 flex md:flex-col gap-5 text-2xl text-blank justify-center lg:justify-start text-darkgreen'>

        {socials.map(({Icon , label, href}) => (
          <motion.a 
            initial={{opacity:0, y:60}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            href={href}
            key={label}
            target="_blank"
            rel="noopener noreferrer"
            className='hover:scale-110' >
              <Icon/>
          </motion.a>
        ))}

      </motion.div>
      </div>
      

    </section>
  )
}

export default Home
