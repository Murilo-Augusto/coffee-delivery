import { createContext, ReactNode, useEffect, useState } from 'react'
import { PaymentOptions } from '../constants/payment-options'

export interface Coffee {
  id: string
  coffeeName: string
  coffeePrice: number
  coffeeQuantity: number
}

export interface Address {
  cep: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface Cart {
  coffees: Coffee[]
  address: Address
  paymentType: PaymentOptions
}

interface CartContextType {
  cart: Cart
  choosePaymentOption: (paymentOption: PaymentOptions) => void
  saveAddress: (address: Address) => void
  addCoffee: (coffeeToAdd: Coffee) => void
  removeCoffee: (coffeeId: string) => void
  addCoffeeQuantity: (coffeeId: string) => void
  removeCoffeeQuantity: (coffeeId: string) => void
  resetCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const storedCartAsJSON = localStorage.getItem('@coffee-delivery:cart-1.0.0')
  const [cart, setCart] = useState(
    storedCartAsJSON
      ? (JSON.parse(storedCartAsJSON) as Cart)
      : ({
          coffees: [],
          address: {} as Address,
          paymentType: '' as PaymentOptions,
        } as Cart),
  )

  function addCoffee(coffeeToAdd: Coffee) {
    const isCoffeeAdded = !!cart.coffees.find(
      (coffee) => coffee.id === coffeeToAdd.id,
    )
    if (isCoffeeAdded) {
      const combineCoffees = cart.coffees.map((coffee) => {
        if (coffee.id === coffeeToAdd.id) {
          return {
            ...coffeeToAdd,
            coffeeQuantity: coffee.coffeeQuantity + coffeeToAdd.coffeeQuantity,
          }
        }
        return coffee
      })

      setCart((prevCart) => {
        const newCart: Cart = {
          ...prevCart,
          coffees: combineCoffees,
        }

        return newCart
      })
      return
    }

    setCart((prevCart) => {
      const newCart: Cart = {
        ...prevCart,
        coffees: [...prevCart.coffees, coffeeToAdd],
      }

      return newCart
    })
  }

  function removeCoffee(coffeeId: string) {
    const filteredCoffees = cart.coffees.filter(
      (coffee) => coffee.id !== coffeeId,
    )

    setCart((prevCart) => {
      const newCart: Cart = {
        ...prevCart,
        coffees: [...filteredCoffees],
      }

      return newCart
    })
  }

  function addCoffeeQuantity(coffeeId: string) {
    const newQuantityCoffee = cart.coffees.map((coffee) => {
      if (coffee.id === coffeeId) {
        if (coffee.coffeeQuantity >= 99) return coffee
        return {
          ...coffee,
          coffeeQuantity: coffee.coffeeQuantity + 1,
        }
      }
      return coffee
    })

    setCart((prevCart) => {
      const newCart: Cart = {
        ...prevCart,
        coffees: [...newQuantityCoffee],
      }

      return newCart
    })
  }

  function removeCoffeeQuantity(coffeeId: string) {
    const newQuantityCoffee = cart.coffees.map((coffee) => {
      if (coffee.id === coffeeId) {
        if (coffee.coffeeQuantity <= 0) return coffee
        return {
          ...coffee,
          coffeeQuantity: coffee.coffeeQuantity - 1,
        }
      }
      return coffee
    })

    setCart((prevCart) => {
      const newCart: Cart = {
        ...prevCart,
        coffees: [...newQuantityCoffee],
      }

      return newCart
    })
  }

  function saveAddress(address: Address) {
    setCart((prevCart) => {
      const newCart: Cart = {
        ...prevCart,
        address: { ...address },
      }

      return newCart
    })
  }

  function choosePaymentOption(paymentOption: PaymentOptions) {
    setCart((prevCart) => {
      const newCart: Cart = {
        ...prevCart,
        paymentType: paymentOption,
      }

      return newCart
    })
  }

  function resetCart() {
    setCart((prevCart) => {
      const newCart: Cart = {
        ...prevCart,
        coffees: [],
      }

      return newCart
    })
  }

  useEffect(() => {
    const cartJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', cartJSON)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        choosePaymentOption,
        saveAddress,
        removeCoffee,
        addCoffee,
        addCoffeeQuantity,
        removeCoffeeQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
