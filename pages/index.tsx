/* eslint-disable @next/next/no-img-element */
// Next, React
import Head from "next/head"

// import styles from "../ui/styles/Home.module.css"

import { GreetingSection } from "../ui/components/GreetingSection"
import { ImageSection } from "../ui/components/ImageSection"
import { Footer } from "../ui/components/Footer"
function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Clean ocean network</title>
      </Head>
      <main className="flex-grow">
        <section className="container mx-auto ">
        <h3 className="my-6 text-center text-2xl font-bold">
          Welcome to Clean ocean network!
        </h3>
        <button className="btn btn-primary justify-center">One</button>
        {/* <img src="/logo.png" alt="DFINITY logo" className="" /> */}
        </section>


        <GreetingSection />
        <ImageSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
