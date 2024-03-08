import React from 'react'

const ProjectCard = (props) => {
    return (
        <div>
            <div className='project-image'>
                <img src={props.image} alt={props.name} />

            </div>
            <div className='project-details'>
                <h2>{props.name}</h2>
                <p>{props.time}</p><br />
                <p>{props.detail}</p>
                <button>
                    <a href={props.link}>link</a>
                </button>
            </div>

        </div>
    )
}

export default ProjectCard
