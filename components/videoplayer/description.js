import { LogoFooter } from '../home/Footer'
import styled from 'styled-components'
import { Media, Subhead, Image, Link, Flex, Box, Text } from 'rebass'

const H1 = styled.h1`margin: 0px;`
const P = styled.p`margin: 0px;`
const BackVideo = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`
const Description = () => (
  <div className="Description">
    <Box width={1} bg="pink" pb={1} pt={4}>
      <h1>
        <b>
          Max Ultimate Tournament &MAX World Champions<br />
          7 International Fights(1/4)
        </b>
      </h1>
      <h3>
        <b>On Air - Aug 6,2017 </b>
      </h3>
    </Box>
    <Flex>
      <Box width={1 / 4} bg="lightgreen">
        <h3>
          <b>Share on</b>
        </h3>
      </Box>
      <LogoFooter />
      <LogoFooter />
      <LogoFooter />
      <LogoFooter />
      <LogoFooter />
      <LogoFooter />
      <Box width={1} bg="red" />
      <Box width={1} bg="red" />
    </Flex>
    <Box width={1} bg="lightblue" pb={4}>
      <P>
        On sait depuis longtemps que travailler avec du texte lisible et
        contenant du sens est source de distractions, et empêche de se
        concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur
        un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il
        possède une distribution de lettres plus ou moins normale, et en tout
        cas comparable avec celle du français standard. De nombreuses suites
        logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem
        Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum'
        vous conduira vers de nombreux sites qui n'en sont encore qu'à leur
        phase de construction. Plusieurs versions sont apparues avec le temps,
        parfois par accident, souvent intentionnellement (histoire d'y rajouter
        de petits clins d'oeil, voire des phrases embarassantes).
      </P>
    </Box>
  </div>
)
export { Description }
