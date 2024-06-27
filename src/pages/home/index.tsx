import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import expressoTradicional from '../../assets/expresso.png'
import {
  HomeApresentation,
  HomeContainer,
  CoffeeList,
  List,
  Filter,
  Tag,
} from './styles'
import coffeApresentation from '../../assets/coffee-apresentation.png'
import { useTheme } from 'styled-components'
import { CoffeeCard } from '../../components/coffee-card'

export function Home() {
  const theme = useTheme()
  return (
    <HomeContainer>
      <HomeApresentation>
        <div className="Infos">
          <div className="Titles">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="Highlights">
            <div>
              <div
                style={{
                  background: ` ${theme.product['yellow-dark']}`,
                }}
              >
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <div
                style={{
                  background: ` ${theme.base.text}`,
                }}
              >
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <div
                style={{
                  background: ` ${theme.product.yellow}`,
                }}
              >
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <div
                style={{
                  background: ` ${theme.product.purple}`,
                }}
              >
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <img src={coffeApresentation} alt="" />
        <div className="BackgroundImage"></div>
      </HomeApresentation>
      <CoffeeList>
        <div className="CoffeeListHeader">
          <h2>Nossos cafés</h2>
          <Filter>
            <Tag>TRADICIONAL</Tag>
            <Tag>ESPECIAL</Tag>
            <Tag>COM LEITE</Tag>
            <Tag>ALCOÓLICO</Tag>
            <Tag>GELADO</Tag>
          </Filter>
        </div>
        <List>
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.5}
            tags={['TRADICIONAL']}
            coffeeImg={<img src={expressoTradicional} alt="" />}
          />
        </List>
      </CoffeeList>
    </HomeContainer>
  )
}
