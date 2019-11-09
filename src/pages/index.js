import React from 'react'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'
import theme from '../theme'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  div {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: '${theme.font.secondary}';
  font-size: 24px;
  font-weight: normal;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 30px 0;
`

const TitleAmpersand = styled.span`
  display: block;
  font-size: 16px;
  margin: 3px 0;
  color: ${theme.color.brand};
  font-family: '${theme.font.primary}';
`

const DateAndLocation = styled.h3`
  font-weight: normal;
  font-family: '${theme.font.secondary}';

  &:before {
    content: '';
    display: block;
    width: 47px;
    height: 1px;
    margin: 30px auto;
    background-color: ${theme.color.brand};
  }
`

const Preamble = styled.span`
  font-family: ${theme.font.tertiary};
  letter-spacing: 2px;
  font-weight: 600;
`

const RSVPButton = styled.a`
  background-color: ${theme.color.brand};
  color: #fff;
  padding: 6px 20px 10px;
  font-family: ${theme.font.tertiary};
  letter-spacing: 2px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  margin-top: 20px;
  text-decoration: none;
  display: inline-block;
`

const InnerContainer = styled.div`
  padding: 20px;
`

const IndexPage = () => (
  <Container>
    <InnerContainer>
      <Preamble>
        please join us to<br />
        celebrate the marriage of
      </Preamble>

      <Title>
        Rakhee Singh
        <TitleAmpersand>- & -</TitleAmpersand>
        Sachet Patil
      </Title>
      <DateAndLocation>
        February 25th - 25th, 2020 - The Yana Villas, 
        Hua Hin District, Prachuap Khiri Khan 77110, Thailand
      </DateAndLocation>

      <RSVPButton href="https://forms.gle/XegHTW4eTipubVrN7" target="_blank">
        rsvp now
      </RSVPButton>
    </InnerContainer>
  </Container>
)

export default IndexPage
