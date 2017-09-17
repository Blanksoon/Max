import styled from 'styled-components'
import Button from '../../commons/Button'
import BorderlessButton from '../../commons/BorderlessButton'

const ActionBar = styled.div`margin-top: 1rem;`
export default ({ live }) => {
  return (
    <ActionBar>
      <Button>Buy Ticket</Button>
      <BorderlessButton>View Fightcard</BorderlessButton>
      <BorderlessButton>Promo Clip</BorderlessButton>
    </ActionBar>
  )
}
