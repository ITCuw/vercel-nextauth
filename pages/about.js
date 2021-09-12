import Head from 'next/head'
import HomepageLayout from '../components/HomepageLayout';

const about = () => {
    return (
        <HomepageLayout>
            <div>
                <Head>
                    <title>About - auth</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>Coming Soon</h1>
            </div>
        </HomepageLayout>
    )
}

export default about;