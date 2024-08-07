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
import { useCallback, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cart-context'
import { PaymentOptions } from '../../constants/payment-options'

export function Success() {
  const { cart } = useContext(CartContext)
  const [paymentOption, setPaymentOption] = useState('')

  const translatePaymentOption = useCallback(
    (paymentOption: PaymentOptions) => {
      if (!paymentOption) return
      switch (paymentOption) {
        case 'credit_card':
          setPaymentOption('Cartão de Crédito')
          break

        case 'debit_card':
          setPaymentOption('Cartão de Débito')
          break

        case 'money':
          setPaymentOption('Dinheiro')
          break
      }
    },
    [],
  )

  useEffect(() => {
    translatePaymentOption(cart.paymentType)
  }, [cart.paymentType, translatePaymentOption])

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
              Entrega em{' '}
              <strong>
                {cart.address.street}, {cart.address.number}
              </strong>
              <br />
              {cart.address.neighborhood} - {cart.address.city},{' '}
              {cart.address.state}
            </p>
          </Address>
          <DeliveryForecast>
            <Timer weight="fill" />
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </DeliveryForecast>
          <TypeOfPayment>
            <CurrencyDollar weight="bold" />
            <p>
              Pagamento na entrega <br />
              <strong>{paymentOption}</strong>
            </p>
          </TypeOfPayment>
        </OrderInfo>
      </div>
      <img src={illustration} alt="" />
    </SuccessContainer>
  )
}
