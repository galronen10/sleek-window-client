/* eslint-disable @typescript-eslint/no-explicit-any */
interface IBaseStoreItem {
  price: number;
  description: string;
}

export type IGenericStoreItem = IBaseStoreItem & Record<string, any>;

interface IItemPropertyDisplay<T> {
  label: string;
  key: Extract<keyof T, string>;
  displayFormatter?: (data: any) => string;
}

export interface IBasicItemDisplayConfig<T extends IGenericStoreItem> {
  labelGenerator: (item: T) => string;
  propertyDisplayList: IItemPropertyDisplay<T>[];
}

export type IGenericItemConfig = IBasicItemDisplayConfig<any>;

export type IGenericModifyConfig = Record<string, { label: string }>;
export interface ICatalogStoreItemConfig<T extends IGenericStoreItem>
  extends IBasicItemDisplayConfig<T> {
  sortConfig: Partial<
    Record<
      Extract<keyof T, string>,
      {
        label: string;
        optionFunc: (a: T, b: T) => number;
      }
    >
  >;
  filterConfig: Partial<Record<Extract<keyof T, string>, { label: string }>>;
}

export type IGenericCatalogItemConfig = ICatalogStoreItemConfig<any>;

export const itemsPerPage = 12;

export interface Car extends IBaseStoreItem {
  manufacturer: string;
  model: string;
  color: string;
  year: number;
  engine: string;
  horsepower: number;
}

export interface Laptop extends IBaseStoreItem {
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  screenSize: number;
}

export interface Book extends IBaseStoreItem {
  title: string;
  author: string;
  genre: string;
  yearPublished: number;
  pageCount: number;
}
