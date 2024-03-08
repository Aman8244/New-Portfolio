import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="nav">
            <div>
                <Link className='nav-link' href={"#about"}>
                    About
                </Link>
                <Link className='nav-link' href={"#portfolio"}>
                    Portfolio
                </Link>
                <Link className='nav-link' href={"#contact"}>
                    Contact
                </Link>
            </div>
                
        
        </div>

    )
}

export default Navbar
