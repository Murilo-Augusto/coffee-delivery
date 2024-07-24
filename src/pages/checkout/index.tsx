import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import { SelectedCoffee } from './components/selected-coffee'
import { Input } from '../../components/input'
import {
  Address,
  CheckoutContainer,
  CompleteOrder,
  SelectedCoffees,
  Divider,
  ConfirmOrder,
  ConfirmButton,
  OrderDetails,
  Payment,
} from './styles'
import { PaymentOption } from './components/payment-option'
import { PaymentOptions } from '../../constants/payment-options'
import { useState } from 'react'

export function Checkout() {
  const [paymentOption, setPaymentOption] = useState<PaymentOptions>()

  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
        <Address>
          <div className="TopAddress">
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="Inputs">
            <Input id="Cep" placeholder="CEP" />
            <Input id="Street" placeholder="Rua" />
            <Input id="Number" placeholder="Número" />
            <Input id="Complement" placeholder="Complemento" optional />
            <Input id="Neighborhood" placeholder="Bairro" />
            <Input id="City" placeholder="Cidade" />
            <Input id="State" placeholder="UF" />
          </div>
        </Address>
        <Payment>
          <div className="TopPayment">
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="PaymentOptions">
            <PaymentOption
              paymentOption="credit_card"
              setPaymentOption={setPaymentOption}
              isSelected={paymentOption === 'credit_card'}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </PaymentOption>
            <PaymentOption
              paymentOption="debit_card"
              setPaymentOption={setPaymentOption}
              isSelected={paymentOption === 'debit_card'}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </PaymentOption>
            <PaymentOption
              paymentOption="money"
              setPaymentOption={setPaymentOption}
              isSelected={paymentOption === 'money'}
            >
              <Money size={16} />
              DINHEIRO
            </PaymentOption>
          </div>
        </Payment>
      </CompleteOrder>

      <SelectedCoffees>
        <h2>Cafés selecionados</h2>
        <ConfirmOrder>
          <SelectedCoffee />
          <Divider />
          <SelectedCoffee />
          <Divider />
          <OrderDetails>
            <div>
              <span className="PriceTitle">Total de itens</span>
              <span className="Price">R$ 29,70</span>
            </div>
            <div>
              <span className="PriceTitle">Entrega</span>
              <span className="Price">R$ 3,50</span>
            </div>
            <div>
              <span className="Total">Total</span>
              <span className="Total">R$ 33,20</span>
            </div>
          </OrderDetails>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </ConfirmOrder>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
