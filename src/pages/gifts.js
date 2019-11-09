import React from 'react'
import { Section, SectionTitle, SectionBody } from '../components/section'

const GiftsPage = () => (
  <Section>
    <SectionTitle>Gifts</SectionTitle>
    <SectionBody>
      <p>
        Gifts are not expected — your attendance is by far the most important
        gift to us. We know that many of you are traveling quite long distances
        and appreciate this much more than any item we could receive. However,
        if you would like to give a gift and are in need of ideas, we have two
        small registries at the below locations:
      </p>

      <ul>
        <li>
          <a
            href="https://www.amazon.com/wedding/chris-bell-dana-cohen-holmdel-october-2018/registry/39ESZLSWGOMUS"
            target="_blank"
          >
            Amazon Registry
          </a>
        </li>
        <li>
          <a href="https://www.zola.com/registry/dana-chris" target="_blank">
            Zola Registry
          </a>
        </li>
      </ul>
    </SectionBody>
  </Section>
)

export default GiftsPage