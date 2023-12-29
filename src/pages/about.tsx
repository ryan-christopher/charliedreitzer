import Navbar from "@/components/Navbar"
import Head from 'next/head'
import '../../styles/globals.css'
import dynamic from 'next/dynamic'

const DynamicNav = dynamic(() => import('../components/Navbar'), {
    ssr: false,
})

export default function About() {
    return (
        <div>
            <Head>
                <title>About - Charlie Dreitzer</title>
            </Head>
            <DynamicNav />
            learn about me if you dare.</div>
    )
}