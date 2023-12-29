import Navbar from "@/components/Navbar"
import Head from 'next/head'
import '../../styles/globals.css'
import dynamic from 'next/dynamic'

const DynamicNav = dynamic(() => import('../components/Navbar'), {
    ssr: false,
})

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact - Charlie Dreitzer</title>
            </Head>
            <DynamicNav />
            Contact me if you dare.</div>
    )
}