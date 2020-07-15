import React from "react"
import Layout from "../../environments/Layout"
import MeSection from "../../molecules/MeSection"
import "./style.scss"
import SEO from "../../atoms/SEO"

function Home() {
  return (
    <Layout>
      <SEO title="Jorge Junior - Portfolio" />
      <main id="homePage">
        <MeSection />
      </main>
    </Layout>
  )
}

export default Home
