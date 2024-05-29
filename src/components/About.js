import React from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false, // Trigger animations every time the section comes into view
    threshold: 0.1, // Adjust this value as needed
  });

  return (
    <div id='about' ref={aboutRef} className='w-[100vw] md:h-[90vh] pb-12 bg-slate-200 flex justify-center items-center'>
      <div className={`w-[80%] h-[80%] flex flex-col md:flex-row justify-center items-center ${aboutInView ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className={`img-2 w-[50%] bg-[url('./images/img-2.jpeg')] bg-cover md:h-[100%] h-[25vh] md:mr-12 mt-12 pb-12 ${aboutInView ? 'animate__animated animate__zoomIn' : ''}`}>
          <div className={`relative bg-green-700 md:w-[100px] w-[50px] md:h-[100px] h-[50px] right-[10%] bottom-[8%] opacity-65 ${aboutInView ? 'animate__animated animate__bounceIn' : ''}`}></div>
          <div className={`relative bg-green-700 md:w-[100px] w-[50px] md:h-[100px] h-[50px] md:left-[90%] left-[80%] md:top-[80%] top-[80%] opacity-75 ${aboutInView ? 'animate__animated animate__bounceIn animate__delay-2s' : ''}`}></div>
        </div>
        <div className='md:w-[50%] w-[100%] h-[80%] mt-12 flex flex-col items-start'>
          <h1 className={`font-bold text-4xl ${aboutInView ? 'animate__animated animate__fadeInDown' : ''}`}>ABOUT ME</h1>
          <div className='flex flex-row w-[100%] mt-5'>
            <div className={`md:text-xl text-md mr-1 w-[200px] flex mt-1 ${aboutInView ? 'animate__animated animate__fadeInLeft' : ''}`}>Web Developer</div>
            <div className={`w-full h-1 bg-green-800 my-4 ${aboutInView ? 'animate__animated animate__fadeInRight' : ''}`}></div>
          </div>
          <h1 className={`mt-5 text-sm text-start ${aboutInView ? 'animate__animated animate__fadeInUp' : ''}`}>
            I am Aditi Rawat, a passionate web developer and AI enthusiast currently pursuing a B.Tech. in Artificial Intelligence and Data Science at the Indian Institute of Technology, Jodhpur. With a solid foundation in programming languages such as C/C++, Python, and JavaScript, I excel in creating dynamic and responsive web applications using HTML, CSS, ReactJS, and NodeJS. My experience also extends to machine learning and Deep Learning. As an intern at Primewise Consulting, I am currently focused on designing and implementing a chatbot plugin for WordPress websites.
          </h1>
        </div>
      </div>
    </div>
  );
};
