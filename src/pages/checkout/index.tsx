import { MapPinLine } from '@phosphor-icons/react'
import {
  Address,
  CheckoutContainer,
  Input,
  CompleteOrder,
  SelectedCoffees,
  Divider,
  ConfirmOrder,
  ConfirmButton,
  OrderDetails,
} from './styles'
import { SelectedCoffee } from './components/selected-coffee'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
        <Address>
          <div>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div>
            <Input id="cep" placeholder="CEP" />
            <Input id="street" placeholder="Rua" />
            <Input id="number" placeholder="Número" />
            <Input id="complement" placeholder="Complemento" />
            <Input id="complement" placeholder="Complemento" />
            <Input id="neighborhood" placeholder="Bairro" />
            <Input id="city" placeholder="Cidade" />
            <Input id="state" placeholder="UF" />
          </div>
        </Address>
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
