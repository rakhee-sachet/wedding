import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, SectionBody } from '../components/section'
import theme from '../theme'

const Location = styled.h4`
  font-family: ${theme.font.tertiary};
  font-weight: normal;
  letter-spacing: 1.5px;
`

const AfterEvent = Location.extend`
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
  <Section>
    <SectionTitle>Schedule</SectionTitle>

    <SectionBody>
      <h3>Friday, October 19th 2018</h3>
      <Location>Red Bank, NJ, USA</Location>

      <p>
        <strong>6pm - 11pm</strong> – We'll be at a bar in Red Bank (location TBD) and we'd love
        to see you for a drink if you're here early.
      </p>

      <h3>Saturday, October 20th 2018</h3>
      <Location>Bayonet Farm, Holmdel, NJ, USA</Location>

      <p>
        <strong>4.45pm</strong> – Bus departs from the Molly Pitcher Inn (Red Bank) to the venue.
      </p>

      <p>
        <strong>5pm - 10pm</strong> – We'll be kicking things off with cocktails
        before saying a few words, and then sitting down for a buffet. After
        dinner we'll be having some non-traditional pies and then dancing off all of
        that food in a hundred year old barn.
      </p>
      <p>
        <strong>10.15pm</strong> – Bus departs from the farm to Molly Pitcher & the Dubline House
        for the after party.
      </p>


      <Location>Dublin House, Red Bank, NJ, USA</Location>
      <p>
        <strong>11pm - Late</strong> – After party for those who aren't already
        partied out. We'll be upstairs at the &nbsp;
        <a href="https://goo.gl/maps/L5GgNwHnXNM2" target="_blank">Dublin House</a> until 1am, or until
        they kick us out.
      </p>

      <h3>Sunday, October 21st 2018</h3>
      <Location>61 Local, Brooklyn, NY, USA</Location>
      <p>
        <strong>7pm - Late</strong> – Drinks in one of our favo(u)rite
        neighbo(u)rhood spots.
      </p>

      <AfterEvent>
        If we're lucky enough to have you in town for the rest of the week, and
        you haven't yet had enough of us, we'll be planning some further events.
        Please keep us posted of your whereabouts.
      </AfterEvent>
    </SectionBody>
  </Section>
)

export default SchedulePage
