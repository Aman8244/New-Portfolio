import React from 'react'
import Image from 'next/image';
const Skills = (props) => {
  // const skillName = props.name;
  const logoUrl = props.image;
  return (
    <div className='skills-div'>
      <div className='innerdiv-skills'>
        <div>
          <Image width={150} height={100} src={logoUrl} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Skills
