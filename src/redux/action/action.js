// import axios from "axios";
// import {  GET_USERS } from "../constained/constained";

import { REMOVE_SELECT_PRODUCTS, SELECT_PRODUCTS, SET_PRODUCTS } from "../constained/constained"

// export const userAction = () => async (dispatch) => {
//   const { data } = await axios.get("https://fakestoreapi.com/products");
//   dispatch({ type: GET_USERS, payload: data });
// };



//Add Items
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

//Remove Items
export const DELETE = (id) => {
    return {
        type: "RMV_CART",
        payload : id
    }
}

// Remove Individual Items 

export const REMOVE_ITEMS_ONE = (items) => {
    return{
        type : "RMV_ONE",
        payload : items
    }

}

export const setProducts = (products) => {
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  };

// export const selectProducts = (product) => {
//     return {
//         type:SELECT_PRODUCTS,
//         payload : product

//     }
// }
