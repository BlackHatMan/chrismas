import React from "react";


export const pseudoState = ({ e, setData, rawData, status, setStatus }) => {

  switch (e.value) {
    case 'шар':
      e.classList.toggle('active');
      status.isCircle = !status.isCircle
      setStatus(status)
      break;
    case 'колокольчик':
      e.classList.toggle('active')
      status.isBell = !status.isBell
      setStatus(status)
      break;
    case 'шишка':
      e.classList.toggle('active')
      status.isCone = !status.isCone
      setStatus(status)
      break;
    case 'снежинка':
      e.classList.toggle('active')
      status.isSnow = !status.isSnow
      setStatus(status)
      break;
    case 'фигурка':
      e.classList.toggle('active')
      status.isFigure = !status.isFigure
      setStatus(status)
      break;
    case 'большой':
      status.isBig = !status.isBig
      setStatus(status)
      break;
    case 'средний':
      status.isMedium = !status.isMedium
      setStatus(status)
      break;
    case 'малый':
      status.isSmall = !status.isSmall
      setStatus(status)
      break;
    case 'белый':
      status.isWhite = !status.isWhite
      setStatus(status)
      break;
    case 'желтый':
      status.isYellow = !status.isYellow
      setStatus(status)
      break;
    case 'красный':
      status.isRed = !status.isRed
      setStatus(status)
      break;
    case 'синий':
      status.isBlue = !status.isBlue
      setStatus(status)
      break;
    case 'зеленый':
      status.isGreen = !status.isGreen
      setStatus(status)
      break;

    default:
  }
  sortCompilation()


  function sortCompilation() {
    let result = [];

    if (status.isCircle) {
      const sorted = rawData.filter(el => el.shape === 'шар')
      result = [...result, ...sorted]
    }
    if (status.isBell) {
      const sorted = rawData.filter(el => el.shape === 'колокольчик')
      result = [...result, ...sorted]
    }
    if (status.isCone) {
      const sorted = rawData.filter(el => el.shape === 'шишка')
      result = [...result, ...sorted]
    }
    if (status.isSnow) {
      const sorted = rawData.filter(el => el.shape === 'снежинка')
      result = [...result, ...sorted]
    }
    if (status.isFigure) {
      const sorted = rawData.filter(el => el.shape === 'фигурка')
      result = [...result, ...sorted]
    }

    if (status.isBig || status.isMedium || status.isSmall) {
      result = result.length === 0 ? rawData : result;
      const large = status.isBig ? result.filter(el => el.size === 'большой') : [];
      const medium = status.isMedium ? result.filter(el => el.size === 'средний') : [];
      const small = status.isSmall ? result.filter(el => el.size === 'малый') : [];
      result = [...large, ...medium, ...small]
    }
    if (status.isWhite || status.isYellow || status.isRed || status.isBlue || status.isGreen) {
      result = result.length === 0 ? rawData : result;
      const white = status.isWhite ? result.filter(el => el.color === 'белый') : [];
      const yellow = status.isYellow ? result.filter(el => el.color === 'желтый') : [];
      const red = status.isRed ? result.filter(el => el.color === 'красный') : [];
      const blue = status.isBlue ? result.filter(el => el.color === 'синий') : [];
      const green = status.isGreen ? result.filter(el => el.color === 'зелёный') : [];
      result = [...white, ...yellow, ...red, ...blue, ...green]
    }

    let minYears = result.filter(el => el.year >= status.startYear);
    let maxYears = minYears.filter(el => el.year <= status.endYear);
    let minCount = maxYears.filter(el => el.count >= status.minCount);
    let maxCount = minCount.filter(el => el.count <= status.maxCount);


    return setData(maxCount)
  }

}
