
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export const addItem = item => ({ type: ADD_ITEM, item });
export const removeItem = itemID => ({ type: REMOVE_ITEM, itemID });


