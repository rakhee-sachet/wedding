import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import theme from '../theme'
import Layout from '../components/Layout'

const Location = styled.h4`
  font-family: ${theme.font.tertiary};
  font-weight: bold;
  letter-spacing: 1.5px;
  text-align: center;
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
      <Location>Mehendi by the Pool</Location>

      <p>
        <strong>8am</strong> – Please try to arrive at the Bangkok Airport 
        (Suvarnabhumi) by 7:30 am. Bus departs at 8 am towards Hua Hin.
      </p>

      <p>
        <strong>11am - 4pm</strong> – Join us for MEHENDI by the Pool. 
        Mehendi artists would take turns creating henna designs on the hands of all
        willing to participate.
        Celebrations will be accompanied by light lunch and drinks.
        Please be dressed in your colorful self as it's going to be cheerful 
        and sunny in Hua Hin. :)
      </p>

      <Location>Sangeet & Engagement</Location>

      <p>
        <strong>6:30pm</strong> – We'll be kicking things off with an exchange of 
        rings and some delicious cake soon followed by unrehearsed dance performances
        by family and friends. Dinner will be served at 8:00 pm. Be glamorous! ;)
      </p>

      <h3>Wednesday, February 26th 2020 <br /> Yana Villa, Thailand</h3>
      <Location>Haldi</Location>
      <p>
        <strong>8am - 9:30am</strong> – Join us waste copious amounts of turmeric. :P <br/>
        Beware, turmeric stains don't go off easily, so dress appropriately (preferably, yellow).
      </p>

      <Location>Wedding / Phere</Location>

      <p>
        <strong>3pm - 6pm</strong> –
        We will have an intimate traditional Indian Wedding by the stunning beach of Hua Hin.
    
      </p>

      <Location>Reception Dinner</Location>

      <p>
        <strong>7.00pm - 9.00pm</strong> – Dinner
      </p>

      <h3>Thursday, February 27th 2020 <br /> Yana Villa, Thailand</h3>
      <Location>Departure</Location>
      {/* <p>
        <strong>12pm - 12.30pm</strong> – GoodBye!
      </p> */}

      <p>
        <strong>1pm</strong> – Bus departs from the venue to Bangkok (Suvarnabhumi Airport).
      </p>

      <AfterEvent>
        There will be other rituals like Haldi Kumkum (during Mehendi Event), 
        Satya Narayan Puja and Mantri Puja (Wedding Day). Everyone is welcome
        to join in.
      </AfterEvent>
    </SectionBody>
  </Section>
  </Layout>
)

export default SchedulePage
