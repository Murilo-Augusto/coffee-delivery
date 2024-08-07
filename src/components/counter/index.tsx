import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

export interface CounterProps {
  quantity: number
  handleRemoveQuantity: () => void
  handleAddQuantity: () => void
}

export function Counter({
  quantity,
  handleAddQuantity,
  handleRemoveQuantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <button
        className="CounterButtons"
        title="Menos"
        onClick={handleRemoveQuantity}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span className="CounterNumber">{quantity}</span>
      <button
        className="CounterButtons"
        title="Mais"
        onClick={handleAddQuantity}
      >
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
