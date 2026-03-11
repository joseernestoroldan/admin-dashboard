export type CardType = {
  id: number;
  title: string;
  number: number;
  change: number;
};

export type UserType = {
  id: string;
  username: string;
  email: string;
  img?: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  phone?: string;
  address?: string;
};