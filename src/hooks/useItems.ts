import { useState, useEffect } from 'react';
import { Item } from '../types/Item';

// Initial static items
const initialItems: Item[] = [
  {
    id: '1',
    name: 'Classic Denim Jacket',
    type: 'Shirt',
    description: 'A timeless denim jacket perfect for casual outings. Made from premium quality denim with a comfortable fit.',
    coverImage: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    additionalImages: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Premium Running Shoes',
    type: 'Shoes',
    description: 'High-performance running shoes with advanced cushioning and breathable mesh upper for maximum comfort.',
    coverImage: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    additionalImages: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    name: 'Leather Sports Bag',
    type: 'Sports Gear',
    description: 'Durable leather sports bag with multiple compartments. Perfect for gym sessions and weekend trips.',
    coverImage: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=800',
    additionalImages: [
      'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1152401/pexels-photo-1152401.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-08')
  }
];

const STORAGE_KEY = 'item-management-items';

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      const parsed = JSON.parse(storedItems);
      setItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt)
      })));
    } else {
      setItems(initialItems);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialItems));
    }
  }, []);

  const addItem = (item: Omit<Item, 'id' | 'createdAt'>) => {
    const newItem: Item = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
    
    return newItem;
  };

  const getItemById = (id: string) => {
    return items.find(item => item.id === id);
  };

  return {
    items,
    addItem,
    getItemById
  };
};