export interface Order {
  id: number;
  date: string;
  supplier: string;
  detail: Detail[];
}

export interface Detail {
  id: number;
  status: boolean;
  description: string;
  amount: number;
}
