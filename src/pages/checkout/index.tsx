import { MapPinLine } from '@phosphor-icons/react'
import {
  Address,
  CheckoutContainer,
  CompleteOrder,
  SelectedCoffees,
  Divider,
  ConfirmOrder,
  ConfirmButton,
  OrderDetails,
} from './styles'
import { SelectedCoffee } from './components/selected-coffee'
import { Input } from '../../components/input'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
        <Address>
          <div className="Top">
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
