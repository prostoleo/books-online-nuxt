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

export function getQueryStr(pageNumber = null, sortOptions = null) {
  return qs.stringify(
    {
      ...(sortOptions && {
        sort: sortHelperStr(sortOptions),
      }),
      fields: [
        'author',
        'title',
        'category',
        'subcategory',
        'yearOfPublish',
        'price',
        'discount',
        'uuid',
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

function sortHelperStr(sortArr) {
  // `${sortOptions.field}:${sortOptions.sort}`
  const arrOfStr = sortArr.reduce((arr, sortObj) => {
    sortObj.sort && arr.push(`${sortObj.field}:${sortObj.sort}`);

    return arr;
  }, []);
  console.log('arrOfStr: ', arrOfStr);

  return arrOfStr;
}

export function getSearctStr(searchQuery = null) {
  if (!searchQuery) return '';

  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            title: {
              $containsi: searchQuery,
            },
          },
          {
            author: {
              $containsi: searchQuery,
            },
          },
        ],
      },
      fields: [
        'author',
        'title',
        'category',
        'subcategory',
        'yearOfPublish',
        'price',
        'discount',
        'uuid',
      ],
      populate: {
        bookImage: {
          fields: ['name', 'url', 'formats'],
        },
      },

      pagination: {
        page: 1,
        pageSize: 24,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return query;
}

export function getBookQueryStrOnUuid(uuid = null) {
  if (!uuid) return '';

  const query = qs.stringify(
    {
      filters: {
        uuid: {
          $eq: uuid,
        },
      },
      populate: '*',

      /* pagination: {
        page: 1,
        pageSize: 24,
      }, */
    },
    {
      encodeValuesOnly: true,
    }
  );

  return query;
}

export function getBooksMayLike(category = null) {
  if (!category) return '';

  const query = qs.stringify(
    {
      filters: {
        category: {
          $eq: category,
        },
      },
      fields: ['title', 'category', 'subcategory', 'price', 'uuid'],
      populate: {
        bookImage: {
          fields: ['name', 'url', 'formats'],
        },
      },

      /* pagination: {
        page: 1,
        pageSize: 24,
      }, */
    },
    {
      encodeValuesOnly: true,
    }
  );

  return query;
}
