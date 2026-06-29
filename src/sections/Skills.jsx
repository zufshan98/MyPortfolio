import React from 'react'
import { motion } from 'framer-motion'
import Languages from '../assets/languages.png'
import Backend from '../assets/backend.png'
import Database from '../assets/database.png'
import Frontend from '../assets/frontend.png'
import Tools from '../assets/tools.png'

const Skills = () => {

  return (
      <section id='skills' className='w-full flex relative items-end justify-center'>

        {/** Wrapper Container */}
        <div className='bg-lightgreen relative w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-center items-center mt-22'>

          {/** Heading - Skills */}
          <motion.div
          initial={{opacity:0 , y:25}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.8}}
          viewport={{once:true , amount:0.4}} className='pt-10 pb-10'>
            <h1 className='text-white text-center font-semibold text-[30px] sm:text-[32px] md:text-[34px] lg:text-4xl'>Skills</h1>

            <h3 className='text-white text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>💡Everything I’ve learned and keep learning - to bring ideas to life.</h3>
          </motion.div>

          <div className='md:w-[87vw] lg:max-w-250 mx-auto flex flex-row flex-wrap justify-center gap-5 sm:gap-10 lg:gap-10 pb-8'>

            <div>
              <h4 className='text-white text-lg italic pl-5'>LANGUAGES</h4>
              <img src={Languages} alt="languages" className='w-[230px] lg:w-[260px]'/>
            </div>

            <div className='self-end'>
              <h4 className='text-white text-lg italic text-center'>BACKEND</h4>
              <img src={Backend} alt="backend tools" className='w-[150px] lg:w-[180px] pt-5'/>
            </div>

            <div className='self-center'>
              <h4 className='text-white text-lg italic text-right pr-15'>DATABASES</h4>
              <img src={Database} alt="database tools" className='w-[198px] lg:w-[228px]'/>
            </div>

            <div>
              <h4 className='text-white text-lg italic text-right pr-15'>FRONTEND</h4>
              <img src={Frontend} alt="frontend tools" className='w-[198px] lg:w-[228px]'/>
            </div>

            <div>
              <h4 className='text-white text-lg italic text-center pl-5'>TOOLS</h4>
              <img src={Tools} alt="tools" className='w-[198px]'/>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Skills
