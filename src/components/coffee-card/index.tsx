import { CartButton } from '../cart-button'
import { Counter } from '../counter'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  coffeeImg: React.ReactNode
  name: string
  description: string
  price: number
  tags: string[]
}

export function CoffeeCard({
  coffeeImg,
  name,
  description,
  price,
  tags,
}: CoffeeCardProps) {
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
          <Counter />
          <CartButton $variant="highlight" title="Adicionar ao carrinho" />
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
