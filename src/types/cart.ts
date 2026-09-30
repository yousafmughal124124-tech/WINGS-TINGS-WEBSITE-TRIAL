import { MenuItem } from '../data/restaurantData';

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  selectedSauce: string;
  spiceLevel: number;
  specialInstructions?: string;
  extraDip?: boolean;
}

export type OrderType = 'delivery' | 'pickup' | 'dine-in';

export interface CustomerDetails {
  name: string;
  phone: string;
  orderType: OrderType;
  address: string;
  notes: string;
}
