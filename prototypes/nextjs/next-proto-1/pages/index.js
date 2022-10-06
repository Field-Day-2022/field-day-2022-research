import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-asu-maroon flex flex-col h-screen text-white items-center justify-center'>
      <Head>
        <title>Field Day</title>
      </Head>
      <h1 className="mb-10">Field Day!</h1>
      <div className="border-white border-0 w-1/3 flex flex-row justify-around h-min">
        <Link href="PhoneUI">
          <a className='bg-asu-gold p-2 rounded-lg text-black no-underline border-asu-gold border-2 hover:border-black'>Phone UI</a>
        </Link>
        <Link href="WebUI">
          <a className='bg-asu-gold p-2 rounded-lg text-black no-underline border-asu-gold border-2 hover:border-black'>Web UI</a>
        </Link>
      </div>
    </div>
  )
}
