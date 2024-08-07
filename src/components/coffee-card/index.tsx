import { useContext, useState } from 'react'
import { CartButton } from '../cart-button'
import { Counter } from '../counter'
import { CoffeeCardContainer } from './styles'
import { CartContext } from '../../contexts/cart-context'

interface CoffeeCardProps {
  id: string
  coffeeImg: React.ReactNode
  name: string
  description: string
  price: number
  tags: string[]
}

export function CoffeeCard({
  id,
  coffeeImg,
  name,
  description,
  price,
  tags,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addCoffee } = useContext(CartContext)

  function handleRemoveQuantity() {
    if (quantity <= 0) return
    setQuantity((prevState) => prevState - 1)
  }

  function handleAddQuantity() {
    if (quantity >= 99) return
    setQuantity((prevState) => prevState + 1)
  }

  return (
    <CoffeeCardContainer>
      {coffeeImg}
      <div className="TagsContainer">
        {tags.map((tag, index) => (
          <span className="Tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <h3 className="CoffeeName">{name}</h3>
      <p className="CoffeeDescription">{description}</p>
      <div className="Buy">
        <p className="Price">
          <span>R$</span> {price.toFixed(2)}
        </p>
        <div className="Actions">
          <Counter
            quantity={quantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
          <CartButton
            $variant="highlight"
            title="Adicionar ao carrinho"
            disabled={quantity <= 0}
            onClick={() => {
              addCoffee({
                id,
                coffeeName: name,
                coffeePrice: price,
                coffeeQuantity: quantity,
              })
            }}
          />
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
