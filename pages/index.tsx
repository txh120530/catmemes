import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import CatMeme from '../components/CatMemes'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Meme Generator</title>
        <meta name="description" content="You know I had to do it" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CatMeme />
      </main>
    </>
  )
}
