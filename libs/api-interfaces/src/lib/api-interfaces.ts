export interface Message {
  message: string;
}

export interface Transaction {
  time: Date;
  person: string;
  amount: number;
  type: string;
  place: string;
  status: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  bankAccount: string;
  currentMoney: number;
  transactions: Array<Transaction>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Trip {
  id: string;
  name: string;
  from: string;
  to: string;
  date: Date;
  transactions: Array<Transaction>;
  balance: number;
  accountnumber: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface Group {
  id: string;
  name: string;
  members: User[];
  trips: Trip[];
  transactions: Transaction[];
  createdAt: Date;
  updatedAt: Date;
}
