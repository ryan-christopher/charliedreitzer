import Navbar from "@/components/Navbar"
import Head from 'next/head'
import '../../styles/globals.css'
import dynamic from 'next/dynamic'

const DynamicNav = dynamic(() => import('../components/Navbar'), {
    ssr: false,
})

export default function Works() {
    return (
        <div>
            <Head>
                <title>Works - Charlie Dreitzer</title>
            </Head>
            <DynamicNav />
            work with me if you dare.</div>
    )
}