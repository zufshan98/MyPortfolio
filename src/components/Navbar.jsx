import React, { useState } from 'react'
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { MdOutlineWavingHand } from "react-icons/md";

import OverlayMenu from './OverlayMenu'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [theme, changeTheme] = useState(false);
    
  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-sm py-4 px-8'>

        <div className='container mx-auto flex items-center justify-between'>

            <div className='logo flex justify-between'>
                <h1 className='lg:text-[26px] md:text-[25px] text-[24px]/7 lg:w-36 md:w-35 lg:min-w-36 w-33 xl:ml-15'>Hello, I'm Zufshan Naaz</h1>
                <MdOutlineWavingHand className='lg:w-8 lg:h-8 w-6 h-6 self-end text-pink'/>
            </div>

            <div className='navmenu hidden lg:flex space-x-5'>

                <a href="#home" className='relative transition duration-500 hover:text-pink group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
                </a>     

                <a href="#about" className='relative transition duration-500 hover:text-pink group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
                </a>  

                <a href="#skills" className='relative transition duration-500 hover:text-pink group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
                </a>  

                <a href="#projects" className='relative transition duration-500 hover:text-pink group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
                </a>  

                <a href="#learnings" className='relative transition duration-500 hover:text-pink group'>
                    <span>Learnings</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
                </a>  
                   
            </div>

            <div className='sideoption flex gap-2 justify-center items-center xl:mr-15'>

                <div className='bg-lightgreen w-10 h-10 p-2.5 text-xl rounded-full hover:opacity-90 transition-opacity duration-300 cursor-pointer'>
                        {
                            theme ? <FiMoon onClick={()=>changeTheme(!theme)} /> : <FiSun onClick={()=>changeTheme(!theme)} /> 
                        }
                </div>

                <div className='hidden lg:block'>
                    <a href="#contact" className=' bg-pink px-4 py-2 text-center rounded-[10px] shadow-lg hover:opacity-90 transition-opacity duration-300'>Reach Out
                    </a>
                </div>

                {/* Mobile menu */}
                <div className='lg:hidden align-middle text-3xl cursor-pointer'>
                    {
                        showMenu ? <FiX onClick={()=>setShowMenu(!showMenu)} /> : <FiMenu onClick={()=>setShowMenu(!showMenu)} />
                    }
                    
                </div>
                
            </div>
        </div>

        {/** Mobile Nav Menus */}
        {
            showMenu && (
                <OverlayMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            )
        }
      
    </nav>
        
  )
}

export default Navbar
