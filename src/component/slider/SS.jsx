import React, {useState} from "react";


export const SS = ({setData, rawData, initialStatus}) => {

  const [status, setStatus] = useState(initialStatus)

  function sortTarget(e) {
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

      default:
    }
    sortCompilation()
  }

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
      const sortL = status.isBig ? result.filter(el => el.size === 'большой') : [];
      const sort = status.isMedium ? result.filter(el => el.size === 'средний') : [];
      const sortS = status.isSmall ? result.filter(el => el.size === 'малый') : [];
      result = [...sortL, ...sort, ...sortS]
    }
    setData(result)
  }

}