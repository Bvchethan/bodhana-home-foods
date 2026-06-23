import { useEffect, useState } from 'react'

const STORAGE_KEY = 'bodhana-home-foods-cart'

const readStoredCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function useCart() {
  const [cartItems, setCartItems] = useState(readStoredCart)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, selectedWeight, selectedPrice) => {
    const cartItemId = `${product.id}-${selectedWeight}`
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === cartItemId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [
        ...currentItems,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          image: product.image,
          weight: selectedWeight,
          price: selectedPrice,
          quantity: 1,
        },
      ]
    })
  }

  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  }
}
