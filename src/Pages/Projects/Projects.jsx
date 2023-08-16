import ProjectTemplate from '../../components/ProjectTemplate/ProjectTemplate'
import { useState } from 'react'
import './Projects.scss'
import backend from '../../assets/sign-in.png'
import midjourney from '../../assets/midjourney showcase.png'
import frontend from '../../assets/Celebrity-face-recognition.png'
import portfolio from '../../assets/portfolio.png'

const Projects = () => {
    const [tags] = useState(["React", "CSS/SCSS", "NodeJS", "Express", "More..."])
  return (
    <div className="projects">
      <div className="title">
        <h1 className="text">
            ///PROJECTS
        </h1>
      </div>
      <div className="projects-wrapper">
        <ProjectTemplate projectName="Portfolio" projectDesc="A personal portfolio website to showcase my projects and skills as a web developer. The website is built using React for front-end components and Vite for fast development and build process." tags={tags} img={portfolio}/>
        <ProjectTemplate projectName="Celebrity Face Recognition Front-End" projectDesc="A simple celebrity face recognition app that takes an image input and outputs the celebrity the face is of, or the celebrity that most closely resembles the face. Built using React and the Clarifai API, along with PostgreSQL and Node/Express for the back-end." tags={tags} img={frontend} link="https://github.com/Arthur-Zang/celebrity-face-recognition"/>
        <ProjectTemplate projectName="Celebrity Face Recognition Back-End API" projectDesc="A simple celebrity face recognition app that takes an image input and outputs the celebrity the face is of, or the celebrity that most closely resembles the face. Built using React and the Clarifai API, along with PostgreSQL and Node/Express for the back-end." tags={tags} img={backend} link="https://github.com/Arthur-Zang/celebrity-face-recognition-api"/>
        <ProjectTemplate projectName="Midjourney Showcase" projectDesc="A website I developed using react that displays all the images I have created through midjourney in a grid-fashion, along with their respective prompts and a dynamic search bar." tags={tags} img={midjourney} link="https://github.com/Arthur-Zang/Midjourney-Showcase"/>
      </div>
    </div>
    
  )
}

export default Projects