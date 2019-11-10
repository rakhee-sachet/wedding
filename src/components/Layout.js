import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styledNormalize from 'styled-normalize'
import styled, { injectGlobal } from 'styled-components'
import mrseavesroman from '../fonts/mrseavesroman-webfont.woff'
import mrseavespetitecaps from '../fonts/mrseavespetitecaps-webfont.woff'
import mrseavessmallcaps from '../fonts/mrseavessmallcaps-webfont.woff'
import mrseavesitalic from '../fonts/mrseavesitalic-webfont.woff'
import symphonyBg from '../images/background.jpg'
import theme from '../theme'
import Header from '../components/header'

injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: 'mrseavespetitecaps';
    src: url(${mrseavespetitecaps}) format('woff');
  }

  @font-face {
    font-family: 'mrseavesroman';
    src: url(${mrseavesroman}) format('woff');
  }

  @font-face {
    font-family: 'mrseavessmallcaps';
    src: url(${mrseavessmallcaps}) format('woff');
  }

  @font-face {
    font-family: 'mrseavesitalic';
    src: url(${mrseavesitalic}) format('woff');
  }

  html {
    font-family: 'mrseavesroman';
  }

  body {
    background: url(${symphonyBg}) repeat;
    color: #302923;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100vh;
  border-top: 5px solid ${theme.color.brand};
`

const Layout = ({ children, data }) => (
  <Content>
    <Helmet title={data.site.siteMetadata.title} />
    <Header />
    {children()}
  </Content>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`