import type {
  ICatalogStoreItemConfig,
  IBasicItemDisplayConfig,
  Laptop,
} from '../../types';

// Catalog store config
export const laptopDisplayConfig: ICatalogStoreItemConfig<Laptop> = {
  labelGenerator: (laptop: Laptop) => `${laptop.brand} ${laptop.model}`,
  propertyDisplayList: [
    { label: 'Processor', key: 'processor' },
    { label: 'RAM', key: 'ram' },
    { label: 'Storage', key: 'storage' },
  ],
  filterConfig: {
    brand: { label: 'Brand' },
    ram: { label: 'RAM' },
  },
  sortConfig: {
    price: {
      label: 'Price',
      optionFunc: (a, b) => a.price - b.price,
    },
  },
};

// Details config
export const laptopDetailsConfig: IBasicItemDisplayConfig<Laptop> = {
  labelGenerator: (laptop: Laptop) =>
    `${laptop.brand} ${laptop.model} (${laptop.processor})`,
  propertyDisplayList: [
    { label: 'Processor', key: 'processor' },
    { label: 'RAM', key: 'ram' },
    { label: 'Storage', key: 'storage' },
    { label: 'Screen Size', key: 'screenSize' },
    {
      label: 'Price',
      key: 'price',
      displayFormatter: (data: number) => `$${data.toLocaleString()}`,
    },
  ],
};
