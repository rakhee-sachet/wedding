import React from 'react'
import { Section, SectionTitle, SectionBody } from '../components/Section'
import Layout from '../components/Layout'

const AccomodationPage = () => (
  <Layout>
    <Section>
      <SectionTitle>Accomodation</SectionTitle>

      <SectionBody>
        <p>
          <a href="http://www.theyanavillas.com" target="_blank" rel="noopener noreferrer">
            The Yana Villas
          </a> 
          &nbsp; have been kind enough to offer special rates to our guests. We would highly
           recommend staying here as all the celebrations are hosted here. However, there are
           plenty of options nearby offering competitive rates.
        </p>

        <h3>Hotel Options</h3>
        <p>These are all the options that are at a walking distance from the Venue.</p> 
        <ul>
          <li>
          <a href="http://www.theyanavillas.com" target="_blank" rel="noopener noreferrer">
            The Yana Villas
          </a> 
          &nbsp;– We have a block of rooms reserved at the Yana Villas for the 25th, 26th and 27th for Feb. 
            Please let us know if you would like to book one of these rooms in your RSVP or by
            reaching out to either of us directly. The earlier you do this the better since
             there is a limited number of rooms available.
             Special Rates - 
             <table cellPadding="15">
              <tr>
                <th>Room</th>
                <th>Price</th>
                <th>Extra Bed</th>
              </tr>
              <tr>
                <td>Deluxe Room</td>
                <td>THB 3800 -/night</td>
                <td>THB 1500</td>
              </tr>
              <tr>
                <td>Duplex Jacuzzi Suite</td>
                <td>THB 5000 -/night </td>
                <td>THB 1500</td>
              </tr>
             </table>
          </li>
          <li>
            <a
              href="http://www.supatraresort.com"
              target="_blank"
              rel="noopener noreferrer"
            >Supatra Resort
            </a>
            &nbsp;– A surprisingly economical option given the gorgeous pictures of the property 
            we found online.
          </li>
          <li>
            <a href="http://surfandsandhuahin.com" target="_blank" rel="noopener noreferrer">
            Surf and Sand Resort
            </a>
            &nbsp;– A relatively priced resort right next to the Yana Villas.
          </li>
          <li>
            <a
              href="http://www.kundalabeachresort.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kundala Beach Resort
            </a>
            &nbsp;– A pricier option, also walking distance from the Vana Villas.
          </li>
          <li>
            <a
              href="https://nernchalet.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nern Chalet Beachfront Hotel
            </a>
            &nbsp;– An affordable option right at a 5 min walking distance. We  would suggest booking through Expedia since the booking section on the website is in Thai only -&nbsp; 
            <a href="https://www.expedia.com/Hua-Hin-Hotels-Nern-Chalet-Beachfront-Hotel.h6545859.Hotel-Information?MDPCID=US.META.HPA.HOTEL-CORESEARCH-desktop.HOTEL&MDPDTL=HTL.6545859.20191215.20191216.DDT.15.CID.2040586220.AUDID.&chkin=2%2F25%2F2020&chkout=2%2F27%2F2020&daysInFuture=&destination=Hua%20Hin%2C%20Thailand&group=&guestRating=&hotelName=&latLong=&mctc=10&misId=&neighborhoodId=6215554&poi=&pwa_ts=1575062005962&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&regionId=1461&rm1=a2&selected=6545859&sort=recommended&stayLength=&swpToggleOn=true&theme=&useRewards=true&userIntent=&x_pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            >Expedia Link</a>
          </li>
        </ul>

        <p>
        Additionally, there are a few other options nearby at a few minutes of driving distance. 
        </p>

        <p>
        AirBnBs and OYO's are also an option in the area. Please book them 
        sooner rather than later as the availability is limited. 
        </p>
      </SectionBody>
    </Section>
  </Layout>
)

export default AccomodationPage
