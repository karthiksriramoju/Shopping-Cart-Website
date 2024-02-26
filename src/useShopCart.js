import { create } from 'zustand'
import { PRODUCTS } from './products'
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const useShopCart = create((set) => ({
  // Set default state
  cartItems: getDefaultCart(),

  // Define actions to modify state
  addToCart: (itemId) =>
    set((state) => ({
      cartItems: { ...state.cartItems, [itemId]: state.cartItems[itemId] + 1 },
    })),

  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: { ...state.cartItems, [itemId]: state.cartItems[itemId] - 1 },
    })),

  updateCartItemCount: (newAmount, itemId) =>
    set((state) => ({
      cartItems: { ...state.cartItems, [itemId]: newAmount },
    })),

  checkout: () => set({ cartItems: getDefaultCart() }),

  // Compute total cart amount
  getTotalCartAmount: () => {
    // Calculate total amount using cart items and product data
    let totalAmount = 0;
    for (const itemId in set.cartItems) {
      console.log(`Item ID: ${itemId}, Quantity: ${set.cartItems[itemId]}`);
      if (set.cartItems[itemId] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += set.cartItems[itemId] * itemInfo.price;
        } else {
          console.error(`Product with ID ${itemId} not found`);
        }
      }
    }
    console.log("Total Amount:", totalAmount);
    return totalAmount;
  },
  
}));

