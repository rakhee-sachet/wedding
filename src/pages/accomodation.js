import React from 'react'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import Layout from '../components/Layout'

const AccomodationPage = () => (
  <Layout>
    <Section>
      <SectionTitle>Accomodation</SectionTitle>

      <SectionBody>
        <p>
          The celebrations are going to be hosted at 
          <a href="http://www.theyanavillas.com" target="_blank" rel="noopener noreferrer">
            The Yana Villas
          </a> 
          for the two days. They have been kind enough to offer special rates to our guests attending 
          the wedding and we would highly recommend staying here. However, there are plenty
          options nearby that offer competative rates do that you can choose the best that
          suits your needs. There are plenty Airbnb options nearby as well.
        </p>

        <h3>Hotel Options</h3>

        <ul>
          <li>
          <a href="http://www.theyanavillas.com" target="_blank" rel="noopener noreferrer">
            The Yana Villas
          </a> 
            – We have a block of rooms reserved at the Yana Villas for the 25th, 26th and 27th for Feb. 
            Please let us know if you would like to book one of these rooms in you RSVP or by
            reaching out to either of us directly. The earlier you do this the better since
             there are limited number of rooms available.
             Special Rates - 
             <table>
              <tr>
                <th>Room</th>
                <th>Price</th>
                <th>Extra Bed</th>
              </tr>
              <tr>
                <td>Deluxe Room</td>
                <td>XXXX</td>
                <td>XXXX</td>
              </tr>
              <tr>
                <td>Dumplex Jacuzzi Suite</td>
                <td>XXXX</td>
                <td>XXXX</td>
              </tr>
             </table>
          </li>
          <li>
            <a href="https://goo.gl/maps/7eFeRzsYr1T2" target="_blank" rel="noopener noreferrer">
              Quality Inn, Milddletown
            </a>
            – We have a block of rooms at the Quality Inn reserved. Please ask to book in the
              Cohen + Bell party to get a discounted rate. Call (732)-671-3400.

            Milddletown is also served by Rail from Penn Station.
          </li>
          <li>
            <a href="http://www.theoysterpointhotel.com/" target="_blank" rel="noopener noreferrer">
              Oyster Point
            </a>
            – A more up-market hotel, right next to the Molly Pitcher.
          </li>
          <li>
            <a
              href="https://www.marriott.com/hotels/travel/ewrrb-courtyard-lincroft-red-bank/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Courtyard by Marriott
            </a>
            – A more affordable option still in Red Bank. Probably
            best to book this one via Expedia or Booking.com
          </li>
        </ul>

        <p>
          Additionally there are a few other options nearby, which will require you driving to the
          venue or taking a cab.
        </p>

        <ul>
          <li>
            <a href="http://www.coltsneckinnhotel.com/en-us" target="_blank" rel="noopener noreferrer">
              Colts Neck Inn Hotel
            </a>
            – Located ~11 mins from the venue by car, Colts Neck Inn is a more affordable
            option for accomodation (~$95 per night).
          </li>
        </ul>

        <p>
          AirBnBs are also an option in the area, please do this sooner than later as the availability
          is limited.
        </p>
      </SectionBody>
    </Section>
  </Layout>
)

export default AccomodationPage
