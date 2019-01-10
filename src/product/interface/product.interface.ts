
export interface Product {
  prod_id?: string;
  vend_id?: number;
  prod_name?: string;
  prod_price?: number;
  prod_desc?: string;
}

export interface ProductSearch {
  attr: string[];
  limit: number;
  offset: number;
  prod_id?: string[];
  vend_id?: number[];
  prod_name?: string[];
  prod_price?: number[];
  prod_desc?: string[];
}