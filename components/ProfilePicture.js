import React from 'react'
import Image from 'next/image'
const ProfilePicture = () => {
    return (
        <div className='dp'>
            <Image height={650} width={800} src={"/profile-pic.png"} alt='dp' />
        </div>
    )
}

export default ProfilePicture
