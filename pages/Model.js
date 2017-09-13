import React, { PropTypes } from 'react'
import {
  Overlay,
  Panel,
  PanelHeader,
  PanelFooter,
  Button,
  Text,
  //Close,
  Space,
} from 'rebass'

function SuccessModal({ modalOpen }) {
  return (
    <Overlay open={modalOpen.open}>
      <Panel theme="success">
        <PanelHeader>
          Wicckkkeedd!
          <Space auto />
          />
        </PanelHeader>
        <img
          src="http://lorempixel.com/512/384/cats"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Text>
          <b>Panel:</b> Something laid as a covering something else
        </Text>
        <PanelFooter>
          <Space auto />
          <Button theme="success" children="Meow!" />
        </PanelFooter>
      </Panel>
    </Overlay>
  )
}

export default SuccessModal
