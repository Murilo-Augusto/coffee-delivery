import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;

  padding: 0.5rem 0.25rem;

  .Price {
    font-weight: bold;
    line-height: 130%;
    color: ${({ theme }) => theme.base.text};
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }

  .Details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .Name {
      line-height: 130%;
      color: ${({ theme }) => theme.base.subtitle};
    }

    .Actions {
      display: flex;
      gap: 0.5rem;

      .RemoveButton {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        font-size: 0.875rem;
        line-height: 160%;
        color: ${({ theme }) => theme.base.text};

        padding: 0 0.5rem;

        border: none;
        border-radius: 6px;
        background-color: ${({ theme }) => theme.base.button};
        transition: color 0.1s;
        cursor: pointer;

        svg {
          color: ${({ theme }) => theme.product.purple};
          transition: color 0.1s;
        }

        &:hover {
          background-color: ${({ theme }) => theme.base.hover};

          svg {
            color: ${({ theme }) => theme.product['purple-dark']};
          }
        }
      }
    }
  }
`
