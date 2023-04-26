import { Box } from '@chakra-ui/react'
import Section from 'components/Section/Section'
import React from 'react'

export default function HomePage() {
  return (
    <Section >
      <Box display='flex' flexDirection='column' alignItems='center' width='70%'>
        <h1>IDN</h1>
        <p>This is my first project using React. I also used the Chakra UI component library. Some design elements are a bit wonky and not very pretty, but please keep in mind that I'm not a designer, I'm a future developer.</p>
        <br/>
        <p>Thank you for your attention! Have a good evening!</p>
      </Box>
    </Section >
  )
}
