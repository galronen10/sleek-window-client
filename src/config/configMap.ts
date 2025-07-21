import type {
  IGenericCatalogItemConfig,
  IGenericItemConfig,
  IGenericStoreItem,
} from '../types';
import {
  bookDisplayConfig,
  bookDetailsConfig,
} from './books/booksDisplayConfig';
import { bookStoreItems } from './books/bookStoreItems';
import { laptopStoreItems } from './laptops/laptopStoreItems';
import {
  laptopDisplayConfig,
  laptopDetailsConfig,
} from './laptops/laptopDisplayConfig';
import cars from './cars/cars';
import { carDetailsConfig, carDisplayConfig } from './cars/carDisplayConfig';

interface configMapItem {
  displayConfig: IGenericCatalogItemConfig;
  detailsConfig: IGenericItemConfig;
  storeLabel: string;
  items: IGenericStoreItem[];
}

export const storeConfigMap: Record<string, configMapItem> = {
  laptops: {
    displayConfig: laptopDisplayConfig,
    detailsConfig: laptopDetailsConfig,
    storeLabel: 'Laptops Store Catalog',
    items: laptopStoreItems,
  },
  books: {
    displayConfig: bookDisplayConfig,
    detailsConfig: bookDetailsConfig,
    storeLabel: 'Books Store Catalog',
    items: bookStoreItems,
  },
  cars: {
    detailsConfig: carDetailsConfig,
    displayConfig: carDisplayConfig,
    storeLabel: 'Car Store Catalog',
    items: cars,
  },
};

export const configStoreList = Object.keys(storeConfigMap);
