import React from 'react'
import { motion } from 'framer-motion'
import Gsoc from '../assets/gssoc.png'
import Java from '../assets/java.png'
import Certificate from '../assets/certificate.png'
import Bg from '../assets/bg10.png'

const Achievements = () => {
  return (
    <section id='learnings' className='w-full flex items-center justify-center'>
      
      {/** Wrapper Container */}
        <div className='w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-center items-center mt-20 gap-14'>
          
          {/** Heading - Learnings */}
          <motion.div
          initial={{opacity:0 , y:25}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.8}}
          viewport={{once:true , amount:0.4}} className='pt-10'>
            <h1 className='text-pink text-center font-semibold text-[30px] sm:text-[32px] md:text-[34px] lg:text-4xl'>Learnings</h1>
          
            <h3 className='text-black text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>🌱 Moments that reflect my growth, learning, and experiences along the way.</h3>
          </motion.div>

          <div className='w-full mx-auto flex flex-wrap justify-around py-14 mb-15'>

            <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:0.5, duration:0.8}}
            viewport={{once:true}}
            className=' bg-darkgreen/88 p-10 h-95 w-95 rounded-full flex flex-col justify-center items-center md:gap-10'>

              <div className='flex flex-col justify-around items-center gap-4 text-white'>

                <div className='w-full flex-col justify-around items-center'>
                  <img src={Gsoc} alt="" className='w-15 h-15 mx-auto rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-5'/>
                  <h4 className='font-semibold text-[18px] text-center'>Contributor – Girlscript Summer of Code (2025)</h4>
                </div>
                <div> 
                  <p className='font-light italic text-center'>Contributed to open-source projects, collaborated with developers, and enhanced real-world coding and <br /> teamwork skills.</p>
                </div>
              </div>

            </motion.div>

            <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:0.5, duration:0.8}}
            viewport={{once:true}}
            className=' bg-darkgreen/88 p-10 h-95 w-95 rounded-full flex flex-col justify-center items-center gap-4 text-white'>

              <div className='w-full flex-col justify-around items-center'>
                  <img src={Java} alt="" className='w-15 h-15 mx-auto rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-5'/>
                  <h4 className='font-semibold text-[18px] text-center'>Java Internship Trainee – BELTRON (2019)</h4>
              </div>
              <div> 
                  <p className='font-light italic text-center'>Worked in a team of three to build an online Examination Management System using Java and SQL, developing a student login, admin panel, and online <br /> exam features.</p>
              </div>
            
            </motion.div>

            <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:0.5, duration:0.8}}
            viewport={{once:true}}
            className=' bg-darkgreen/88 p-10 h-95 w-95 rounded-full flex flex-col justify-center items-center gap-2 text-white'>
            
              <div className='w-full flex-col justify-around items-center'>
                  <img src={Certificate} alt="" className='w-15 h-15 mx-auto rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-5'/>
                  <h4 className='font-semibold text-[18px] text-center'> Certifications</h4>
              </div>
              <div> 
                  <p className='font-light italic text-center'>🎓 CSS (Basic) – Hackerrank (2024) <br />
                  🔗 API Fundamentals Student Expert – Postman (2024) <br />
                  💡 The Final Algorithm (Participation) – Desu University (2023) <br />
                  🌸 Web Development Certification – College (2017)</p>
              </div>


            </motion.div>

          </div>

        </div>
    </section>
  )
}

export default Achievements
