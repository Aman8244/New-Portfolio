import React from 'react'
import Image from 'next/image'
const ProfilePicture = () => {
    return (
        <div className='dp'>
            <Image height={650} src={"/profile-pic.png"} alt='dp' />
        </div>
    )
}

export default ProfilePicture
