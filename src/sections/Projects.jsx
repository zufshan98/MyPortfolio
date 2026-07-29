import React from 'react'
import { motion } from 'framer-motion'
import Macbook1 from '../assets/macbook 1.png'
import Mealbook from '../assets/Mealbook.png'
import Bingely from '../assets/Bingely.png'
import TicTacToe from '../assets/tictactoe.png'
import RockPaperScissor from '../assets/rockpaperscissor.png'
import CurrencyConverter from '../assets/currencyconverter.png'

const Projects = () => {
  return (
    <section id='projects' className='w-full flex relative items-center justify-center'>
      
      {/** Wrapper Container */}
        <div className=' relative w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-center items-center mt-14 gap-15'>

          {/** Heading - Projects */}
          <motion.div
          initial={{opacity:0 , y:25}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.8}}
          viewport={{once:true , amount:0.4}} className='pt-10'>
            <h1 className='text-black text-center font-semibold text-[30px] sm:text-[32px] md:text-[34px] lg:text-4xl'>Projects</h1>

            <h3 className='text-black text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>🌿 A collection of projects built while learning, experimenting, and growing as a developer.</h3>
          </motion.div>

          <div className='w-full xl:w-6xl mx-auto'>
            <div className=' bg-pink/20 p-6 rounded-2xl flex flex-col justify-center items-center gap-10'>

             <motion.div 
             initial={{opacity:0 , y:25}}
             whileInView={{opacity:1 , y:0}}
             transition={{duration:0.8}}
             viewport={{once:true , amount:0.4}}
             className='flex flex-col items-center justify-center'
             >
              <h2 className='text-3xl text-darkgreen font-semibold'>
                🎬 Bingely
              </h2>
              <h4 className='text-black text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>
                AI-Powered Entertainment Discovery Platform
              </h4>

             </motion.div>

             <div className='flex flex-col lg:flex-row gap-8'>

              <div className='w-full flex flex-col items-center gap-3'>

                <div className='w-full px-4'>
                  <img src={Bingely} alt="" className='mx-auto rounded-2xl'/>
                </div>

                  <motion.div 
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{delay:0.1, duration:0.8}}
                    viewport={{once:true}}
                    className='md:mt-3 flex gap-6'>
                  
                      <a href="https://bingely-phi.vercel.app/" download className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/85 rounded-full text-white transition duration-300'>🔗 Live Demo</a>
                  
                      <a href="https://github.com/zufshan98/Bingely" className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/85 rounded-full text-white transition duration-300'>💻 GitHub Repo</a>
                  
                  </motion.div>

              </div>

              <div className='w-full flex flex-col flex-wrap'>

                <div className='w-full text-white flex flex-wrap gap-1'>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>React</div>
                    <div className='rounded-xl bg-pink/60
                    py-1 px-2 text-xs mr-1'>Redux Toolkit</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>Tailwind CSS</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>Firebase Authentication</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>TMDB API</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>Groq API</div>
                    {/**<div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>React Router</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>Framer Motion</div>*/}

                  </div>

                  <motion.div 
                  initial={{opacity:0 , y:25}}
                  whileInView={{opacity:1 , y:0}}
                  transition={{duration:1}}
                  viewport={{once:true , amount:0.4}}
                  className='gap-1 mb-2 '>
                    <h4 className='italic text-pink font-medium pt-2'>About :</h4>
                    <p className='text-[15px]/5'>Bingely is an AI-powered entertainment discovery platform for movies, TV shows, and K-dramas. The interface is inspired by Netflix while introducing intelligent recommendations, natural language search, multilingual support, and a seamless streaming experience powered by the Groq AI API.</p>
                  </motion.div>

                  <motion.div 
                  initial={{opacity:0 , y:25}}
                  whileInView={{opacity:1 , y:0}}
                  transition={{duration:1.2}}
                  viewport={{once:true , amount:0.4}}
                  className='gap-1 mb-2'>
                    <h4 className='italic text-pink font-medium text-[15px]/5'>Key Features :</h4>
                    <p>🤖 GPT Search : AI-powered search using natural language <br />
                      🔐 Secure user authentication with Firebase <br />
                      🎬 Browse movies, TV shows & K-dramas of different genres  <br />
                      🌐  Multi-language support in Gpt search page<br />
                      ▶️ Autoplay trailers & interactive hover previews <br />
                      🎥 Detailed content pages with similar recommendations <br />
                      📱 Fully responsive Netflix-inspired interface</p>
                  </motion.div>

                  
                </div>
             </div>

              
              
            </div>
          </div>

          <div className='w-full xl:w-6xl mx-auto'>
            <div className=' bg-pink/20 p-10 rounded-2xl flex flex-col justify-center items-center gap-10'>

             <motion.h2 
             initial={{opacity:0 , y:25}}
             whileInView={{opacity:1 , y:0}}
             transition={{duration:0.8}}
             viewport={{once:true , amount:0.4}}
             className='text-3xl text-darkgreen font-semibold'>MealBook Recipe Web  App</motion.h2>

             <div className='flex flex-col lg:flex-row gap-8'>

              <div className='w-full flex flex-col items-center gap-3'>

                <div className='w-full'>
                  <img src={Mealbook} alt="" className='mx-auto rounded-2xl'/>
                </div>

                  <motion.div 
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{delay:0.1, duration:0.8}}
                    viewport={{once:true}}
                    className='md:mt-3 flex gap-6'>
                  
                      <a href="/myResume.pdf" download className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/85 rounded-full text-white transition duration-300'>🔗 Live Demo</a>
                  
                      <a href="https://github.com/zufshan98/MealBook" className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/85 rounded-full text-white transition duration-300'>💻 GitHub Repo</a>
                  
                  </motion.div>

              </div>

              <div className='w-full flex flex-col flex-wrap'>

                <div className='w-full text-white flex flex-wrap gap-1'>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>HTML</div>
                    <div className='rounded-xl bg-pink/60
                    py-1 px-2 text-xs mr-1'>CSS</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>JavaScript</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>Node.js</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>MySQL(phpMyAdmin)</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>Edamam API</div>
                  </div>

                  <motion.div 
                  initial={{opacity:0 , y:25}}
                  whileInView={{opacity:1 , y:0}}
                  transition={{duration:1}}
                  viewport={{once:true , amount:0.4}}
                  className='gap-1 mb-2 '>
                    <h4 className='italic text-pink font-medium pt-2'>About :</h4>
                    <p className='text-[15px]/5'>A full-stack recipe and meal-planning application that helps users discover recipes, plan weekly meals, and generate grocery lists. Built with Node.js for backend and MySQL for persistent data storage.</p>
                  </motion.div>

                  <motion.div 
                  initial={{opacity:0 , y:25}}
                  whileInView={{opacity:1 , y:0}}
                  transition={{duration:1.2}}
                  viewport={{once:true , amount:0.4}}
                  className='gap-1 mb-2'>
                    <h4 className='italic text-pink font-medium text-[15px]/5'>Key Features :</h4>
                    <p>🔎 Recipe search with filters (Edamam API) <br />
                      📅 Weekly meal planner with editable slots <br />
                      🛒 Grocery list generator <br />
                      ❤️ Save and manage favorite recipes <br />
                      👤 User authentication with profile</p>
                  </motion.div>
   
                </div>
             </div>
    
            </div>
          </div>

          <div className='w-full mx-auto flex flex-col md:flex-row flex-wrap pb-15 gap-2'>

            <div className='w-[410px] mx-auto'>

              <div className=' bg-pink/20 p-10 rounded-2xl flex flex-col justify-center items-center gap-6'>

              <motion.h2 
              initial={{opacity:0 , y:25}}
              whileInView={{opacity:1 , y:0}}
              transition={{duration:0.8}}
              viewport={{once:true , amount:0.4}}
              className='text-3xl text-darkgreen font-semibold'>Tic Tac Toe</motion.h2>

              <div className='flex flex-col gap-8'>

                <div className='w-full flex flex-col items-center gap-3'>

                  <div className='w-full'>
                    <img src={TicTacToe} alt="" className='mx-auto rounded-2xl'/>
                  </div>

                </div>

                <div className='w-full flex flex-col'>

                  <div className='w-full text-white flex flex-wrap gap-1'>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>HTML</div>
                    <div className='rounded-xl bg-pink/60
                    py-1 px-2 text-xs mr-1'>CSS</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>JavaScript</div>
                  </div>

                    <motion.div 
                    initial={{opacity:0 , y:25}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:1}}
                    viewport={{once:true , amount:0.4}}
                    className='gap-1 mb-2 '>
                      <h4 className='italic text-pink font-medium pt-2'>About :</h4>
                      <p className='text-[15px]/5'>This is a responsive Tic Tac Toe game built using HTML, CSS, and Vanilla JavaScript. It allows two players to take turns, tracks wins and draws, and provides options to reset or start a new game.</p>
                    </motion.div>

                   <motion.div 
                      initial={{opacity:0, y:20}}
                      whileInView={{opacity:1, y:0}}
                      transition={{delay:0.5, duration:0.8}}
                      viewport={{once:true}}
                      className='md:mt-3 flex gap-6'>
                    
                        <a href="https://zufshan98.github.io/TicTacToe/" download className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/75 rounded-full text-white transition duration-300'>🔗 Live Demo</a>
                    
                        <a href="https://github.com/zufshan98/TicTacToe" className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/75 rounded-full text-white transition duration-300'>💻 GitHub Repo</a>
                    
                    </motion.div>
                    
                  </div>
              </div>

                
                
              </div>
            
            </div>

             <div className='w-[410px] mx-auto'>

              <div className=' bg-pink/20 p-10 rounded-2xl flex flex-col justify-center items-center gap-6'>

              <motion.h2 
              initial={{opacity:0 , y:25}}
              whileInView={{opacity:1 , y:0}}
              transition={{duration:0.8}}
              viewport={{once:true , amount:0.4}}
              className='text-3xl text-darkgreen font-semibold'>Rock Paper Scissors</motion.h2>

              <div className='flex flex-col gap-8'>

                <div className='w-full flex flex-col items-center gap-3'>

                  <div className='w-full'>
                    <img src={RockPaperScissor} alt="" className='mx-auto rounded-2xl'/>
                  </div>

                </div>

                <div className='w-full flex flex-col'>

                  <div className='w-full text-white flex flex-wrap gap-1'>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>HTML</div>
                    <div className='rounded-xl bg-pink/60
                    py-1 px-2 text-xs mr-1'>CSS</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>JavaScript</div>
                  </div>

                    <motion.div 
                    initial={{opacity:0 , y:25}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:1}}
                    viewport={{once:true , amount:0.4}}
                    className='gap-1 mb-2 '>
                      <h4 className='italic text-pink font-medium pt-2'>About :</h4>
                      <p className='text-[15px]/5'>A classic Rock, Paper, Scissors game built with HTML, CSS, and JavaScript, where the player competes against the computer. The UI is interactive and displays the score and selected choices with images.</p>
                    </motion.div>

                   <motion.div 
                      initial={{opacity:0, y:20}}
                      whileInView={{opacity:1, y:0}}
                      transition={{delay:0.5, duration:0.8}}
                      viewport={{once:true}}
                      className='md:mt-3 flex gap-6'>
                    
                        <a href="https://zufshan98.github.io/RockPaperScissor/" download className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/75 rounded-full text-white transition duration-300'>🔗 Live Demo</a>
                    
                        <a href="https://github.com/zufshan98/RockPaperScissor" className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/75 rounded-full text-white transition duration-300'>💻 GitHub Repo</a>
                    
                    </motion.div>
                    
                  </div>
              </div>

                
                
              </div>
            
            </div>

             <div className='w-[410px] mx-auto'>

              <div className=' bg-pink/20 p-10 rounded-2xl flex flex-col justify-center items-center gap-6'>

              <motion.h2 
              initial={{opacity:0 , y:25}}
              whileInView={{opacity:1 , y:0}}
              transition={{duration:0.8}}
              viewport={{once:true , amount:0.4}}
              className='text-3xl text-darkgreen font-semibold'>Currency Converter
              </motion.h2>

              <div className='flex flex-col gap-8'>

                <div className='w-full flex flex-col items-center gap-3'>

                  <div className='w-full'>
                    <img src={CurrencyConverter} alt="" className='mx-auto rounded-2xl'/>
                  </div>

                </div>

                <div className='w-full flex flex-col'>

                  <div className='w-full text-white flex flex-wrap gap-1'>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>HTML</div>
                    <div className='rounded-xl bg-pink/60
                    py-1 px-2 text-xs mr-1'>CSS</div>
                    <div className='rounded-xl bg-pink/60 py-1 px-2 text-xs mr-1'>JavaScript</div>
                  </div>

                    <motion.div 
                    initial={{opacity:0 , y:25}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:1}}
                    viewport={{once:true , amount:0.4}}
                    className='gap-1 mb-2 '>
                      <h4 className='italic text-pink font-medium pt-2'>About :</h4>
                      <p className='text-[15px]/5'>A responsive Currency Converter built using HTML, CSS, JavaScript, and a live currency exchange API. Users can convert any amount from one currency to another with real-time rates & country flag display.</p>
                    </motion.div>

                   <motion.div 
                      initial={{opacity:0, y:20}}
                      whileInView={{opacity:1, y:0}}
                      transition={{delay:0.5, duration:0.8}}
                      viewport={{once:true}}
                      className='md:mt-3 flex gap-6'>
                    
                        <a href="https://zufshan98.github.io/CurrencyConverter/" download className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/75 rounded-full text-white transition duration-300'>🔗 Live Demo</a>
                    
                        <a href="https://github.com/zufshan98/CurrencyConverter" className='px-4 py-2 font-medium text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] bg-darkgreen hover:bg-darkgreen/75 rounded-full text-white transition duration-300'>💻 GitHub Repo</a>
                    
                    </motion.div>
                    
                  </div>
              </div>

                
                
              </div>
            
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Projects
