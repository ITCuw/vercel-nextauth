//PACKAGES
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios';
import HomepageLayout from '../components/HomepageLayout';
import Link from 'next/link';



export default function IndexPage() {
  return (
    <HomepageLayout>
      <div>
        <Head>
          <title>Welcome - auth</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </HomepageLayout>
  )
}


