"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
const Navbar = () => {
    const [visible, setvisible] = useState(false)

    const handleToggle = () => {
        setvisible((prev) => {
            return !prev
        })
    }

    return (
        <>
            <div className="nav flex flex-row">
                <div className='ml-10 min-h-32'>
                    <Image src={"/aman-logo.png"} width={200} alt='logo' height={200} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className='flex flex-row mr-10'>
                    <div>
                        <Link className='nav-link' href={"#about"}>
                            About
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <div className='h-6  border inline border-gray-400'>

                        </div>
                    </div>
                    <div>
                        <Link className='nav-link' href={"#portfolio"}>
                            Portfolio
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <div className='h-6  border inline border-gray-400'>

                        </div>
                    </div>
                    <div>
                        <Link className='nav-link' href={"#contact"}>
                            Contact
                        </Link>
                    </div>
                </div>
                <div onClick={handleToggle} className='sm:hidden visible'>
                    <div className='m-0 p-0'>
                        {visible ?
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,300,150"
                                style={{ fill: "#FFFFFF" }}>
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(10.66667,10.66667)"><path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path></g></g>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 32 32"
                                style={{ fill: "#FFFFFF" }}>
                                <path d="M 8 5 C 6.3550302 5 5 6.3550302 5 8 C 5 9.6449698 6.3550302 11 8 11 L 24 11 C 25.64497 11 27 9.6449698 27 8 C 27 6.3550302 25.64497 5 24 5 L 8 5 z M 8 7 L 24 7 C 24.56503 7 25 7.4349698 25 8 C 25 8.5650302 24.56503 9 24 9 L 8 9 C 7.4349698 9 7 8.5650302 7 8 C 7 7.4349698 7.4349698 7 8 7 z M 8 13 C 6.3550302 13 5 14.35503 5 16 C 5 17.64497 6.3550302 19 8 19 L 24 19 C 25.64497 19 27 17.64497 27 16 C 27 14.35503 25.64497 13 24 13 L 8 13 z M 8 15 L 24 15 C 24.56503 15 25 15.43497 25 16 C 25 16.56503 24.56503 17 24 17 L 8 17 C 7.4349698 17 7 16.56503 7 16 C 7 15.43497 7.4349698 15 8 15 z M 8 21 C 6.3550302 21 5 22.35503 5 24 C 5 25.64497 6.3550302 27 8 27 L 24 27 C 25.64497 27 27 25.64497 27 24 C 27 22.35503 25.64497 21 24 21 L 8 21 z M 8 23 L 24 23 C 24.56503 23 25 23.43497 25 24 C 25 24.56503 24.56503 25 24 25 L 8 25 C 7.4349698 25 7 24.56503 7 24 C 7 23.43497 7.4349698 23 8 23 z"></path>
                            </svg>}
                    </div>
                </div>

            </div>

            <div>
                <div className=' absolute top-15 left-15 right-5'>
                    {visible && <div className='w-4/5 bg-white p-4 text-black'>
                        <div>
                            <div className='mt-2 mb-2'>
                                <Link onClick={()=>{setvisible((prev)=>!prev)}} className='text-xl' href={"#about"}>
                                    About
                                </Link>
                            </div><hr className='h-0 border-black' />
                            <div className='mt-2 mb-2'>
                                <Link onClick={()=>{setvisible((prev)=>!prev)}} className='text-xl' href={"#portfolio"}>
                                    Portfolio
                                </Link>
                            </div><hr className='h-0 border-black' />
                            <div className='mt-2 mb-2'>
                                <Link onClick={()=>{setvisible((prev)=>!prev)}} className='text-xl' href={"#contact"}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>

    )
}

export default Navbar
