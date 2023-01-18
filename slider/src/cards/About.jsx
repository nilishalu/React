import React from 'react'

import './about.css'

const About = ({
    title,
    desc,
    picture
}) => {
  const points = desc && desc.map((point) => 
     <li>{point}</li>
  );

  return (
    <div className='about-card'>
      <h1 className='about-title'>{title}</h1>
      <div className='about-content'>
        <ul className='desc'>{points}</ul>
        
        <img className='picture' src= {process.env.PUBLIC_URL + picture} alt="fkahlka" />
      </div>
    </div>
  )
}

export default About
