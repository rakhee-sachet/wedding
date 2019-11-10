import React from 'react'
import { Section, SectionTitle, SectionBody } from '../components/Section'

const AccomodationPage = () => (
  <Section>
    <SectionTitle>Accomodation</SectionTitle>

    <SectionBody>
      <p>
        As the celebration is going to be hosted outside of New York City, you
        might want to consider staying nearby so that you don't need to travel
        late in the evening.
      </p>

      <h3>Hotel Options</h3>

      <p>
        In the nearby town of Red Bank, N.J. there are three hotel options, all in walking distance
        from the Red Bank train station.
      </p>

      <ul>
        <li>
          <a href="http://themollypitcher.com/" target="_blank" rel="noopener noreferrer">
            Molly Pitcher Inn
          </a>
          – We have a block of rooms reserved in the Molly Pitcher Inn until August 21st. Call
          reservations at 732-747-2500 / 1-800-221-1372 and specify that you'd
          like to book a room in the Cohen / Bell party if you wish to take one of these rooms.
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
)

export default AccomodationPage
