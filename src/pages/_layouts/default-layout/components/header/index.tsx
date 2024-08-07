import { HeaderContainer } from './styles'
import logo from '../../../../../assets/logo.svg'
import { Location } from './components/location'
import { CartButton } from '../../../../../components/cart-button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { CartContext } from '../../../../../contexts/cart-context'

export function Header() {
  const navigate = useNavigate()
  const { cart } = useContext(CartContext)

  const coffeeAmount = useMemo(() => {
    if (cart.coffees.length <= 0) return 0

    return cart.coffees.reduce((acc, coffee) => {
      return acc + coffee.coffeeQuantity
    }, 0)
  }, [cart.coffees])

  return (
    <HeaderContainer>
      <Link to="/coffee-delivery">
        <img className="logo" src={logo} alt="Logotipo Coffee Delivery" />
      </Link>
      <div>
        {cart.address.city && (
          <Location city={cart.address.city} state={cart.address.state} />
        )}
        <CartButton
          isToCart
          onClick={() => navigate('/coffee-delivery/checkout')}
          title="Ir para o carrinho"
          quantity={coffeeAmount}
          disabled={cart.coffees.length <= 0}
        />
      </div>
    </HeaderContainer>
  )
}
