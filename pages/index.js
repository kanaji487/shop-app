import Head from 'next/head'
import Navbar from '@/Components/Navbar'
import Carousel from '@/Components/Carousel'
// import Card4 from '@/Components/card_content'
import Footer from '@/Components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Test App</title>
        <link rel='icon' href='/shop-app/image/android-chrome-192x192.png'></link>
      </Head>
      <Navbar/>
      {/* containt here */}
      <Carousel/>
      <Footer/>
    </>
  )
}
