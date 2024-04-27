export type Month = {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export type Day = {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}