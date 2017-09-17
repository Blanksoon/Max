import { Component } from 'react'
import styled from 'styled-components'
import { Overlay } from 'rebass'
import Button from '../../commons/Button'
import BorderlessButton from '../../commons/BorderlessButton'

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
      <Button>Buy Ticket</Button>
      <BorderlessButton onClick={() => showFightcard(true)}>
        View Fightcard
      </BorderlessButton>
      <BorderlessButton onClick={() => showPromovideo(true)}>
        Promo Clip
      </BorderlessButton>
      {fightcardVisible && <Overlay>Fightcard</Overlay>}
      {promovideoVisible && <Overlay>Promo video</Overlay>}
    </ActionBar>
  )
}
