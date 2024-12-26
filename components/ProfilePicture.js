import React from 'react'
import Image from 'next/image'
const ProfilePicture = () => {
    return (
        <div className='dp  sm:mt-6'>
            <Image height={650} width={800} src={"/dp4.jpg"} alt='dp' />
        </div>
    )
}

export default ProfilePicture
