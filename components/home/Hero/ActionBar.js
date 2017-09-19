import { Component } from 'react'
import styled from 'styled-components'
import { Overlay } from 'rebass'
import Button from '../../commons/Button'
import BorderlessButton from '../../commons/BorderlessButton'
import ModalButton from '../../../containers/ModalButton'
import { Flex } from 'rebass'

const ActionBar = styled.div`margin-top: 1rem;`
export default ({
  lives,
  fightcardVisible,
  promovideoVisible,
  showFightcard,
  showPromovideo,
}) => {
  return (
    <ActionBar>
      <Flex>
        <Button>Buy Ticket</Button>
        <ModalButton
          modalType={2}
          modalURL="static/DailyFightcard 12092017 .jpg"
          text="View Fightcard"
        />
        <ModalButton
          modalType={1}
          modalURL="static/DailyFightcard 12092017 .jpg"
          text="Promo Clip"
        />
        {/* <BorderlessButton onClick={() => showFightcard(true)}>
        View Fightcard
      </BorderlessButton>
        <BorderlessButton onClick={() => showPromovideo(true)}>
          Promo Clip
        </BorderlessButton>
        {fightcardVisible && <Overlay>Fightcard</Overlay>}
        {promovideoVisible && <Overlay>Promo video</Overlay>} */}
      </Flex>
    </ActionBar>
  )
}
