import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme.base.button};
  border-radius: 6px;
  padding: 0.5rem 0.5rem;

  .CounterNumber {
    text-align: center;
    color: ${({ theme }) => theme.base.title};
  }

  .CounterButtons {
    all: unset;

    height: 0.875rem;
    width: 0.875rem;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.product.purple};
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.product['purple-dark']};
      }
    }
  }
`
