import qs from 'qs';

export function getFilterCategoryStr(activeCategory) {
  if (!activeCategory) return '';

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
  if (!activeSubcategory) return '';
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

export function getBooksOnSale(onSale = false) {
  if (!onSale) return '';

  return `filters[discount][$gt]=0&`;
}

export function getQueryStr(
  pageNumber = null,

  sortOptions = null
) {
  return qs.stringify(
    {
      ...(sortOptions && {
        sort: [`${sortOptions.field}:${sortOptions.sort}`],
      }),
      fields: [
        'author',
        'title',
        'category',
        'subcategory',
        'yearOfPublish',
        'price',
        'discount',
      ],
      populate: {
        bookImage: {
          fields: ['name', 'url', 'formats'],
        },
      },

      pagination: {
        ...(pageNumber && { page: pageNumber }),
        pageSize: 24,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
}
