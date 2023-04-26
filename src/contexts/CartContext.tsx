import { ReactNode, createContext, useEffect, useState } from 'react'
import { CoffeeCardType } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItemProps extends CoffeeCardType {
  quantity: number
}

interface CartContextType {
  cartItems: CartItemProps[]
  cartQuantityItem: number
  addCoffeeCart: (coffee: CartItemProps) => void
  changeCartItemQuantity: (
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: string) => void
  cleanCart: () => void
  cartItemsTotal: number
  priceDelivery: number
  cartTotalPrice: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>(() => {
    const storedCartItems = localStorage.getItem('coffeeDelivery:cartItems')
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })
  const cartQuantityItem = cartItems.length
  const priceDelivery = 3.5

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  const cartTotalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, priceDelivery)

  function addCoffeeCart(coffee: CartItemProps) {
    const coffeeExistsCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeExistsCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeExistsCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCartItemQuantity = produce(cartItems, (draft) => {
      const coffeeExist = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExist >= 0) {
        const item = draft[coffeeExist]
        draft[coffeeExist].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCartItemQuantity)
  }

  function removeCartItem(cartItemId: string) {
    const removeItem = produce(cartItems, (draft) => {
      const removeCartItemById = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (removeCartItemById >= 0) {
        draft.splice(removeCartItemById, 1)
      }
    })

    setCartItems(removeItem)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem('coffeeDelivery:cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantityItem,
        addCoffeeCart,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
        priceDelivery,
        cartTotalPrice,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
