/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../Footer'
import NavBar from '../NavBar'
import '../../../assets/styles/app.scss'
import CacheMeta from '../../atoms/CacheMeta'
import { RainbowBar } from "../../molecules/RainbowBar/RainbowBar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CacheMeta />
      <RainbowBar />
      <NavBar siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
