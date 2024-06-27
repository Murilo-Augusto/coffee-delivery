import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.5rem 1.25rem;
  background: ${({ theme }) => theme.base.card};
  border-radius: 6px 36px;

  img {
    width: 100%;
    max-width: 120px;
    margin: -1.25rem 0 0.75rem;
  }

  .TagsContainer {
    margin-bottom: 1rem;
  }

  .Tag {
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 130%;

    padding: 0.25rem 0.5rem;

    color: ${({ theme }) => theme.product['yellow-dark']};
    border-radius: 100px;
    background: ${({ theme }) => theme.product['yellow-light']};
  }

  .CoffeeName {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;
    color: ${({ theme }) => theme.base.subtitle};
    margin-bottom: 0.5rem;
  }

  .CoffeeDescription {
    color: ${({ theme }) => theme.base.label};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    margin-bottom: 2rem;
  }

  .Buy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .Price {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.base.text};

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: normal;
      font-size: 0.875rem;
    }
  }

  .Actions {
    display: flex;
    gap: 0.5rem;
  }
`
