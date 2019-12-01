import React from 'react'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import Layout from '../components/Layout'
import styled from 'styled-components'
import usImg from '../images/US.jpg'

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
  max-height: 50%;
`

const GiftsPage = () => (
  <Layout>
  <Section>
    <SectionTitle>Gifts</SectionTitle>
    <Image src={usImg} class='center'/>
    <SectionBody>
      <p>
        Gifts are not expected — your attendance is by far the most important
        gift to us. We know that many of you are travelling quite long distances
        and appreciate this much more than any item we could receive. However,
        if you would like to give a gift and need ideas, we have a small registry
         at the location below:
      </p>

      <ul>
        <li>
          <a
            href="https://registry.theknot.com/rakhee-singh-sachet-patil-march-2020-ny/37898159"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Knot Registry
          </a>
        </li>
      </ul>
    </SectionBody>
  </Section>
  </Layout>
)

export default GiftsPage