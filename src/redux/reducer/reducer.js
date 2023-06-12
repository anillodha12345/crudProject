// import {  GET_USERS } from "../constained/constained";

import { SET_PRODUCTS } from "../constained/constained"

// const initial = {
//   users: [],
// };

// export const userReducer = (state = initial, action) => {
//   switch (action.type) {
//     case GET_USERS:
//       return { 
//         loading: false, 
//         users: action.payload 
//         };

//     default:
//       return state;
//   }
// };


const initialstate = {
    carts : []
}

export const cardReducer = (state = initialstate , action ) => { 
    switch(action.type) {
        case "ADD_CART" :
            const ItemIndex = state.carts.findIndex((items) => items.id === action.payload.id) 
            
            if(ItemIndex >= 0 ) {
              state.carts[ItemIndex].qnty += 1

            }
            else {
                const temp = {...action.payload ,qnty: 1}
            return {
                ...state ,
                carts : [...state.carts,temp]
            }

        }
            
        case "RMV_CART":
         const  data = state.carts.filter((items) => items.id !== action.payload )
         return {
            ...state,   
            carts : data
         }



         case "RMV_ONE":
            const Remove_Items_One = state.carts.findIndex((items) => items.id === action.payload.id)

        if(state.carts[Remove_Items_One].qnty >= 1) {
            const Remove_Item = state.carts[Remove_Items_One].qnty -= 1 ;
        //   console.log([...state.carts,Remove_Item ,"fdfhfisjnfik"])  
            return {
                ...state,
                carts : [...state.carts]
            }
        }
        else if (state.carts[Remove_Items_One].qnty === 1) {
            const data = state.const.filter((items) => items.id !== action.payload.id)
            return {
                ...state,
                carts : data
            }
        }
   
      default :
      return state

}
}

const intialState = {
    products: [],
  };
  
  export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case SET_PRODUCTS:
        return { 
            ...state,
            products : payload
        };
      default:
        return state;
    }
  };