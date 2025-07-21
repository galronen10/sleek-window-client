import type {
  Car,
  IBasicItemDisplayConfig,
  ICatalogStoreItemConfig,
} from '../../types';

export const carDisplayConfig: ICatalogStoreItemConfig<Car> = {
  labelGenerator: (car: Car) => `${car.manufacturer} ${car.model}`,
  propertyDisplayList: [{ label: 'Color', key: 'color' }],
  filterConfig: { color: { label: 'color' } },
  sortConfig: {
    color: {
      label: 'color',
      optionFunc: (a, b) => a.color.localeCompare(b.color),
    },
  },
};

export const carDetailsConfig: IBasicItemDisplayConfig<Car> = {
  labelGenerator: (car: Car) =>
    `${car.manufacturer} ${car.model} (${car.year})`,
  propertyDisplayList: [
    { label: 'Color', key: 'color' },
    { label: 'Engine', key: 'engine' },
    { label: 'Horsepower', key: 'horsepower' },
    {
      label: 'Price',
      key: 'price',
      displayFormatter: (data: number) => `$${data.toLocaleString()}`,
    },
  ],
};
