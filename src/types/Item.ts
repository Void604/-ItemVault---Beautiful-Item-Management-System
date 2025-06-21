export interface Item {
  id: string;
  name: string;
  type: string;
  description: string;
  coverImage: string;
  additionalImages: string[];
  createdAt: Date;
}

export type ItemType = 'Shirt' | 'Pant' | 'Shoes' | 'Sports Gear' | 'Accessories' | 'Electronics' | 'Other';

export const ITEM_TYPES: ItemType[] = [
  'Shirt',
  'Pant', 
  'Shoes',
  'Sports Gear',
  'Accessories',
  'Electronics',
  'Other'
];