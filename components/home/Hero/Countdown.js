import { Component } from 'react'
import styled from 'styled-components'
import vars from '../../commons/vars'
import { dateDiff, pad } from '../../../util'

const Countdown = styled.div`
  background: ${vars.transDarkblue};
  position: absolute;
  top: 8rem;
  right: 20px;
  z-index: 1;
`
const Panel = styled.span`
  display: inline-block;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.1rem 0.5rem;
`
const Digit = styled.div`
  color: ${vars.yellow};
  font-family: 'Lucida Console', Monaco, monospace;
  font-size: 1.5rem;
  text-align: center;
`
const Text = styled.div`
  color: ${vars.white};
  font-family: 'Lucida Console', Monaco, monospace;
  font-size: 1rem;
  text-align: center;
`
const Label = styled.div`
  border-bottom: 1px solid ${vars.white};
  color: ${vars.yellow};
  font-family: 'Lucida Console', Monaco, monospace;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  padding: 0.3rem 0.5rem;
`
const LabelWithoutUnderLine = styled(Label)`border-bottom: 0px;`

const renderLiveNow = () => (
  <LabelWithoutUnderLine>LIVE NOW!!!</LabelWithoutUnderLine>
)
export default ({ liveDateStr, common }) => {
  const curDate = new Date()
  const liveDate = new Date(liveDateStr)
  const diffTime = curDate.getTime() - liveDate.getTime()
  const diff = dateDiff(curDate, liveDate)

  const renderCounter = diff => (
    <div>
      <Label>{common.Livein}</Label>
      <Panel>
        <Digit>{pad(diff.day)}</Digit>
        <Text>{common.DAY}</Text>
      </Panel>
      <Panel>
        <Digit>{pad(diff.hrs)}</Digit>
        <Text>{common.HRS}</Text>
      </Panel>
      <Panel>
        <Digit>{pad(diff.min)}</Digit>
        <Text>{common.MIN}</Text>
      </Panel>
    </div>
  )
  return (
    <Countdown>
      {diffTime >= 0 ? renderLiveNow() : renderCounter(diff)}
    </Countdown>
  )
}
