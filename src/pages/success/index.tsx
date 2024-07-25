import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import illustration from '../../assets/illustration.png'

import {
  Address,
  DeliveryForecast,
  OrderInfo,
  SuccessContainer,
  SuccessPhrase,
  SuccessTitle,
  TypeOfPayment,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessPhrase>
          Agora é só aguardar que logo o café chegará até você
        </SuccessPhrase>
        <OrderInfo>
          <Address>
            <MapPin weight="fill" />
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
              Farrapos - Porto Alegre, RS
            </p>
          </Address>
          <DeliveryForecast>
            <Timer weight="fill" />
            <p>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </p>
          </DeliveryForecast>
          <TypeOfPayment>
            <CurrencyDollar weight="bold" />
            <p>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </p>
          </TypeOfPayment>
        </OrderInfo>
      </div>
      <img src={illustration} alt="" />
    </SuccessContainer>
  )
}
