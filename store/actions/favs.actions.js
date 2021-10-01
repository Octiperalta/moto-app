export const ADD_ITEM_FAV = "ADD_ITEM";
export const REMOVE_ITEM_FAV = "REMOVE_ITEM";

export const addItemToFavs = item => ({ type: ADD_ITEM_FAV, item });
export const removeItemFromFavs = itemID => ({ type: REMOVE_ITEM_FAV, itemID });
