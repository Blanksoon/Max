import { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Overlay, Provider } from 'rebass'
import Button from '../../commons/Button'
import BorderlessButton from '../../commons/BorderlessButton'
import ModalButton from '../../../containers/ModalButton'
import { Flex, Box } from 'rebass'
import { media, theme } from '../../../tools/responsive'

const ActionBar = styled.div`
  margin-top: 1rem;
  ${media.iphone5`margin-top: 0.3rem;`};
`
export default ({
  live,
  fightcardVisible,
  promovideoVisible,
  showFightcard,
  showPromovideo,
  common,
}) => {
  return (
    // <Provider theme={theme}>
    <ActionBar>
      <Flex>
        <Box w={[4 / 12, 4 / 12, 4 / 12, 4 / 12, 4 / 12]}>
          <Link as={`/lives/${live.id}`} href={`/lives_vdo?id=${live.id}`}>
            <a>
              <Button>{live.videoUrl ? common.Watch : common.BuyTicket}</Button>
            </a>
          </Link>
        </Box>
        <Box
          w={[4.5 / 12, 4 / 12, 4 / 12, 4 / 12, 4 / 12]}
          pl={['0rem', '0rem', '0rem', '1rem', '1rem']}
          pt={['0rem', '0rem', '0.3rem', '0.3rem', '0.3rem']}
        >
          <ModalButton
            modalType={2}
            modalURL={`${live.fightcardUrl}`}
            text={common.ViewFightcard}
          />
        </Box>
        <Box
          w={[3.5 / 12, 4 / 12, 4 / 12, 4 / 12, 4 / 12]}
          pl={['0rem', '0rem', '0rem', '1rem', '1rem']}
          pt={['0rem', '0rem', '0.3rem', '0.3rem', '0.3rem']}
        >
          <ModalButton
            modalType={1}
            modalURL={`${live.promoUrl}`}
            text={common.PromoClip}
          />
        </Box>
      </Flex>
    </ActionBar>
    // </Provider>
  )
}
