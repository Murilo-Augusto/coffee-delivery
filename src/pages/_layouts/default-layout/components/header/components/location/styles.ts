import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.product['purple-light']};
  color: ${({ theme }) => theme.product.purple};

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.product['purple-dark']};
  }
`
