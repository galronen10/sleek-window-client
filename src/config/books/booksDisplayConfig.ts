import type {
  ICatalogStoreItemConfig,
  IBasicItemDisplayConfig,
  Book,
} from '../../types';

// Catalog store config
export const bookDisplayConfig: ICatalogStoreItemConfig<Book> = {
  labelGenerator: (book: Book) => `${book.title} by ${book.author}`,
  propertyDisplayList: [
    { label: 'Genre', key: 'genre' },
    { label: 'Pages', key: 'pageCount' },
  ],
  filterConfig: {
    genre: { label: 'Genre' },
    author: { label: 'Author' },
  },
  sortConfig: {
    yearPublished: {
      label: 'Year Published',
      optionFunc: (a, b) => a.yearPublished - b.yearPublished,
    },
  },
};

// Details config
export const bookDetailsConfig: IBasicItemDisplayConfig<Book> = {
  labelGenerator: (book: Book) => `${book.title} (${book.yearPublished})`,
  propertyDisplayList: [
    { label: 'Author', key: 'author' },
    { label: 'Genre', key: 'genre' },
    { label: 'Pages', key: 'pageCount' },
    {
      label: 'Price',
      key: 'price',
      displayFormatter: (data: number) => `$${data.toLocaleString()}`,
    },
  ],
};
