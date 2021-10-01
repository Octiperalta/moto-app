export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const FILTER_PRODUCT = "FILTER_PRODUCT"
export const FILTER_POPULAR = "FILTER_POPULAR";

export const selectProduct = productID => ({ type: SELECT_PRODUCT, productID });
export const filterProducts = categoryID => ({ type: FILTER_PRODUCT, categoryID })
export const filterPopular = () => ({type: FILTER_POPULAR})
