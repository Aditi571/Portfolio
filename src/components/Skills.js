import React from 'react'
import { useInView } from 'react-intersection-observer';

export const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
  return (

        <div
          id='skills'
          className={`w-[100vw] flex flex-col items-center mt-12 pb-10 transition-opacity duration-700 ease-in-out ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
          ref={ref}
        >
          <h2 className='mb-8 text-3xl'>MY SKILLS</h2>
          <div className='flex mb-5 flex-col w-[80%]'>
            <p className='text-lg mb-12'>
              I have extensive experience in developing and deploying web applications, and a strong foundation in machine learning and data analysis. I am passionate about leveraging my technical expertise to create innovative solutions and continuously improving my skill set.
            </p>
            <div className='flex md:flex-row flex-col'>
              <div className='flex flex-col md:w-[50%] md:mr-5 mt-5'>
                <div className='flex justify-between'>
                  <h2>Frontend</h2>
                  <p>90%</p>
                </div>
                <div className='w-full mr-5 h-6 bg-gray-200 rounded-md overflow-hidden'>
                  <div className='h-full bg-green-500' style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className='flex flex-col mt-5 md:w-[50%]'>
                <div className='flex justify-between'>
                  <h2>Backend</h2>
                  <p>80%</p>
                </div>
                <div className='w-full mr-5 h-6 bg-gray-200 rounded-md overflow-hidden'>
                  <div className='h-full bg-green-500' style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
    
            <div className='flex md:flex-row flex-col'>
              <div className='flex flex-col md:w-[50%] md:mr-5 mt-5'>
                <div className='flex justify-between'>
                  <h2>ML</h2>
                  <p>80%</p>
                </div>
                <div className='w-full mr-5 h-6 bg-gray-200 rounded-md overflow-hidden'>
                  <div className='h-full bg-green-500' style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className='flex flex-col mt-5 md:w-[50%]'>
                <div className='flex justify-between'>
                  <h2>GenAI</h2>
                  <p>50%</p>
                </div>
                <div className='w-full mr-5 h-6 bg-gray-200 rounded-md overflow-hidden'>
                  <div className='h-full bg-green-500' style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
    
            <div className='flex md:flex-row flex-col'>
              <div className='flex flex-col md:w-[50%] md:mr-5 mt-5'>
                <div className='flex justify-between'>
                  <h2>BlockChain Development</h2>
                  <p>50%</p>
                </div>
                <div className='w-full mr-5 h-6 bg-gray-200 rounded-md overflow-hidden'>
                  <div className='h-full bg-green-500' style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className='flex flex-col mt-5 md:w-[50%]'>
                <div className='flex justify-between'>
                  <h2>C++</h2>
                  <p>80%</p>
                </div>
                <div className='w-full mr-5 h-6 bg-gray-200 rounded-md overflow-hidden'>
                  <div className='h-full bg-green-500' style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };