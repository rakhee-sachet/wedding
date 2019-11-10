import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import theme from '../theme'
import Layout from '../components/Layout'

const Location = styled.h4`
  font-family: ${theme.font.tertiary};
  font-weight: normal;
  letter-spacing: 1.5px;
`

const AfterEvent = styled(Location)`
  color: #949494;
  text-align: center;
  margin-top: 20px;

  &:before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    margin: 40px auto;
    background-color: #949494;
  }
`

const SchedulePage = () => (
  <Layout>
  <Section>
    <SectionTitle>Schedule</SectionTitle>

    <SectionBody>
      <h3>Tuesday, February 25th 2020 <br /> Yana Villa, Thailand</h3>
      <Location>Mehndi by the Pool</Location>

      <p>
        <strong>8am</strong> – Bus departs from Bangkok(Suvarnabhumi Airport) to the venue.
      </p>

      <p>
        <strong>11am - 4pm</strong> – Join us for MEHNDI Panting by the Pool. Wear colourful!
      </p>

      <Location>Sangeet & Engagement</Location>

      <p>
        <strong>6:30pm</strong> – We'll be kicking things off with Sangeet & Engagement ceremony.
        Be glamaorous!
      </p>

      <h3>Wednesday, February 26th 2020 <br /> Yana Villa, Thailand</h3>
      <Location>Haldi</Location>
      <p>
        <strong>8am - 9.30am</strong> – Haldi Ceremony. Shine like a Sun!
      </p>

      <Location>Wedding/Phere</Location>

      <p>
        <strong>3pm - 6pm</strong> – An Afternoon by the beach wrapped in tradition, family and 
        Indian culture. Wear your elegant and stunning Indian attire.
      </p>

      <Location>Reception Dinner</Location>

      <p>
        <strong>7.00pm - 9.00pm</strong> – Dinner
      </p>

      <h3>Thursday, February 27th 2020 <br /> Yana Villa, Thailand</h3>
      <Location>Departure</Location>
      <p>
        <strong>12pm - 12.30pm</strong> – GoodBye!
      </p>

      <p>
        <strong>1pm</strong> – Bus departs from the venue to Bangkok(Suvarnabhumi Airport).
      </p>

      <AfterEvent>
        We will also have other small rituals like Haldi Kumkum(Mehndi Event), Satya Narayan Puja 
        and Mantri Puja(Wedding Day). Be a part of it if you wish to.
      </AfterEvent>
    </SectionBody>
  </Section>
  </Layout>
)

export default SchedulePage
