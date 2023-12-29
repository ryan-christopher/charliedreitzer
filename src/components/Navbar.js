import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='text-[#f4f2ec] font-["Palfour"] text-[20px] lg:text-[28px] lowercase 
        fixed top-0 left-0 w-[15%] h-full bg-[#3f4739] z-[15] border-r-2 border-[#2E261D]'>
            <Image
                src="/media/sigwhite.png"
                width={250}
                height={100}
                alt="Signature of Charlie Dreitzer"
                className='w-[250px] block ml-auto mr-auto'></Image>
            <Link className='block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/"}>Home</Link>
            <Link className='block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/works"}>Works</Link>
            <Link className='block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/about"}>About</Link>
            <Link className='block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/contact"}>Contact</Link>
        </nav>
    )
}

export default Navbar