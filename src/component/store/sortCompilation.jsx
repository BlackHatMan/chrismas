import rawData from "../../js/data"

export function sortCompilation(status) {
  let result = [];

  if (status.toggle.isCircle) {
    const sorted = rawData.filter(el => el.shape === 'шар')
    result = [...result, ...sorted]
  }
  if (status.toggle.isBell) {
    const sorted = rawData.filter(el => el.shape === 'колокольчик')
    result = [...result, ...sorted]
  }
  if (status.toggle.isCone) {
    const sorted = rawData.filter(el => el.shape === 'шишка')
    result = [...result, ...sorted]
  }
  if (status.toggle.isSnow) {
    const sorted = rawData.filter(el => el.shape === 'снежинка')
    result = [...result, ...sorted]
  }
  if (status.toggle.isFigure) {
    const sorted = rawData.filter(el => el.shape === 'фигурка')
    result = [...result, ...sorted]
  }

  if (status.toggle.isBig || status.toggle.isMedium || status.toggle.isSmall) {
    result = result.length === 0 ? rawData : result

    const large = status.toggle.isBig ? result.filter(el => el.size === 'большой') : []
    const medium = status.toggle.isMedium ? result.filter(el => el.size === 'средний') : []
    const small = status.toggle.isSmall ? result.filter(el => el.size === 'малый') : []
    result = [...large, ...medium, ...small]
  }
  if (status.toggle.isWhite || status.toggle.isYellow || status.toggle.isRed || status.toggle.isBlue || status.toggle.isGreen) {
    result = result.length === 0 ? rawData : result
    const white = status.toggle.isWhite ? result.filter(el => el.color === 'белый') : []
    const yellow = status.toggle.isYellow ? result.filter(el => el.color === 'желтый') : []
    const red = status.toggle.isRed ? result.filter(el => el.color === 'красный') : []
    const blue = status.toggle.isBlue ? result.filter(el => el.color === 'синий') : []
    const green = status.toggle.isGreen ? result.filter(el => el.color === 'зелёный') : []
    result = [...white, ...yellow, ...red, ...blue, ...green]
  }

  let slider = result.filter(el =>
    el.year >= status.range.startYear
    && el.year <= status.range.endYear
    && el.count >= status.range.minCount
    && el.count <= status.range.maxCount
  )


  if (status.sort.nameUp) {
    slider.sort((a, b) => {
      if (a.name > b.name) return 1;   ///todo localeCompare 
      if (a.name < b.name) return -1;
      return 0
    })
  }
  if (status.sort.nameDown) {
    slider.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0
    })
  }
  if (status.sort.countDown) {
    slider.sort((a, b) => {
      if (Number.parseInt(a.count) < Number.parseInt(b.count)) return 1;
      if (Number.parseInt(a.count) > Number.parseInt(b.count)) return -1;

      return 0
    })
  }
  if (status.sort.countUp) {
    slider.sort((a, b) => {
      if (Number.parseInt(a.count) > Number.parseInt(b.count)) return 1;
      if (Number.parseInt(a.count) < Number.parseInt(b.count)) return -1;
      return 0
    })
  }


  return slider
}