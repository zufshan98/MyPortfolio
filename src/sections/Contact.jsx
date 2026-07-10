import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Mobile from '../assets/mobile.png'
import emailjs from '@emailjs/browser'
import Mail from '../assets/mail.gif'
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {

  const [status, setStatus] = useState(""); // to show the success popup
  const [loading, setLoading] = useState(false); //to control text on send button
  const [errors, setErrors] = useState(false); //to show error message if the boxes are empty

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    //Validation check
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setErrors(true);
      return;
    }

    setErrors(false);
    setLoading(true);
    
    //send email
    emailjs
      .sendForm(
        "service_5w64zpp",
        "template_k3lj9y6",
        form.current,
        "9u_lWCyOseHE1Yuua"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong.");
        setStatus("error");
        setLoading(false);
      });
  };

  //to stop scroll when success popup appears
  useEffect(() => {
    if (status === "success") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [status]);

  return (
    <section id='contact' className='w-full flex relative items-center justify-center'>
      
      {/** Wrapper Container */}
        <div className=' relative w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-center items-center mt-22 gap-6 bg-pink'>

          {/** Heading - Contact*/}
          <motion.div
          initial={{opacity:0 , y:25}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.8}}
          viewport={{once:true , amount:0.4}} className='pt-7'>
            <h1 className='text-white text-center font-semibold text-[30px] sm:text-[32px] md:text-[34px] lg:text-4xl'>Let's Connect</h1>
          
            <h3 className='text-white text-center w-sm md:w-xl mx-auto font-light text-[12px] sm:text-[12px] md:text-[14px] lg:text-[15px] mt-1'>💌 I'd love to hear from you! Whether it's a question, opportunity, or just a hello, drop me a message.</h3>
          </motion.div>

          <div className='relative w-[90%] md:w-[80%] xl:w-[70%] flex justify-center items-center mt-5'>

            {/**Contact dialogue box */}
            <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:0.5, duration:0.8}}
            viewport={{once:true}}
            className='w-[110%] flex flex-col justify-center items-center'>

              <div className='w-[95%] sm:w-[75%] md:w-full lg:w-[88%] h-[65%] flex flex-col justify-center items-center bg-[#FDEFE4] rounded-4xl p-7 md:p-8 lg:p-10 gap-4'>

                {/**Email  */}
                <div className='w-full flex flex-col gap-2 -mt-2'>

                  <p className='self-start ml-3 text-[#777]'> Prefer email?</p>

                  <a href="mailto:zufshannaaz00@gmail.com" className=' w-full h-12 bg-lightgreen rounded-3xl px-6 cursor-pointer text-white flex items-center gap-2 hover:bg-lightgreen/80'>  
                      <FaEnvelope /> 
                      <p>zufshannaaz00@gmail.com</p>
                  </a>

                </div>
                

                {/**Message form  */}
                <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col justify-center items-center gap-2'>

                  <p className='self-start ml-3 text-[#777]'>or send me a message below</p>
                
                  <input type='text' name='name' placeholder='Enter your full name' className='w-full h-12 bg-lightgreen rounded-3xl px-6 text-white mb-2 hover:bg-lightgreen/80' />  
                
                  <input type='email' name='email' placeholder='Enter your email' className='w-full h-12 bg-lightgreen rounded-3xl px-6 text-white mb-2 hover:bg-lightgreen/80' />
                  
                  <textarea name="message" id="yourMessage" className='w-full h-28 bg-lightgreen rounded-3xl px-6 pt-3 text-white mb-2 hover:bg-lightgreen/80' placeholder='Type the message here'></textarea>

                  {errors && (
                    <p className="text-red-500 text-sm self-start ml-4 mb-2">
                      Please fill all fields.
                    </p>
                  )}

                  <button disabled={loading} type='submit' className='w-full h-12 bg-pink rounded-3xl text-white hover:bg-pink/90 cursor-pointer -mb-2'>{loading ? "Sending..." : "Send Message"}</button> 

                </form>

              </div>

            </motion.div>

            {/**Image part */}
            <motion.div 
            initial={{opacity:0, x:20}}
            whileInView={{opacity:1, x:0}}
            transition={{ duration:0.8}}
            viewport={{once:true}}
            className='flex-col justify-center items-center hidden md:block w-full h-full'>
              <img src={Mobile} alt="phone image" className='' />
            </motion.div>
  

            {/** Success pop-up */}
            {status === "success" && (
              <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 overflow-hidden">

                <motion.div 
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute w-[30%] bg-[#FDEFE4] border text-darkgreen rounded-4xl py-8 shadow-[#FDEFE4] shadow-md flex flex-col items-center gap-6 text-center">
                  <div className='w-full h-16 flex items-center justify-center'>
                    <img src={Mail} alt='success' className='w-[50%]'/>
                  </div>
                  <h3 className='text-2xl font-semibold mt-2'> 
                    Thank you for reaching out!
                  </h3> 
                  <h2 className='text-lg/5 font-medium text-[#555]'>
                    Your message has been sent successfully.
                    <br />
                    I'll get back to you soon.
                  </h2>
                  <button className='py-2 bg-pink hover:bg-pink/90 cursor-pointer text-white w-20 rounded-xl mb-2 text-lg' onClick={() => {
                     setStatus("");
                     setLoading(false)
                     }}>OK</button>
                </motion.div>
              </div>
             
            )}
            
          </div>
         
          <motion.p 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{delay:0.5, duration:0.8}}
          viewport={{once:true}}
          className='text-white mt-4'>Let’s collaborate, create, and grow together. 🌸</motion.p> 
          
          <span className='w-[90%] h-0.5 bg-white'></span>


        </div>
    </section>
  )
}

export default Contact
