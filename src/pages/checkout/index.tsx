import { MapPinLine } from '@phosphor-icons/react'
import {
  Address,
  CheckoutContainer,
  Input,
  Order,
  SelectedCoffees,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Order>
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
      </Order>
      <SelectedCoffees>
        <h2>Cafés selecionados</h2>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
