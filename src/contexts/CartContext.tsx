import { ReactNode, createContext, useState } from 'react'
import { CoffeeCardType } from '../pages/Home/components/CoffeeCard'

export interface CartItemProps extends CoffeeCardType {
  quantity: number
}

interface CartContextType {
  cartItems: CartItemProps[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
