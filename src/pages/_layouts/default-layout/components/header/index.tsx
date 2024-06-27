import { HeaderContainer } from './styles'
import logo from '../../../../../assets/logo.svg'
import { Location } from './components/location'
import { CartButton } from '../../../../../components/cart-button'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Link to="/">
        <img className="logo" src={logo} alt="Logotipo Coffee Delivery" />
      </Link>
      <div>
        <Location city="Porto Alegre" state="RS" />
        <CartButton
          isToCart
          onClick={() => navigate('/checkout')}
          title="Ir para o carrinho"
        />
      </div>
    </HeaderContainer>
  )
}
