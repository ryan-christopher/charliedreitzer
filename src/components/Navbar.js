import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import $ from 'jquery'

function Navbar() {
    return (
        <div>
            <nav className='text-[#f4f2ec] font-["Palfour"] text-[20px] lg:text-[28px] lowercase 
        fixed top-0 left-0 w-[15%] h-full bg-[#3f4739] z-[15] border-r-2 border-[#2E261D] transition-all ease-in'>
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
            <div className="mobilebutton fixed z-50 bg-[#3f4739d2] rounded-full border-2 border-[#e9f1f7]] hover:scale-125">
                <div className="burgertop bg-[#f4f2ec] ease-in duration-200"></div>
                <div className="burgermiddle bg-[#f4f2ec] ease-in duration-200"></div>
                <div className="burgerbottom bg-[#f4f2ec] ease-in duration-200"></div>
            </div>
            <div className="mobilemenu bg-[#3f4739]">
                <div className="mobilemenu-body bg-[#3f4739">
                    <div className='mobilebuttonclose absolute top-[20px] right-[22px] text-[35px] 
                    text-[#f4f2ec] hover:cursor-pointer hover:scale-[1.25] border-[1.5px] w-[45px] h-[45px] bg-transparent text-center 
                    border-red-400 font-["Butler"] rounded-full ease-in duration-100 z-10'>
                        X
                    </div>
                    <div className="mobilemenu-overlay"></div>
                    <div className="mobilemenu-container text-[#f4f2ec] font-['Palfour'] lowercase">
                        <Link onClick={menutoggle()} className='mobilemenu-link block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/"}>Home</Link>
                        <Link onClick={menutoggle()} className='mobilemenu-link block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/works"}>Works</Link>
                        <Link onClick={menutoggle()} className='mobilemenu-link block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/about"}>About</Link>
                        <Link onClick={menutoggle()} className='mobilemenu-link block min-w-[100px] mt-[30px] pl-[1vw] hover:pl-[2vw] border-b-4 border-transparent hover:border-[#f4f2ec] transition-all ease-in' href={"/contact"}>Contact</Link>
                    </div>
                </div>
            </div>
            <div className="mask"></div>
        </div>

    )
}

function menutoggle() {
    $('.mobilemenu').toggleClass('active');
    $('.mask').toggleClass('active')
    $('.mobilebutton').toggleClass('active');
}

(function () {
    $(document).on("click", ".mobilemenu-group", function () {
        $(".mobilemenu-overlay").toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-link", function () {
        $('.mobilemenu').toggleClass('active');
        $('.mask').toggleClass('active')
        $('.mobilebutton').toggleClass('active');
    });
    $(document).on("click", ".mobilebutton", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    $(document).on("click", ".mobilebuttonclose", function () {
        $('.mobilebutton').toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-overlay", function () {
        $(this).toggleClass('active');
    });
    $(document).on("click", ".mask", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        $('.mobilebutton').toggleClass('active');
        return $(".mobilemenu-overlay").removeClass('active');
    });
}).call(this);

export default Navbar