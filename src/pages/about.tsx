import Head from 'next/head'
import '../../styles/globals.css'
import dynamic from 'next/dynamic'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import Footer from '../components/Footer'
import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })

const DynamicNav = dynamic(() => import('../components/Navbar'), {
    ssr: false,
})

export default function About() {
    return (
        <main className="bg-[#f4f2ec] text-black text-left">
            <Head>
                <title>About - Charlie Dreitzer</title>
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
                        <ParallaxBanner style={{ aspectRatio: 'auto' }} className="h-[20vh] ml-auto mr-auto">
                            <ParallaxBannerLayer className='' image="media/penandpaper.jpg" speed={0} />
                            <ParallaxBannerLayer className='bg-[#2121210f]' speed={0}>
                                <h2 className='font-["Palfour"] text-[#f4f2ec] text-[40px] sm:text-[50px] md:text-[90px] text-center lowercase block ml-auto mr-auto w-full'>
                                    about page (in progress)
                                </h2>
                            </ParallaxBannerLayer>
                        </ParallaxBanner>
                    </ParallaxProvider>
                </div>
                <div className='relative w-full bg-[#f4f2ec]'>
                    <div className={`${outfit.className} block text-[20px] md:text-[25px] p-[20px] md:p-[50px] pt-[60px] leading-[30px] md:leading-[40px]`}>
                        <span className='font-["Butler"] text-[70px] md:text-[100px]'>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis
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