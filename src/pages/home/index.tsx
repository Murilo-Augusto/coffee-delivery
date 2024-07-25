import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import coffeApresentation from '../../assets/coffee-apresentation.png'

import { CoffeeCard } from '../../components/coffee-card'
import {
  HomeApresentation,
  HomeContainer,
  CoffeeList,
  List,
  Filter,
  Tag,
} from './styles'
import { coffees } from '../../constants/coffees'
import { useMemo, useState } from 'react'

export function Home() {
  const [tag, setTag] = useState('')

  const theme = useTheme()

  const filteredCoffees = useMemo(() => {
    if (!tag) return coffees
    return coffees.filter((coffee) => coffee.tags.includes(tag.toUpperCase()))
  }, [tag])

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
            <Tag
              $isActive={tag === 'tradicional'}
              onClick={() => {
                if (tag && tag === 'tradicional') {
                  setTag('')
                  return
                }
                setTag('tradicional')
              }}
            >
              TRADICIONAL
            </Tag>
            <Tag
              $isActive={tag === 'especial'}
              onClick={() => {
                if (tag && tag === 'especial') {
                  setTag('')
                  return
                }
                setTag('especial')
              }}
            >
              ESPECIAL
            </Tag>
            <Tag
              $isActive={tag === 'com leite'}
              onClick={() => {
                if (tag && tag === 'com leite') {
                  setTag('')
                  return
                }
                setTag('com leite')
              }}
            >
              COM LEITE
            </Tag>
            <Tag
              $isActive={tag === 'alcoólico'}
              onClick={() => {
                if (tag && tag === 'alcoólico') {
                  setTag('')
                  return
                }
                setTag('alcoólico')
              }}
            >
              ALCOÓLICO
            </Tag>
            <Tag
              $isActive={tag === 'gelado'}
              onClick={() => {
                if (tag && tag === 'gelado') {
                  setTag('')
                  return
                }
                setTag('gelado')
              }}
            >
              GELADO
            </Tag>
          </Filter>
        </div>
        <List>
          {filteredCoffees &&
            filteredCoffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                {...coffee}
                coffeeImg={
                  <img
                    src={`../../../public/resources/coffees/${coffee.id}.png`}
                    alt={coffee.name}
                  />
                }
              />
            ))}
        </List>
      </CoffeeList>
    </HomeContainer>
  )
}
