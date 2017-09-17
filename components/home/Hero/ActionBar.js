import { Component } from 'react'
import styled from 'styled-components'
import { Overlay } from 'rebass'
import Button from '../../commons/Button'
import BorderlessButton from '../../commons/BorderlessButton'

const ActionBar = styled.div`margin-top: 1rem;`
export default class extends Component {
  render() {
    const { live } = this.props
    return (
      <ActionBar>
        <Button>Buy Ticket</Button>
        <BorderlessButton onClick={() => this.props.showFightcard(true)}>
          View Fightcard
        </BorderlessButton>
        <BorderlessButton onClick={() => this.props.showPromoVideo(true)}>
          Promo Clip
        </BorderlessButton>
        {this.props.fightcardVisible && <Overlay>Fightcard</Overlay>}
        {this.props.promovideoVisible && <Overlay>Promo video</Overlay>}
      </ActionBar>
    )
  }
}
