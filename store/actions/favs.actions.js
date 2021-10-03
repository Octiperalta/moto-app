export const ADD_ITEM_FAV = "ADD_ITEM_FAV";
export const REMOVE_ITEM_FAV = "REMOVE_ITEM_FAV";

export const addItemToFavs = item => ({ type: ADD_ITEM_FAV, item });
export const removeItemFromFavs = itemID => ({ type: REMOVE_ITEM_FAV, itemID });
