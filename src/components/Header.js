import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import theme from '../theme'

const Container = styled.div`
  padding: 20px;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 20px;
  }
`

const Logo = styled.span`
  /* font-family: '${theme.font.secondary}'; */
  display: block;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
    font-weight: bolder;

  }

  @media only screen and (min-width: 768px) {
    display: inline;
    text-align: left;
  }
`

const Navigation = styled.nav`
  margin-left: auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  margin-top: 10px;

  a {
    font-family: '${theme.font.secondary}';
    text-decoration: none;
    letter-spacing: 1.5px;
    font-size: 14px;
    color: #333;
    margin: 0 10px;

    &:hover,
    &:focus,
    &.active {
      color: ${theme.color.brand};
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`

const activeStyle = {
  color: theme.color.brand,
  fontWeight: 'bold',
}

const Header = ({ siteTitle }) => (
  <Container>
    <Logo>
      <Link to="/" style={{ fontSize: '25px' }}>Rakhee & Sachet</Link>
    </Logo>

    <Navigation>
      <a href="https://forms.gle/HA2hkrP82U8iPpK3A" target="_blank" rel="noopener noreferrer">
        RSVP
      </a>
      <Link to="/schedule" activeStyle={activeStyle}>
        Schedule
      </Link>
      <Link to="/accomodation" activeStyle={activeStyle}>
        Accomodation
      </Link>
      <Link to="/getting-there" activeStyle={activeStyle}>
        Getting There
      </Link>
      <Link to="/gifts" activeStyle={activeStyle}>
        Gifts
      </Link>
      <Link to="/contact-us" activeStyle={activeStyle}>
        Us
      </Link>
    </Navigation>
  </Container>
)

export default Header
