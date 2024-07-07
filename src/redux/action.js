import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants"


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        data: item,
    }
}

export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    data: item.id // Use the item's unique identifier
})
