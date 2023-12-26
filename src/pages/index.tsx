'use client';
import Image from 'next/image'
import Link from 'next/link'
import '../../styles/globals.css'
import { Parallax, ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export default function Home() {
  return (
    <main className="text-black text-center">
      <ParallaxProvider>
        <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[100vh] block ml-auto mr-auto">
          <ParallaxBannerLayer image="cdmedia/treelayer.jpg" speed={10} />
          <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>
            <h2 className=''>
              does this work
            </h2>

          </ParallaxBannerLayer>
        </ParallaxBanner>
      </ParallaxProvider>

      <div className='h-[50vh]'>
        <Link className='text-[40px]' href={'/contact'}>go to contact</Link>
      </div>

    </main>
  )
}
