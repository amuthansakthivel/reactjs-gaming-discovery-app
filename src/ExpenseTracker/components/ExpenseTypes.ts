export const categories = ["Food", "Travel", "Accommodation"] as const;

export type Category = "Food" | "Travel" | "Accommodation";

export type Expense = {
  id: number;
  description: string;
  amount: number;
  category: Category;
};
