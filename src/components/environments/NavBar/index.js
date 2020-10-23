import React from 'react'
import { string } from 'prop-types'
import { Link } from 'gatsby'

export default function NavBar({ siteTitle }) {
  return (
    <header className="header">
      <Link className={'brand'} to="/" title="Home Page Link">
        <h1>{siteTitle}</h1>
      </Link>

      <Link className="button button-solid" type={'button'} to={'/portfolio'}>
        portfolio
      </Link>
    </header>
  )
}

NavBar.propTypes = {
  siteTitle: string.isRequired,
}
