import styled from 'styled-components'
import { CartButtonProps } from '.'

export const CartContainer = styled.button<CartButtonProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'highlight':
        return theme.product['purple-dark']
      default:
        return theme.product['yellow-light']
    }
  }};
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'highlight':
        return theme.base.card
      default:
        return theme.product['yellow-dark']
    }
  }};

  transition: all 0.1s;

  &:hover {
    background: ${({ theme, $variant }) => {
      switch ($variant) {
        case 'highlight':
          return theme.product.purple
        default:
          return theme.product.yellow
      }
    }};
  }
`
