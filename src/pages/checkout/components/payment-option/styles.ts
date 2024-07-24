import styled from 'styled-components'

interface PaymentOptionContainerProps {
  $isSelected: boolean
}

export const PaymentOptionContainer = styled.button<PaymentOptionContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  height: 3.125rem;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.base.text};

  border-radius: 6px;
  border: solid 1px
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.product.purple : 'transparent'};

  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.product['purple-light'] : theme.base.button};

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.product.purple};
    flex-shrink: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.base.hover};
  }
`
