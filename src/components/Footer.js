import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='pt-[100px]'>
            <Image
                src={'/media/penandpaper2.png'}
                width={400} height={200}
                alt={'An fountain pen.'}
                className='absolute bottom-0 right-8' />
            <a href='mailto:cdreitzer@gmail.com' className='font-["Palfour"] text-[30px] absolute bottom-[20px] right-[130px]'>cdreitzer@gmail.com</a>
        </div>
    )
}

export default Footer