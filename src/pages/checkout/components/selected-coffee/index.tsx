import { Info, SelectedCoffeeContainer } from './styles'
import expressoTradicional from '../../../../assets/expresso.png'
import { Counter } from '../../../../components/counter'
import { Trash } from '@phosphor-icons/react'

interface SelectedCoffeeProps {
  coffeeImg: React.ReactNode
  name: string
  price: number
  quantity: number

  handleRemove: (name: string) => void
}

export function SelectedCoffee({
  coffeeImg,
  name,
  price,
  quantity,
  handleRemove,
}: SelectedCoffeeProps) {
  return (
    <SelectedCoffeeContainer>
      <Info>
        <img src={expressoTradicional} alt="" />
        <div className="Details">
          <p className="Name">Expresso Tradicional</p>
          <div className="Actions">
            <Counter />
            <button className="RemoveButton">
              <Trash size={16} /> REMOVER
            </button>
          </div>
        </div>
      </Info>
      <p className="Price">R$ 9,90</p>
    </SelectedCoffeeContainer>
  )
}
