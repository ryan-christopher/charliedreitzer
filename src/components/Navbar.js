import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <div className='fixed text-[#f4f2ec] font-["Butler"] text-[28px] lowercase top-0 left-0 w-[20vw] h-full bg-[#40473A] z-[15] border-r-4 border-[#2E261D]'>
            <Image
                src="/media/sigwhite.png"
                width={250}
                height={100}
                alt="Signature of Charlie Dreitzer"
                className='w-[250px] block ml-auto mr-auto'></Image>
            <Link className='block mt-[30px] ml-[50px]' href={"/home"}>Home</Link>
            <Link className='block mt-[30px] ml-[50px]' href={"/works"}>Works</Link>
            <Link className='block mt-[30px] ml-[50px]' href={"/about"}>About</Link>
            <Link className='block mt-[30px] ml-[50px]' href={"/contact"}>Contact</Link>
        </div>
    )
}

export default Navbar