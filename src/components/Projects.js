
import React from 'react';

const Card = ({ image, title, content, github }) => {

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[80vw] md:w-[20vw] h-[100%] p-4">
      <div className={`${image} w-full h-48 object-cover`}></div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{content}</p>
        <a rel="noreferrer" href={`${github}`} target='_blank' className=' text-green-900 font-bold' > GITHUB</a>
      </div>
    </div>
  );
};

export const Projects = () => {
    const cards = [
        {
          image: "bg-[url('./images/langchain.jpeg')] bg-contain",
          title: 'FESTBOT',
          content: 'Using Langchain and LM Studio developed a chatbot that takes in pdf as an input and answers the questions regarding that pdf correctly.',
          github : 'https://github.com/Aditi571/FESTBOT'
        },
        {
          image: "bg-[url('./images/CV.png')] bg-cover",
          title: 'Computer Vision',
          content: 'In the project classification of human phenotype , implemented various deep learning models linke resnet50 on the dataset created by our team.',
          github : 'https://github.com/Aditi571/FESTBOT'
        },
        {
          image: "bg-[url('./images/database.jpeg')] bg-cover",
          title: 'Attendance System',
          content: 'Implemented a system for various organizations or school to keep record of the attendance of their employees using online database.',
          github : 'https://github.com/Aditi571/Attendance_system',
          additionalInfo: 'Additional information about card 3.'
        },
        {
          image: "bg-[url('./images/chatbot.avif')] bg-contain",
          title: 'ChatBot Plugin',
          content: 'As part of a project in the internship program by Primewise Consulting, developed a chatbot plugin for wordpress websites',
          github : 'https://github.com/Aditi571/wp_development',
          additionalInfo: 'Additional information about card 4.'
        }
      ];
  return (
    <div id='projects' className='flex flex-col bg-slate-200 mt-10 pb-10'>
        <h2 className='text-3xl mt-12 mb-10'>PROJECTS</h2>
        <div className="flex flex-wrap -mx-2 w-[full] justify-center">
        
      {cards.map((card, index) => (
        <div key={index} className="px-2 mb-4">
          <Card
            image={card.image}
            title={card.title}
            content={card.content}
            github={card.github}
          />
        </div>
      ))}
    </div>
    </div>
    
  )
}
