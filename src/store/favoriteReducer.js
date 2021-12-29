import { initialFavorite } from "./initialState";

export const actionSetFavorite = (item) => ({ type: 'SET_FILTER_FAVORITE', item })

export const favoriteReducer = (state = initialFavorite, action) => {

  switch (action.type) {

    case 'SET_FILTER_FAVORITE': {

      console.log(" action", action)
      const contain = state.items.some(el => el.num === action.item.num)

      if (contain) {
        return {
          ...state, items: [...state.items.filter(el => el.num !== action.item.num)]
        }
      } else if (state.favorite.length >= 20) {
        alert('limit exceeded')
        return state
      }
      else {
        return {
          ...state, items: [...state.items, action.item]
        }
      }
    }
    default:
      return state
  }
}