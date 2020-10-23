import React from 'react'
import Layout from '../../environments/Layout'
import SEO from '../../atoms/SEO'

function PortfolioProject({ pageContext: { project } }) {
  return (
    <Layout>
      <SEO title="Jorge Junior - Portfolio" />
      <main id="portfolioPage">
        <h2>project</h2>
        <div>
          <pre>{JSON.stringify(project, null, 2)}</pre>
        </div>
      </main>
    </Layout>
  )
}

export default PortfolioProject
