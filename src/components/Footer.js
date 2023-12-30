import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='pt-[100px]'>
            <div className='pb-[23px]'>
                <Image
                    src={'/media/penandpaper2.png'}
                    width={400} height={200}
                    alt={'A fountain pen.'}
                    className='relative ml-auto' />
                <a href='mailto:cdreitzer@gmail.com' className='relative text-right right-[100px] top-[-40px] ml-auto block font-["Palfour"] text-[20px] md:text-[30px]'>cdreitzer@gmail.com</a>
            </div>
            <div className='bg-[#2f261c] absolute bottom-0 right-0 w-full overflow-hidden text-right font-["Palfour"] text-[#f4f2ec] text-[20px] p-[20px] pb-[0px] pt-[10px] pr-[40px]'>
                <h3 className='inline-block relative top-[-0px]'>Made by <a href="https://ryanchristopher.vercel.app/" target='_blank' rel="noreferrer" className='underline hover:text-[#3f4739] transition-all ease-in'>Ryan Christopher<Image src="/media/ryanmoji.png" alt="Emoji of Ryan, the developer of this website." width={75} height={75} className='inline-block relative ml-auto top-[0px] w-[75px] hover:scale-125 transition-all ease-in' /></a></h3>

            </div>
        </div>
    )
}

export default Footer