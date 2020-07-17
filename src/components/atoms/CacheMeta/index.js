import React from 'react'
import { Helmet } from 'react-helmet'

function CacheMeta() {
  return (
    <Helmet>
      <meta http-equiv="cache-control" content="private; max-age=31536000" />
    </Helmet>
  )
}

export default CacheMeta
