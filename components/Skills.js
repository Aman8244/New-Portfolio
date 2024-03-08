import React from 'react'

const Skills = (props) => {
  // const skillName = props.name;
  const logoUrl = props.image;
  return (
    <div className='skills-div'>
      <div className='innerdiv-skills'>
        <div>
          <img src={logoUrl} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Skills
