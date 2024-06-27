import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer } from './styles'
import { ComponentProps } from 'react'

type CartButtonVariant = 'default' | 'highlight'

export interface CartButtonProps extends ComponentProps<'button'> {
  quantity?: number
  $variant?: CartButtonVariant
  isToCart?: boolean
}

export function CartButton({
  quantity,
  $variant,
  isToCart,
  ...rest
}: CartButtonProps) {
  return (
    <CartContainer $variant={$variant} {...rest}>
      <ShoppingCart size={22} weight="fill" />
      {quantity && isToCart && <span>{quantity}</span>}
    </CartContainer>
  )
}
