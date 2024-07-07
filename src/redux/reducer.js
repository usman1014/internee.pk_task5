import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";



const INITIAL_STATE = [];
export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ];

            case REMOVE_FROM_CART:
                console.log("removed");
                return state.filter(item => item.id !== action.data); // Compare by item ID
    
    

        default:
            return state;






        // case SET_USER_DATA:
        //     return action.data.carts;


    }
};