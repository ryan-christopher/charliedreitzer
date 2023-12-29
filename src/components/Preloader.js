import '../../styles/globals.css';
import React from 'react';
import Image from 'next/image';

function Preloader() {
    React.useEffect(() => {
        window.addEventListener('load', () => {
            const preload = document.querySelector('.preload');
            preload.classList.add('preload-finish');
        })
        if (document.readyState === "complete") {
            const preload = document.querySelector('.preload');
            //const loadtext = document.getElementById('loadtext');
            //loadtext.classList.toggle("load-anim");
            //setTimeout(() => { loadtext.classList.toggle("load-anim"); }, 100);
            //preload.classList.toggle('preload-finish');
            setTimeout(() => { preload.classList.toggle('preload-finish') }, 150);
        }
    }, [])
    return (
        <div className="preload" priority={true}>
            <div className="">
                <Image src="/media/sigwhite.png" alt="Charlie's signature."
                    width={200} height={200}
                    className='block ml-auto mr-auto' />
                <h2 className='font-["Palfour"] lowercase text-[#f4f2ec] text-center text-[30px]'>Charlie Dreitzer</h2>
            </div>
        </div>
    )
}



export default Preloader