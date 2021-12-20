import { combineReducers, createStore } from "redux";
import { toggleState, sliderState, sortState } from "./initialStore.js";

const slideReducer = (state = sliderState, action) => {
  switch (action.type) {
    case 'years':
      return { ...state, startYear: action.valueStart, endYear: action.valueEnd }
    case 'count':
      return { ...state, minCount: action.valueStart, maxCount: action.valueEnd }

    default:
      return state
  }
}
const toggleReducer = (state = toggleState, action) => {
  switch (action.type) {
    case 'шар':
      action.currentTarget.classList.toggle('active');
      return { ...state, isCircle: state.isCircle = !state.isCircle }
    case 'колокольчик':
      action.currentTarget.classList.toggle('active');
      return { ...state, isBell: state.isBellL = !state.isBell }
    case 'шишка':
      action.currentTarget.classList.toggle('active');
      return { ...state, isCone: state.isCone = !state.isCone }
    case 'снежинка':
      action.currentTarget.classList.toggle('active');
      return { ...state, isSnow: state.isSnow = !state.isSnow }
    case 'фигурка':
      action.currentTarget.classList.toggle('active');
      return { ...state, isFigure: state.isFigure = !state.isFigure }
    case 'большой':
      return { ...state, isBig: state.isBig = !state.isBig }
    case 'средний':
      return { ...state, isMedium: state.isMedium = !state.isMedium }
    case 'малый':
      return { ...state, isSmall: state.isSmall = !state.isSmall }
    case 'white':
      return { ...state, isWhite: state.isWhite = !state.isWhite }
    case 'yellow':
      return { ...state, isYellow: state.isYellow = !state.isYellow }
    case 'red':
      return { ...state, isRed: state.isRed = !state.isRed }
    case 'blue':
      return { ...state, isBlue: state.isBlue = !state.isBlue }
    case 'green':
      return { ...state, isGreen: state.isGreen = !state.isGreen }
    default:
      return state
  }
}
const sortReducer = (state = sortState, action) => {
  switch (action.type) {
    case 'nameUp':
      return { ...sortState, nameUp: true }
    case 'nameDown':
      return { ...sortState, nameDown: true }
    case 'countUp':
      return { ...sortState, countUp: true }
    case 'countDown':
      return { ...sortState, countDown: true }
    default:
      return state
  }

}

const rootReducer = combineReducers({
  toggle: toggleReducer,
  range: slideReducer,
  sort: sortReducer
})

export const store = createStore(rootReducer) 