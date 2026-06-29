import React from 'react'
import { motion } from 'framer-motion'
import Mobile from '../assets/mobile.png'

const Contact = () => {
  return (
    <section id='contact' className='w-full flex relative items-center justify-center'>
      
      {/** Wrapper Container */}
        <div className=' relative w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-center items-center mt-22 gap-6 bg-pink'>

          {/** Heading - Contact*/}
          <motion.div
          initial={{opacity:0 , y:25}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.8}}
          viewport={{once:true , amount:0.4}} className='pt-10'>
            <h1 className='text-black text-center font-semibold text-[30px] sm:text-[32px] md:text-[34px] lg:text-4xl'>Get In Touch</h1>
          
            <h3 className='text-white text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>I’d love to connect with you! Whether you have a question, an opportunity, or just want to chat about web development — drop me a message.</h3>
          </motion.div>

          <div className='w-[90%] md:w-[80%] xl:w-[70%] flex justify-center items-center mt-5'>

            <div className='w-[140%] flex flex-col justify-center items-center'>

              <form action={SubmitEvent} className='w-[95%] sm:w-[80%] md:w-[95%] lg:w-[80%] h-[90%] flex flex-col justify-center items-center bg-white rounded-4xl p-5 py-7 md:py-8 lg:py-10 gap-5'>

                
                <label className='text-[16px] sm:text-[17px] md:text-lg'>Name :
                  <input name='fullName' placeholder='Enter your full name' className='w-[77%] sm:w-[78%] md:w-[75%] h-12 bg-darkgreen rounded-xl px-5 ml-2' />
                </label>
                  
               
                <label className='text-[16px] sm:text-[17px] md:text-lg'>Email :
                  <input type='email' name='email' placeholder='Enter your email' className='w-[79%] sm:w-[78%] md:w-[77%] h-12 bg-darkgreen rounded-xl px-5 ml-2' />
                </label>
               
                
                <textarea name="message" id="yourMessage" className='w-[86%] sm:w-[78%] md:w-[85%] lg:w-[83%] h-35 bg-darkgreen rounded-xl pl pl-4 pt-3' placeholder='Type the message here'></textarea>

                <button type='submit' className='w-[86%] sm:w-[78%] md:w-[85%] lg:w-[83%] h-12 bg-pink rounded-xl'> Send message</button>

                
                

              </form>
            </div>

            <div className='w-full flex-col justify-center items-center hidden md:block'>
              <img src={Mobile} alt="" />
            </div>
            
          </div>

          <p className='text-white mt-5'>Let’s collaborate, create, and grow together. 🌸</p> 
         
          <span className='w-[90%] h-0.5 bg-white'></span>


        </div>
    </section>
  )
}

export default Contact
