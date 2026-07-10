import React from 'react'
import Girl from '../assets/girl1.png'
import Bubble from '../assets/bubble2.png'
import { IoSchool } from "react-icons/io5";
import { RiSeedlingLine } from "react-icons/ri";
import { motion } from 'framer-motion'

const About = () => {
  return (

    <section id='about' className='w-full flex relative items-center justify-center'>

      {/** Wrapper Container */}
      <div className='relative w-200 sm:w-180 md:w-280 mx-auto px-6 md:px-10 lg:px-12 pt-20 pb-8 flex flex-col gap-10'>

        {/** Heading - About Me */}
        <motion.div
        initial={{opacity:0 , y:25}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.8}}
        viewport={{once:true , amount:0.4}}>
          <h1 className='text-darkgreen text-center mt-6 lg:mt-10 font-semibold text-[30px] sm:text-[32px] md:text-[34px] lg:text-4xl'>About Me</h1>

          <h3 className='text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>🌸 Here’s a little about where I come from, what I’ve learned, and where I dream to go next.</h3>
        </motion.div>  

        {/** Bubble */}
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.8}}
          viewport={{once:true, amount:'all'}}>
            <img src={Bubble} alt="bubble shape" className='absolute w-84 sm:w-93 md:w-88 lg:w-95 top-40 md:top-35 lg:top-38 left-46 sm:left-62 md:left-40 lg:left-54' />

            <h3 className='absolute left-78 sm:left-98 md:left-75 lg:left-94 top-65 sm:top-68 md:top-61 lg:top-66 z-10 text-white font-semibold italic text-[20px] lg:text-2xl'>Hi,</h3>

            <p className='absolute w-52 text-center left-63 sm:left-84 md:left-60 lg:left-80 top-74 sm:top-78 md:top-70 lg:top-76 z-10 text-white font-semibold italic text-[17px] lg:text-xl'>My name is Zufshan Naaz</p>

          </motion.div>

        {/** Content  */}
        <div className='flex flex-col md:flex-row relative w-full justify-around items-center mt-15 md:mt-10'>


          {/** Image Part */}
          <motion.div 
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1}}
          viewport={{once:true, ease: 'easeIn'}}
          className=' ml-10 sm:ml-20 md:ml-0 self-start my-auto'>
            <img src={Girl} alt="" className='w-70 sm:w-76 md:w-200 lg:w-230'/>
          </motion.div>

          {/** Description Part */}
          <div className='flex flex-col flex-wrap pl-8 sm:pl-10 md:pl-4 lg:pl-12 sm:pr-4 md:pr-0  '>
            
            <motion.p 
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            transition={{ duration:0.8}}
            viewport={{once:true, amount:0.2}}
            className='md:mb-2 text-sm md:text-[16px] mt-5 md:mt-10'>I'm a Frontend Developer who enjoys building clean, responsive, and accessible web applications. I like transforming ideas into intuitive digital experiences using React, JavaScript, and modern web technologies.</motion.p>

            <div className='flex flex-row gap-1'>

              <div className='flex flex-col gap-4'>

                <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:0.4, duration:0.8}}
                viewport={{once:true}}
                className='mt-3 text-sm md:text-[16px]'>As I continue expanding my full-stack development skills, I also strengthen my problem-solving abilities through Data Structures and Algorithms while building projects that combine functionality with thoughtful design.</motion.p>

                <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:0.5, duration:0.8}}
                viewport={{once:true}}
                className='relative md:mt-3 flex gap-6'>

                  <a href="#projects" className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-lg bg-darkgreen hover:bg-darkgreen/75 rounded-xl text-white transition duration-300'>My Projects</a>

                  <a href="#contact" className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-lg  bg-transparent border-2 border-darkgreen hover:bg-darkgreen/20 rounded-xl text-darkgreen transition duration-300'>Contact Me</a>

                </motion.div>

              </div>

              <motion.div 
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.8}}
              viewport={{once:true}}
              className='px-2 ml-1 bg-transparent border-2 border-pink border-dashed w-34 md:w-38 h-34 md:h-38 rounded-full flex items-center justify-center '>

                  <p className='text-lightgreen text-center text-[10.5px] md:text-[12px] w-33'><span><RiSeedlingLine className='inline mr-1 text-lg'/></span>When I’m not <br /> coding, I find joy in creative hobbies like crochet, calligraphy & graphic design.</p>

              </motion.div>
              
            </div>
            
          </div>

        </div>

        {/** My Education */}
        <div className=' relative w-full rounded-3xl flex flex-col items-center gap-8 mx-auto px-4 pt-10'>

          <motion.h4 
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          transition={{delay:0.2, duration:0.8}}
          viewport={{once:true, amount:0.1}}
          className='font-semibold text-xl italic self-start mb-5 pl-8 sm:pl-13'>My Education</motion.h4>
          

          <motion.div 
          initial={{opacity:0.3}}
          whileInView={{opacity:1}}
          transition={{delay:0.6, duration:0.8}}
          viewport={{once:true, amount:'all'}}
          className='self-start w-40 sm:w-45 md:w-60 lg:w-80 mx-8 sm:mx-15 md:mx-22 lg:mx-35 text-center text-white bg-pink p-4 rounded-2xl'>
            <h2 className='font-semibold text-lg/4 md:text-xl/5 '>Bachelor of Computer Applications (BCA)   </h2>
            <p className='text-[13px] md:text-sm font-light'>Patna Womens College | 2017-2020</p>
            <p className='text-[14px] md:text-[15px] italic'>Grade: 80%</p>
          </motion.div>

          <div className='relative w-full'>

            <div className=''>
              <div className='flex flex-row w-full h-1.5 bg-black/30 rounded-full'>
              </div>

              <motion.div 
              initial={{opacity:0.3}}
              whileInView={{opacity:1}}
              transition={{delay:0.6, duration:0.8}}
              viewport={{once:true}}
              className='absolute -bottom-7 left-[30%] flex flex-col justify-center items-center'>
                <span className='w-0.5 h-10 bg-black/60'></span>
                <IoSchool className='text-3xl text-black/60'/>
              </motion.div>

              <motion.div 
              initial={{opacity:0.3}}
              whileInView={{opacity:1}}
              transition={{delay:0.6, duration:0.8}}
              viewport={{once:true}}
              className='absolute -top-7 left-[70%] flex flex-col justify-center items-center'>
                <IoSchool className='text-3xl text-black/60'/>
                <span className='w-0.5 h-10 bg-black/60'></span>
              </motion.div>
              
            </div>

          </div>

          <motion.div 
          initial={{opacity:0.3}}
          whileInView={{opacity:1}}
          transition={{delay:0.04, duration:0.8}}
          viewport={{once:true, amount:1}}
          className='self-end w-40 sm:w-45 md:w-60 lg:w-80 mx-8 sm:mx-15 md:mx-22 lg:mx-35 text-center text-white bg-pink p-4 md:p-4 rounded-2xl'>
            <h2 className='font-semibold text-lg/4 md:text-xl/5 '>Master of <br />Computer Applications (MCA) </h2>
            <p className='text-[13px] md:text-sm font-light'>Patna University | 2022-2024</p>
            <p className='text-[14px] md:text-[15px] italic'>Grade: 9.02 CGPA</p>
            </motion.div>

          </div>

      </div>


    </section>
  )
}

export default About
