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
  common,
}) => {
  return (
    <ActionBar>
      <Flex>
        <Link as={`/lives/${live.id}`} href={`/lives_vdo?id=${live.id}`}>
          <a>
            <Button>{live.videoUrl ? common.Watch : common.BuyTicket}</Button>
          </a>
        </Link>
        <Flex pl="1.5rem" pt="0.3rem">
          <ModalButton
            modalType={2}
            modalURL={`${live.fightcardUrl}`}
            text={common.ViewFightcard}
          />
        </Flex>
        <Flex pl="1.5rem" pt="0.3rem">
          <ModalButton
            modalType={1}
            modalURL={`${live.promoUrl}`}
            text={common.PromoClip}
          />
        </Flex>
      </Flex>
    </ActionBar>
  )
}
