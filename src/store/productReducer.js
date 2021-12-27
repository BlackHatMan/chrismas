import { initialState } from "./initialState"
 
export const actionSetShape = (filter, filterType) => ({ type: "SET_FILTER_SHAPE", filter, filterType })
export const actionSetSize = (filter, filterType) => ({ type: "SET_FILTER_SIZE", filter, filterType })
export const actionSetColor = (filter, filterType) => ({ type: "SET_FILTER_COLOR", filter, filterType })
export const actionSetYears = (start, end) => ({ type: "SET_FILTER_YEARS", start, end })
export const actionSetCount = (min, max) => ({ type: "SET_FILTER_COUNT", min, max })
export const actionSetName = (str) => ({ type: "SET_FILTER_NAME", str })
export const actionReset = () => ({type: "RESET"})

export const productReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_FILTER_SHAPE': {
      let contain = state.shape.some(el => el === action.filter)
      if (contain === false) {
        return {
          ...state, shape: [...state.shape, action.filter]
        }
      } else {
        return {
          ...state, shape: [...state.shape.filter(el => el !== action.filter)]
        }
      }
    }
    case 'SET_FILTER_SIZE': {
      let contain = state.size.some(el => el === action.filter)
      if (contain === false) {
        return {
          ...state, size: [...state.size, action.filter]
        }
      } else {
        return {
          ...state, size: [...state.size.filter(el => el !== action.filter)]
        }
      }
    }
    case 'SET_FILTER_COLOR': {
      let contain = state.color.some(el => el === action.filter)
      if (contain === false) {
        return {
          ...state, color: [...state.color, action.filter]
        }
      } else {
        return {
          ...state, color: [...state.color.filter(el => el !== action.filter)]
        }
      }
    }
    case 'SET_FILTER_YEARS': {
      return {
        ...state, year: {
          startYear: action.start,
          endYear: action.end
        }
      }
    } case 'SET_FILTER_COUNT': {
      return {
        ...state, count: {
          min: action.min,
          max: action.max
        }
      }
    } case 'SET_FILTER_NAME': {
      return {
        ...state, str: action.str
      }
    }
    case 'RESET': {
      return {
        ...state, 
        products: [],
        shape: [],
        color: [],
        size: []
      }
    }

    default:
      return state
  }
}