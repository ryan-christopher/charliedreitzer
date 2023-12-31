'use client';
import '../../styles/globals.css'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import Footer from '../components/Footer'
import { Outfit } from 'next/font/google'
import Head from 'next/head'
const outfit = Outfit({ subsets: ['latin'] })
{/*
to view local address:
ipconfig getifaddr en0 
*/}
import dynamic from 'next/dynamic'


const DynamicNav = dynamic(() => import('../components/Navbar'), {
  ssr: false,
})



export default function Home() {
  return (
    <main className="bg-[#f4f2ec] text-black text-left">
      <Head>
        <title>Home - Charlie Dreitzer</title>
        <link rel="icon" href="/media/icon.png" sizes="any" />
      </Head>
      <div className='relative md:inline-block w-[5%] md:w-[15%]'>
        <div>
          <DynamicNav />
        </div>
      </div>
      <div className='inline-block w-full md:w-[85%]'>
        <div>
          <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: 'auto' }} className="h-[85vh] ml-auto mr-auto">
              <ParallaxBannerLayer className='' image="media/treelayer.jpeg" speed={0} />
              <ParallaxBannerLayer className='z-[6]' image="media/treelayer-trees.png" speed={10} />
              <ParallaxBannerLayer className='bg-[#2121210f]' speed={0}>
                <h2 className='font-["Palfour"] text-[#2f261c] text-[40px] sm:text-[50px] md:text-[90px] text-center lowercase block ml-auto mr-auto pt-[8vh] pb-[2vh] w-full'>
                  hi, i&rsquo;m charlie
                </h2>
                <Image src={'/media/profile.jpeg'}
                  width={160} height={160}
                  alt={'Charlie Dreitzer'}
                  className='block w-[130px] md:w-[160px] ml-auto mr-auto rounded-full border-4 border-[#2f261c]' />
              </ParallaxBannerLayer>
            </ParallaxBanner>
          </ParallaxProvider>
        </div>
        <div className='relative w-full bg-[#f4f2ec]'>
          <div className={`${outfit.className} block max-w-[900px] ml-auto mr-auto text-[18px] md:text-[20px] p-[20px] md:p-[50px] pt-[60px] leading-[30px] md:leading-[40px]`}>
            <span className='font-["Butler"] text-[65px] md:text-[80px] float-left relative pt-[23px] md:pt-[32px] pr-[13px]'>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis
            varius ipsum, at vestibulum turpis. Phasellus accumsan nunc a tempus aliquam. Nullam porta vel dui nec posuere. Aliquam erat
            volutpat. Suspendisse pharetra odio quis ante condimentum ultrices. Nunc sed sodales purus, sed facilisis enim.
            <br /><br />
            Nunc sodales feugiat quam, a auctor nunc. Duis quis magna in eros euismod porttitor nec nec turpis. Sed malesuada posuere arcu,
            non mattis nunc malesuada id.
          </div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
