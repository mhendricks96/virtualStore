

const initialState = {
  products: ['something'],
  categories: ['number 1', 'number 2', 'porcelin god', 'total toilet'],
  activeCategory: null,
}

const categoryReducer = (state=initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD PRODUCT":
      return {...state, products: {...state.products, payload}}
      
    case "ADD CATEGORY":
      return {...state, categories: {...state.categories, payload}}

    case "CHANGE ACTIVE":
      return {...state, activeCategory: {...state.activeCategory, payload}}

    default:
      return state
        
  }
}

export const addCategory = (category) => {
  return {
    type: "ADD CATEGORY",
    payload: category
  }
}

export const addProduct = (product) => {
  return {
    type: "ADD PRODUCT",
    payload: product
  }
}

export const changeActive = (category) => {
  return {
    type: "CHOOSE CATEGORY",
    payload: category
  }
}

export default categoryReducer;