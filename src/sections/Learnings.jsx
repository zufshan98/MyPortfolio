import React from 'react'
import { motion } from 'framer-motion'
import Gsoc from '../assets/gssoc.png'
import Java from '../assets/java.png'
import Certificate from '../assets/certificate.png'
import Bg from '../assets/bg10.png'
import Link from '../assets/link.png'
import Ellipse from '../assets/ellipse.png'

const Achievements = () => {
  return (
    <section id='learnings' className='w-full flex items-center justify-center'>
      
      {/** Wrapper Container */}
        <div className='w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-center items-center mt-20 gap-12'>
          
          {/** Heading - Learnings */}
          <motion.div
          initial={{opacity:0 , y:25}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.8}}
          viewport={{once:true , amount:0.4}} className='pt-3'>
            <h1 className='text-pink text-center font-semibold text-[30px] sm:text-[32px] md:text-[34px] lg:text-4xl'>Learnings</h1>
          
            <h3 className='text-black text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>🌱 Moments that reflect my growth, learning, and experiences along the way.</h3>
          </motion.div>

          <div className='w-[90%] sm:w-[85%] md:w-full lg:w-[90%] xl:w-[85%] mx-auto flex flex-wrap items-center mb-15 gap-8'>

            {/**Experience section */}
            <div className='w-full h-1/2 justify-center items-center flex flex-col md:flex-row gap-4'>
              
              <h2 className='text-2xl sm:text-3xl lg:text-4xl md:mt-32 mr-35 md:mr-10 lg:mr-10 xl:mr-20'>EXPERIENCE</h2>

              <motion.div 
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{delay:0.2, duration:0.8}}
              viewport={{once:true, amount:0.4}}
              className=' bg-darkgreen/70 p-8 xl:p-10 w-[90%] sm:w-[85%] md:w-1/3 rounded-4xl flex flex-col'>

                <div className='flex flex-col justify-around items-center gap-4 text-white px-3'>

                  <div className='w-full flex justify-center items-center gap-4'>
                    <img src={Gsoc} alt="" className='w-15 h-15'/>
                    <h4 className='font-semibold text-[18px]'>Contributor – Girlscript Summer of Code (2025)</h4>
                  </div>
                  <div className=''> 
                    <p className='font-light italic'>Contributed to open-source projects, collaborated with developers,raised pull requests and successfully merged it and enhanced real-world coding and teamwork skills.</p>
                  </div>
                </div>

              </motion.div>

              <motion.div 
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{delay:0.2, duration:0.8}}
              viewport={{once:true, amount:0.4}}
              className=' bg-darkgreen/70 p-8 xl:p-10 w-[90%] sm:w-[85%] md:w-1/3 rounded-4xl flex flex-col justify-center items-center'>

                <div className='flex flex-col gap-4 text-white px-3'>

                  <div className='w-full flex justify-center items-center gap-4'>
                    <img src={Java} alt="" className='w-15 h-15'/>
                    <h4 className='font-semibold text-[18px]'>Java Internship Trainee – BELTRON (2019)</h4>
                  </div>
                  <div className=''> 
                    <p className='font-light italic'>Worked in a team of three to build an online Examination Management System using Java and SQL, developing a student login, admin panel, and online exam features.</p>
                  </div>
                </div>

              </motion.div>

            </div>

            {/**Certificate section */}
            <div className='w-full h-1/2 justify-center items-center flex flex-wrap gap-4'>
              
              <h2 className='text-2xl sm:text-3xl lg:text-4xl md:mt-32 mr-35 md:mr-10 lg:mr-10 xl:mr-20'>CERTIFICATES</h2>

              <motion.div 
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{delay:0.4, duration:0.8}}
              viewport={{once:true, amount:0.4}}
              className=' bg-darkgreen/70 p-8 xl:p-10 w-[90%] sm:w-[85%] md:w-1/2 lg:w-[40%] rounded-4xl flex flex-col justify-center items-center gap-2 text-white'>
              
                <div className='w-full flex flex-col gap-1 px-3'>

                    <div className='flex gap-1 text-lg items-center'>
                        <a href='https://www.hackerrank.com/certificates/10dbfb697704'>
                          <p className='hover:text-white/70 font-light italic'>• CSS (Basic) -  Hackerrank</p>
                        </a>
                    </div>

                    <div className='flex gap-1 text-lg items-center'>

                        <a href='https://badges.parchment.com/public/assertions/hxc615fXRs6F1zkYYjD-iw'>
                          <p className='hover:text-white/70 font-light italic'>• API Fundamentals Student Expert -  Postman</p>
                        </a>
                    </div>

                    <div className='flex gap-1 text-lg items-center'>  
                      <a href='https://unstop.com/certificate-preview/a8e504f5-fabb-4144-b995-c7f60b5dd82b?utm_campaign=site-emails'>
                        <p className='hover:text-white/70 font-light italic'>• The Final Algorithm (Participation) -  Desu University</p>
                      </a>
                    </div>

                    <div className='flex gap-1 text-lg items-center'>
                      <p className='font-light italic'>• Web Development Course - College</p>  
                    </div>
                    
                </div>

              </motion.div>

              <h2 className='md:text-[7px] lg:text-2xl xl:text-4xl mb-28 ml-20 invisible'>CERTIFICATES</h2>
            </div>

          </div>

        </div>
    </section>
  )
}

export default Achievements
