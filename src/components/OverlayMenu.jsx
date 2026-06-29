import React from 'react'

const OverlayMenu = ({showMenu,setShowMenu}) => {
  return (
    <div className='bg-linear-to-b from-lightgreen from-25% via-lightgreen/50 via-50% via-pink/50 via-75% to-pink to-100% text-white  text-xl h-screen rounded-lg p-4 mt-4 flex flex-col space-y-4 items-center justify-center'>

        <a href="#home" onClick={()=>setShowMenu(!showMenu)} className='relative transition duration-500 hover:text-pink group'>
            <span>Home</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
        </a>     

        <a href="#about" onClick={()=>setShowMenu(!showMenu)} className='relative transition duration-500 hover:text-pink group'>
            <span>About</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
        </a>  

        <a href="#skills" onClick={()=>setShowMenu(!showMenu)} className='relative transition duration-500 hover:text-pink group'>
             <span>Skills</span>
             <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
        </a>  

        <a href="#projects" onClick={()=>setShowMenu(!showMenu)} className='relative transition duration-500 hover:text-pink group'>
            <span>Projects</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
        </a>  

        <a href="#learnings" onClick={()=>setShowMenu(!showMenu)} className='relative transition duration-500 hover:text-pink group'>
            <span>Learnings</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
        </a>  
                   
        <a href="#contact" onClick={()=>setShowMenu(!showMenu)} className='relative transition duration-500 hover:text-pink group'>
            <span>Contact</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full'></span>
        </a>   
    </div>
  )
}

export default OverlayMenu
