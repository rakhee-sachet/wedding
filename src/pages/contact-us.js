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

const MiscPage = () => (
  <Layout>
  <Section>
    <SectionTitle>Contacting Us</SectionTitle>
    <SectionBody>
      <ul>
        <li>Email: rakheesingh.06@gmail.com</li>
        <li>Phone: +91 8767223979</li>
        <li>Email: sachetpatil89@gmail.com</li>
        <li>Address: 601 E 20th St, Apt 5E, NY, NY, 10010</li>
      </ul>

      <h3>Here's another picture of us</h3>
      <Image src={usImg} class='center'/>
    </SectionBody>
  </Section>
  </Layout>
)

export default MiscPage
