import styled from 'styled-components'
import { CartButtonProps } from '.'

export const CartContainer = styled.button<CartButtonProps>`
  position: relative;
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

  &:not(:disabled):hover {
    background: ${({ theme, $variant }) => {
      switch ($variant) {
        case 'highlight':
          return theme.product.purple
        default:
          return theme.product.yellow
      }
    }};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Quantity = styled.span`
  position: absolute;
  right: -8px;
  top: -8px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;

  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.base.white};
  border-radius: 100%;
  background: ${({ theme }) => theme.product['yellow-dark']};
`
