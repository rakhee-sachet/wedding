import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

export const Section = styled.section`
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  padding: 20px;
  max-width: 550px;

  @media only screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const SectionTitle = styled.h2`
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  font-family: '${theme.font.secondary}';
  letter-spacing: 1.5px;
  margin: 0 0 30px 0;
`

export const SectionBody = styled.div`
  font-size: 17px;
  line-height: 1.5;

  a {
    color: ${theme.color.brand};
  }

  h3 {
    font-weight: normal;
    text-align: center;
    font-family: ${theme.font.secondary};
    margin: 70px 0 30px;

    &:after {
      content: '';
      display: block;
      width: 50px;
      height: 1px;
      margin: 10px auto;
      background-color: ${theme.color.brand};
    }

    &:first-child {
      margin-top: 20px;
    }
  }

  ul {
    margin: 0 0 30px 20px;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
  }

  li a {
    display: inline-block;
  }

  p {
    margin-bottom: 30px;
  }
`
