import React from 'react'

import Layout from '../components/environments/Layout'
import SEO from '../components/atoms/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.2rem' }}>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
