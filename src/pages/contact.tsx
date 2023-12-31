import '../../styles/globals.css'
import dynamic from 'next/dynamic'
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { FaLinkedin } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import Image from 'next/image';
import Footer from '../components/Footer'
import { Outfit } from 'next/font/google'
import Head from 'next/head'
const outfit = Outfit({ subsets: ['latin'] })

const DynamicNav = dynamic(() => import('../components/Navbar'), {
    ssr: false,
})

export default function Contact() {
    return (
        <main className="bg-[#f4f2ec] text-black text-left min-h-[100vh]">
            <Head>
                <title>Contact - Charlie Dreitzer</title>
                <link rel="icon" href="/media/icon.png" sizes="any" />
            </Head>
            <div className='relative md:inline-block w-[5%] md:w-[15%]'>
                <div>
                    <DynamicNav />
                </div>
            </div>
            <div className='inline-block relative w-full md:w-[85%] min-h-[100vh]'>
                <div>
                    <ParallaxProvider>
                        <ParallaxBanner style={{ aspectRatio: 'auto' }} className="h-[230px] md:h-[300px] ml-auto mr-auto">
                            <ParallaxBannerLayer image="media/books.jpg" speed={-15} />
                            <ParallaxBannerLayer className='bg-[#21212172] font-["Palfour"] text-[#f4f2ec] lowercase' speed={0}>
                                <h2 className='mt-[80px] pl-[5vw] text-[50px] md:text-[80px] text-left block ml-auto mr-auto w-full'>
                                    Let&rsquo;s get in touch
                                </h2>
                            </ParallaxBannerLayer>
                        </ParallaxBanner>
                    </ParallaxProvider>
                </div>
                <div className='relative w-full bg-[#f4f2ec] pb-[150px]'>
                    <div className={`${outfit.className} block max-w-[750px] ml-auto mr-auto text-[18px] md:text-[20px] p-[20px] md:p-[50px] pt-[60px] leading-[30px] md:leading-[40px]`}>
                        <span className='font-["Butler"] text-[65px] md:text-[80px] float-left relative pt-[23px] md:pt-[32px] pr-[13px]'>M</span>
                        ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut facilisis tellus velit, non fringilla elit vestibulum id.
                    </div>
                    <div className='flex justify-center text-[35px]'>
                        <div className="borderwrapper inline-flex align-middle justify-center">
                            <a className="offsetBorder m-[20px]" href="#" rel='noreferrer' target='_blank'>
                                <FaMedium className="ease-in duration-200" />
                            </a>
                        </div>
                        <div className="borderwrapper inline-flex align-middle justify-center ml-[0px] md:ml-[20px]">
                            <a className="offsetBorder m-[20px]" href="#" rel='noreferrer' target='_blank'>
                                <IoMdMail className="ease-in duration-200" />
                            </a>
                        </div>
                        <div className="borderwrapper inline-flex align-middle justify-center ml-[0px] md:ml-[20px]">
                            <a className="offsetBorder m-[20px]" href="#" rel='noreferrer' target='_blank'>
                                <FaLinkedin className="ease-in duration-200" />
                            </a>
                        </div>
                    </div>


                </div>
                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>
            </div>
        </main>
    )
}