'use client';
import Image from 'next/image'
import Link from 'next/link'
import '../../styles/globals.css'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="text-black text-left overflow-hidden">
      <Navbar />
      <ParallaxProvider>
        <ParallaxBanner style={{ aspectRatio: 'auto' }} className="h-[100vh] fixed ml-auto mr-auto z-[10]">
          <ParallaxBannerLayer className='fixed' image="media/treelayer.jpg" speed={0} />
          <ParallaxBannerLayer image="media/treelayer-trees.png" speed={10} className='z-[10]' />
          <ParallaxBannerLayer className='bg-[#2121210f] !fixed' speed={0}>
            <h2 className='font-["Palfour"] text-[100px] text-center lowercase block ml-auto mr-auto z-[9] pt-[15vh] w-[80vw] pl-[20vw]'>
              hi, i&apos;m charlie
            </h2>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </ParallaxProvider>
      <div className='w-full bg-[#f4f2ec] relative z-[11]'>
        <div className={`${outfit.className} block text-[25px] w-[80vw] ml-[20vw] sm:w-[70vw] sm:ml-[25vw] pt-[60px] leading-[50px]`}>
          <span className='font-["Butler"] text-[100px]'>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis
          varius ipsum, at vestibulum turpis. Phasellus accumsan nunc a tempus aliquam. Nullam porta vel dui nec posuere. Aliquam erat
          volutpat. Suspendisse pharetra odio quis ante condimentum ultrices. Nunc sed sodales purus, sed facilisis enim.
          <br /><br />
          Nunc sodales feugiat quam, a auctor nunc. Duis quis magna in eros euismod porttitor nec nec turpis. Sed malesuada posuere arcu,
          non mattis nunc malesuada id.
        </div>
      </div>

      <Footer />

    </main>
  )
}
