import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5.75rem 2rem;
  }
`

export const SuccessTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  line-height: 130%;
  color: ${({ theme }) => theme.product['yellow-dark']};
`

export const SuccessPhrase = styled.p`
  font-size: 1.25rem;
  line-height: 130%;
  margin-bottom: 2.5rem;
`

export const OrderInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  background: transparent;
  border-radius: 6px 36px;
  border: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px; /* Largura da borda */
    background: transparent;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;

    /* Suporte */
    -webkit-mask-composite: destination-out;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
  }

  &::before {
    background: linear-gradient(
      145deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 100%
    );
  }

  @media screen and (min-width: 768px) {
    padding: 2.5rem;
  }
`

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    flex-shrink: 0;
    box-sizing: content-box;
    padding: 0.5rem;
    color: ${({ theme }) => theme.base.background};
    border-radius: 999px;
    background-color: ${({ theme }) => theme.product.purple};
  }
`

export const DeliveryForecast = styled(Address)`
  svg {
    background-color: ${({ theme }) => theme.product.yellow};
  }
`

export const TypeOfPayment = styled(Address)`
  svg {
    background-color: ${({ theme }) => theme.product['yellow-dark']};
  }
`
