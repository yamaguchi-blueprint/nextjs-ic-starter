/* eslint-disable @next/next/no-img-element */
// Next, React
import Head from "next/head"

import styles from "../ui/styles/Home.module.css"

import { GreetingSection } from "../ui/components/GreetingSection"
import { ImageSection } from "../ui/components/ImageSection"

function HomePage() {
    return (
        <div className="w-1/1 md:w-full">
            <Head>
                <title>Internet Computer</title>
            </Head>
            <main className='flex flex-col min-h-screen'>
                <h3 className={styles.title}>
                    Welcome to Next.js Internet Computer Starter Template!
                </h3>
                <button className="btn w-full lg:w-1/2">test</button>
                <img src="/logo.png" alt="DFINITY logo" className="container mx-auto" />

                <GreetingSection />
                <ImageSection />
            </main>
        </div>
    )
}

export default HomePage
