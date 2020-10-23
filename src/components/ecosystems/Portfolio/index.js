import React from 'react'
import Layout from '../../environments/Layout'
import './style.scss'
import './mobile.scss'
import SEO from '../../atoms/SEO'
import { ProjectsSection } from '../../molecules/ProjectsSection'

function Portfolio() {
  return (
    <Layout>
      <SEO title="Jorge Junior - Portfolio" />
      <main id="portfolioPage">
        <ProjectsSection />
      </main>
    </Layout>
  )
}

export default Portfolio
