import React from 'react'
import { Navbar } from '../components/Navbar'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='h-[100vh] w-[100vw]'>
       <Navbar></Navbar>
       <div className='flex flex-col md:flex-row w-[100vw] md:h-[92vh] mb-10 md:mb-0'>
        <div className='md:w-[40%] md:h-[92vh] h-[90vh] bg-green-800  text-start flex md:flex-row flex-col justify-center items-center'>
           <div className="bg-[url('./images/img-1.jpeg')] bg-cover h-[450px] w-[250px] rounded-full mt-10 md:hidden"></div>
            <div className='w-[80%] h-[100%] text-white flex items-start flex-col justify-center'>
              <h2 className='text-white font-bold'>HELLO</h2>
              <h1 className='font- font-bold text-5xl'>I'M ADITI</h1>
              <p >Student at IIT Jodhpur and a website developer</p>
            </div>      
        </div>
        <div className='flex flex-col md:w-[60%] '>
            <div className="w-[100%] h-[90%] bg-[url('./images/img-1.jpeg')] bg-cover md:flex hidden"></div>
            <div className=' flex flex-col justify-center md:h-[40%] md:mt-0 mt-5 items-center'>
                <h1>Welcome to my portfolio! I am Aditi Rawat, a web developer and AI enthusiast studying at IIT Jodhpur. Explore my projects and experience, and feel free to view my resume for more details. </h1>
                <a rel="noreferrer" href='https://docs.google.com/document/d/12I3WICtVA67src8aRCWG5IynM4yF4etcRa5nzJIpi6I/edit?usp=drive_link' target='_blank' className='pr-5 pl-5 pt-2 pb-2 text-white mt-5 bg-green-800 md:w-[10vw]'>View Resume</a>
            </div>
        </div>
       </div>

       <About></About>
       <Skills/>
       <Projects/>
       <Footer/>
    </div>
  )
}
