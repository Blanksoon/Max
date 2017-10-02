import { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Overlay } from 'rebass'
import Button from '../../commons/Button'
import BorderlessButton from '../../commons/BorderlessButton'
import ModalButton from '../../../containers/ModalButton'
import { Flex } from 'rebass'

const ActionBar = styled.div`margin-top: 1rem;`
export default ({
  live,
  fightcardVisible,
  promovideoVisible,
  showFightcard,
  showPromovideo,
}) => {
  return (
    <ActionBar>
      <Flex>
        <Link as={`/lives/${live.id}`} href={`/lives_vdo?id=${live.id}`}>
          <a>
            <Button>Buy Ticket</Button>
          </a>
        </Link>
        <ModalButton
          modalType={2}
          modalURL="static/flightcard.jpg"
          text="View Fightcard"
        />
        <ModalButton
          modalType={1}
          modalURL="static/flightcard.jpg"
          text="Promo Clip"
        />
      </Flex>
    </ActionBar>
  )
}
