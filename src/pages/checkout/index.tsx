import { useContext, useMemo } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import { PaymentOption } from './components/payment-option'
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
import { CartContext } from '../../contexts/cart-context'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const DELIVERY_VALUE = 3.5

const checkoutFormSchema = z.object({
  cep: z.string().min(1),
  street: z.string().min(1),
  number: z.coerce.number().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1).max(2),
})

type CheckoutFormType = z.infer<typeof checkoutFormSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { cart, choosePaymentOption, saveAddress, resetCart } =
    useContext(CartContext)

  const totalValue = useMemo(() => {
    if (cart.coffees.length <= 0) return 0

    return cart.coffees.reduce((acc, coffee) => {
      return acc + coffee.coffeePrice * coffee.coffeeQuantity
    }, 0)
  }, [cart.coffees])

  const { handleSubmit, register } = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: cart.address.cep,
      city: cart.address.city,
      complement: cart.address.complement,
      neighborhood: cart.address.neighborhood,
      number: cart.address.number,
      state: cart.address.state,
      street: cart.address.street,
    },
  })

  function handleConfirmOrder(data: CheckoutFormType) {
    if (!cart.paymentType) return

    saveAddress({
      cep: data.cep,
      city: data.city,
      neighborhood: data.neighborhood,
      number: data.number,
      state: data.state,
      street: data.street,
      complement: data.complement,
    })
    resetCart()
    navigate('/success')
  }

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

          <form
            id="checkoutForm"
            onSubmit={handleSubmit(handleConfirmOrder)}
            className="Inputs"
          >
            <Input id="cep" placeholder="CEP" {...register('cep')} />
            <Input id="street" placeholder="Rua" {...register('street')} />
            <Input
              id="number"
              type="number"
              placeholder="Número"
              {...register('number')}
            />
            <Input
              id="complement"
              placeholder="Complemento"
              optional
              {...register('complement')}
            />
            <Input
              id="neighborhood"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <Input id="city" placeholder="Cidade" {...register('city')} />
            <Input id="state" placeholder="UF" {...register('state')} />
          </form>
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
              setPaymentOption={choosePaymentOption}
              isSelected={cart.paymentType === 'credit_card'}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </PaymentOption>
            <PaymentOption
              paymentOption="debit_card"
              setPaymentOption={choosePaymentOption}
              isSelected={cart.paymentType === 'debit_card'}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </PaymentOption>
            <PaymentOption
              paymentOption="money"
              setPaymentOption={choosePaymentOption}
              isSelected={cart.paymentType === 'money'}
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
          {cart.coffees.map((coffee) => (
            <>
              <SelectedCoffee
                key={coffee.id}
                id={coffee.id}
                name={coffee.coffeeName}
                price={coffee.coffeePrice}
                quantity={coffee.coffeeQuantity}
                coffeeImg={
                  <img
                    src={`../../../resources/coffees/${coffee.id}.png`}
                    alt={coffee.coffeeName}
                  />
                }
              />
              <Divider />
            </>
          ))}

          <OrderDetails>
            <div>
              <span className="PriceTitle">Total de itens</span>
              <span className="Price">
                {' '}
                {totalValue.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <div>
              <span className="PriceTitle">Entrega</span>
              <span className="Price">
                {DELIVERY_VALUE.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
            <div>
              <span className="Total">Total</span>
              <span className="Total">
                {(totalValue + DELIVERY_VALUE).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </OrderDetails>
          <ConfirmButton type="submit" form="checkoutForm">
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </ConfirmOrder>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
