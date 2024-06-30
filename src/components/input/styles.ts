import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  > input {
    width: 100%;
    flex: 1;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.base.text};

    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.base.button};
    background: ${({ theme }) => theme.base.input};

    &::placeholder {
      color: ${({ theme }) => theme.base.label};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.product['yellow-dark']};
      box-shadow: none;
    }
  }
`

export const InputContainerOptional = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.base.button};
  background: ${({ theme }) => theme.base.input};

  input {
    flex: 1;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.base.text};
    padding: 0.75rem;

    border: none;
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.base.label};
    }

    &:focus {
      box-shadow: none;
    }
  }

  span {
    position: absolute;
    right: 0;
    pointer-events: none;

    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme.base.label};
    cursor: text;
    padding: 0.75rem;
  }

  &:has(input:focus) {
    border: 1px solid ${({ theme }) => theme.product['yellow-dark']};
    box-shadow: none;

    span {
      color: transparent;
    }
  }
`
