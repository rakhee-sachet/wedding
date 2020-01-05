import React from 'react'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import styled from 'styled-components'
import Layout from '../components/Layout'

const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const GettingTherePage = ({ google }) => (
  <Layout>
  <Section>
    <SectionTitle>Getting There</SectionTitle>

    <SectionBody>
      <p>
      The Yana Villas will host all of our celebrations. They are located 
      in Hua Hin approximately 4 hours south from Bangkok (Suvarnabhumi Airport).
      </p>
      <MapContainer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.9108215360657!2d99.97329101428862!3d12.522066591151964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fdad3b494e1729%3A0x828434ea563c4f58!2sThe%20YANA%20Villas!5e0!3m2!1sen!2sus!4v1575073316347!5m2!1sen!2sus"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        border="0"
        frameBorder="0"></iframe>
      </MapContainer>
      <p>
        Nong Kae,<br/>
        Hua Hin District,<br/>
        Prachuap Khiri Khan 77110, <br/>
        Thailand
      </p>
      <p>
        We have booked two Vans and one SUV (~15 people with luggage) for the morning of the 25th with departs 
        the airport at 8 am. Please mention it in the RSVP if you want us to reserve a spot for you.
      </p>

      <h3>By Bus</h3>

      <p>
        Bell Travel Services is highly recommended and economical if you are travelling in small
        groups. You can Book a bus ride before your arrival in Bangkok using  
        <a href="https://12go.asia/en" target="_blank" rel="noopener noreferrer">12go.asia</a>.
        Another option could be  
        <a href="https://airporthuahinbus.com/airport-to-huahin/" target="_blank" rel="noopener noreferrer">
          airporthuahinbus</a>
      </p>
      <h3>By Taxi</h3>

      <p>
        There are plenty of options to book Taxi's / Vans at the airport. You can also pre-book a ride on 
        <a href="https://12go.asia/en" target="_blank" rel="noopener noreferrer">12go.asia</a>.
      </p>
    </SectionBody>

  </Section>
  </Layout>
)

export default GettingTherePage
