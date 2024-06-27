import styled from 'styled-components'
import bg from '../../assets/background.png'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeApresentation = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  position: relative;

  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 5.75rem 2rem;

  .BackgroundImage {
    inset: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(3rem);
    z-index: -1;
  }

  .Infos {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }

  .Titles {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Titles h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 900;
    color: ${({ theme }) => theme.base.title};
  }

  .Titles p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme.base.subtitle};
  }

  .Highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem;
    color: ${({ theme }) => theme.base.text};
    line-height: 130%;

    > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      div {
        padding: 0.5rem;
        border-radius: 100%;
        width: 1rem;
        height: 1rem;
        box-sizing: content-box;
      }

      svg {
        fill: white;
      }
    }
  }

  > img {
    align-self: center;
    width: 100%;
    max-width: 476px;
    max-height: 360px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0rem 2rem 2rem;
  }
`

export const CoffeeList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  position: relative;

  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 2rem;

  .CoffeeListHeader {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 640px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 900;
    color: ${({ theme }) => theme.base.subtitle};
  }
`

export const Filter = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Tag = styled.button`
  all: unset;

  font-size: 0.625rem;
  font-weight: bold;
  line-height: 130%;

  padding: 0.375rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.product.yellow};
  border-radius: 100px;
  color: ${({ theme }) => theme.product['yellow-dark']};

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.product.yellow};
    color: ${({ theme }) => theme.base.white};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
