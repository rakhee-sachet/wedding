import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import styled from 'styled-components'
import Layout from '../components/Layout'

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 30px;
`

const bayonetFarmLatLng = {
  lat: 40.3570588,
  lng: -74.198656,
}

const GettingTherePage = ({ google }) => (
  <Layout>
  <Section>
    <SectionTitle>Getting There</SectionTitle>

    <SectionBody>
      <p>
        Our celebration is hosted at Bayonet Farm, which is located in Holmdel,
        New Jersey approximately 1 hour south from New York City.
      </p>

      <p>
        Bayonet Farm<br />
        41 Middletown Rd<br />
        Holmdel, NJ 07733.
      </p>

      <h3>By Bus</h3>

      <p>
        For those staying in Red Bank or arriving in Red Bank by train, we will
        be operating a bus to take people to and from the venue. The bus will
        depart at 4.45pm from The Molly Pitcher (~9 minute walk from the train) and will
        depart the wedding venue at 10.15pm to take you back to Red Bank.
      </p>

      <h3>By Car</h3>

      <p>
        There's plenty of parking at Bayonet Farm if you'd like to drive down.
        Finding the entrance to the farm can be slightly tricky – your GPS is
        likely to give you the wrong entrance and you should enter <strong>58 Middletown
        Road as the address instead</strong>.
      </p>

      <p>
        From the Garden State Parkway: Take the Garden State Parkway to exit
        114. From the GSP northbound exit, turn left on to Red Hill Road. From
        the GSP southbound exit, turn right on to Red Hill Road. Red Hill Road
        will become Middletown Road. Entrance to Bayonet Farm is on the right
        (just past the Middletown Road/ Stillwell Road T intersection.)
      </p>

      <a href="https://www.google.co.uk/maps/dir//Bayonet+Farm,+41+Middletown+Rd,+Holmdel,+NJ+07733/@40.3570588,-74.198656,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c23264b062822b:0xb0031c5ff7ed58f0!2m2!1d-74.1636371!2d40.3570588!3e0">
        Get directions on Google Maps
      </a>

      <h3>By Taxi</h3>

      <p>
        Ubers are available in Red Bank and the surrounding area, and there are
        plenty local taxi options around. We'd suggest booking a cab in advance
        if necessary, but remember that we'll be running the bus (as mentioned
        above) from Red Bank.
      </p>

      <h3>By Train</h3>
      <p>
        Red Bank is the nearest accessible train station; it's about a 10 minute
        drive from the venue. NJ Transit operates the line, which is the North
        Jersey Coast Line, accessible from Penn Station, NYC.
      </p>

      <p>
        Trains take about 1hr 20 mins from Penn Station to Red Bank station and
        operate every 30 minutes or so during the day, and every hour in the
        evenings and on Sundays.
      </p>

      <p>
        There's no need to book tickets in advance, just turn up at Penn
        Station and buy them before you travel. Tickets should cost about $16 or so
        per person each way.
      </p>

      <a href="https://www.njtransit.com" target="_blank" rel="noopener noreferrer">
        More information at NJ Transit
      </a>

      <h3>Airports</h3>

      <p>
        For all of those folks coming from a bit further away, Newark is the
        closest airport to the venue, but all of the airports around New York
        are accessible in under 2 hours.
      </p>
    </SectionBody>

    <MapContainer>
      <Map google={google} zoom={11} initialCenter={bayonetFarmLatLng}>
        <Marker
          name="Bayonet Farm"
          title="Bayonet Farm, Wedding Venue"
          position={bayonetFarmLatLng}
        />
      </Map>
    </MapContainer>
  </Section>
  </Layout>
)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAuW94H7S6hOfjV3lSh5wOBszyCvLrKtFI',
})(GettingTherePage)
