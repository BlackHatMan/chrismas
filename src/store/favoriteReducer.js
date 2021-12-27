import { initialFavorite } from "./initialState";

export const actionSetFavorite = (id) => ({ type: 'SET_FILTER_FAVORITE', id })

export const favoriteReducer = (state = initialFavorite, action) => {

  switch (action.type) {
    case 'SET_FILTER_FAVORITE': {
      const contain = state.favorite.includes(action.id)

      if (contain) {
        return {
          ...state, favorite: [...state.favorite.filter(el => el !== action.id)]
        }
      } else if (state.favorite.length >= 20) {
        alert('limit exceeded')
        return state
      }
      else {
        return {
          ...state, favorite: [...state.favorite, action.id]
        }
      }
    }
    default:
      return state
  }
}