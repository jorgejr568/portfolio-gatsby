import React from 'react'
import { Helmet } from 'react-helmet'

function CacheMeta() {
  return (
    <Helmet>
      <meta httpEquiv="cache-control" content="public, max-age=31536000" />
    </Helmet>
  )
}

export default CacheMeta
