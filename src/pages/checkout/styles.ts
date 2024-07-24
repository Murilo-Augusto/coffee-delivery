import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  gap: 4rem;

  max-width: 80rem;
  padding: 2rem;
  margin: 0 auto;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${({ theme }) => theme.base.subtitle};
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 28rem;
    gap: 2rem;
  }
`

export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.base.card};
  border-radius: 6px;

  .TopAddress {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.product.yellow};
      flex-shrink: 0;
    }

    h3 {
      font-size: 1rem;
      font-weight: normal;
      line-height: 130%;
      color: ${({ theme }) => theme.base.subtitle};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${({ theme }) => theme.base.text};
    }
  }

  .Inputs {
    display: grid;
    gap: 1rem;

    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 60px;

      #Street {
        grid-column: 1 / 4;
      }

      #Complement {
        grid-column: 2 / 4;
      }

      #City {
        grid-column: 2 / 3;
      }

      #State {
        grid-column: 3 / 4;
      }
    }
  }
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.base.card};

  .TopPayment {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.product.purple};
      flex-shrink: 0;
    }

    h3 {
      font-size: 1rem;
      font-weight: normal;
      line-height: 130%;
      color: ${({ theme }) => theme.base.subtitle};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${({ theme }) => theme.base.text};
    }
  }

  .PaymentOptions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`

export const SelectedCoffees = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.base.card};
  border-radius: 6px 44px 6px 44px;
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .PriceTitle {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme.base.text};
  }

  .Price {
    line-height: 130%;
    color: ${({ theme }) => theme.base.text};
  }

  .Total {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;
    color: ${({ theme }) => theme.base.subtitle};
  }
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.base.button};
`

export const ConfirmButton = styled.button`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 160%;
  color: ${({ theme }) => theme.base.white};
  padding: 0.75rem;

  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.product.yellow};

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.product['yellow-dark']};
  }
`
