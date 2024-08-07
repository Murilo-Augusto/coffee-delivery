import { Info, SelectedCoffeeContainer } from './styles'
import { Counter } from '../../../../components/counter'
import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/cart-context'

interface SelectedCoffeeProps {
  coffeeImg: React.ReactNode
  id: string
  name: string
  price: number
  quantity: number
}

export function SelectedCoffee({
  coffeeImg,
  id,
  name,
  price,
  quantity,
}: SelectedCoffeeProps) {
  const { removeCoffee, addCoffeeQuantity, removeCoffeeQuantity } =
    useContext(CartContext)

  function handleRemoveCoffee() {
    removeCoffee(id)
  }

  function handleAddQuantity() {
    addCoffeeQuantity(id)
  }

  function handleRemoveQuantity() {
    removeCoffeeQuantity(id)
  }

  return (
    <SelectedCoffeeContainer>
      <Info>
        {coffeeImg}
        <div className="Details">
          <p className="Name">{name}</p>
          <div className="Actions">
            <Counter
              quantity={quantity}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
            />
            <button className="RemoveButton" onClick={handleRemoveCoffee}>
              <Trash size={16} /> REMOVER
            </button>
          </div>
        </div>
      </Info>
      <p className="Price">
        {price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </SelectedCoffeeContainer>
  )
}
