import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import usImg from './us.jpg'

const Image = styled.img`
  width: 100%;
`

const MiscPage = () => (
  <Section>
    <SectionTitle>Miscellaneous Information</SectionTitle>

    <SectionBody>
      <h3>Attire</h3>
      <p>
        We kindly request that you wear cocktail attire. We'd suggest not
        wearing heels as the farm might be muddy at that time of year. You may
        also want to consider bringing a jacket, as it might get a bit chilly in
        the evening.
      </p>

      <p>
        As a reminder of what cocktail attire for those that didn't know (as we didn't).
      </p>
      <ul>
        <li>
          <a href="https://www.gentlemansgazette.com/cocktail-attire-for-men/" target="_blank" rel="noopener noreferrer">Definition for men</a>
        </li>
        <li>
          <a href="https://www.whowhatwear.com/cocktail-attire-for-women" target="_blank" rel="noopener noreferrer">Definition for woman</a>
        </li>
      </ul>

      <h3>Contacting Us</h3>

      <ul>
        <li>Email: wedding@cjbell.co</li>
        <li>Chris: +1 917 664 9892 (also available on whatsapp)</li>
        <li>Dana: +1 732 757 6188 (also available on whatsapp)</li>
        <li>Address: 24 Monroe Pl, Apt 8B, Brooklyn, NY, 11201</li>
      </ul>

      <h3>Who are you, anyway?</h3>
      <p>
        We're not big into pictures or soppy photos of us kissing, but here we
        are in Portland, Oregan in July 2017.
      </p>

      <Image src={usImg} />

      <h3>For the nerds</h3>

      <p>
        This site was built using GatsbyJS, React and Styled Components, and is deployed on
        Netlify. It's typeset in Mrs Eaves, using Roman, Small Caps and Italic.
        The source of the site is available via MIT
        license{' '}
        <a href="https://github.com/cjbell/wedding-website" target="_blank" rel="noopener noreferrer">
          on Github
        </a>
      </p>

      <p>And no, I don't do freelance projects - CJB</p>
    </SectionBody>
  </Section>
)

export default MiscPage
