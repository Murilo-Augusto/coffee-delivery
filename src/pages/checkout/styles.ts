import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  gap: 4rem;

  max-width: 80rem;
  padding: 2rem;
  margin: 0 auto;

  h2 {
    font-size: 1.125rem;
    line-height: 130%;
    color: ${({ theme }) => theme.base.subtitle};

    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
`

export const CompleteOrder = styled.div`
  order: 1;

  @media screen and (min-width: 768px) {
    order: 0;
  }
`

export const Address = styled.div``

export const SelectedCoffees = styled.aside`
  order: 0;

  @media screen and (min-width: 768px) {
    order: 1;
  }
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

export const Input = styled.input``

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
