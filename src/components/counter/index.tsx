import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button className="CounterButtons" title="Menos">
        <Minus size={14} weight="bold" />
      </button>
      <span className="CounterNumber">1</span>
      <button className="CounterButtons" title="Mais">
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
