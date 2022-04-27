export function getFilterCategoryStr(activeCategory) {
  let categoryStr = 'filters[category][$eq]=';

  switch (activeCategory) {
    case 'Все':
      categoryStr = '';
      break;

    default:
      categoryStr += `${activeCategory.toLowerCase()}&`;
      break;
  }

  return categoryStr;
}

export function getFilterSubcategoryStr(activeSubcategory) {
  console.log('activeSubcategory: ', activeSubcategory);
  let subcategoryStr = 'filters[subcategory][$eq]=';

  switch (activeSubcategory) {
    case 'Все':
      subcategoryStr = '';
      break;

    default:
      subcategoryStr += `${activeSubcategory}&`;
      break;
  }

  return subcategoryStr;
}
