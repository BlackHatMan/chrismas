export const toysControl = (data, applyFilter) => {

  const defaultShape = ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка']
  const defaultSize = ['большой', 'средний', 'малый']
  const defaultColor = ['белый', 'красный', 'синий', 'зелёный', 'желтый']

  let actualFilters = {
    shape: shape => applyFilter.shape.length > 0 ? applyFilter.shape.includes(shape.toLowerCase()) : defaultShape.includes(shape),
    size: size => applyFilter.size.length > 0 ? applyFilter.size.includes(size.toLowerCase()) : defaultSize.includes(size),
    color: color => applyFilter.color.length > 0 ? applyFilter.color.includes(color.toLowerCase()) : defaultColor.includes(color),
    year: year =>  year >= applyFilter.year.startYear &&  year <= applyFilter.year.endYear,
    count: count => count >= applyFilter.count.min && count <= applyFilter.count.max,
    name: name =>  name.toLowerCase().includes(applyFilter.str)

  } 
  function filterArray(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      return filterKeys.every(key => {
        if (typeof filters[key] !== 'function') return true;
        return filters[key](item[key]);
      });
    });
  }

  return filterArray(data, actualFilters)

}



