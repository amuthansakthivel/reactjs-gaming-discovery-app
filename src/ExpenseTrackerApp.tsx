import ExpenseList from "./ExpenseTracker/components/ExpenseList.tsx";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter.tsx";
import { useState } from "react";
import { Expense } from "./ExpenseTracker/components/ExpenseTypes.ts";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm.tsx";

function ExpenseTrackerApp() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All"); // ["Food", "Accommodation", "Travel"
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      description: "Food",
      amount: 2600,
      category: "Food",
    },
    {
      id: 2,
      description: "Rent",
      amount: 300,
      category: "Accommodation",
    },
    {
      id: 3,
      description: "Travelling to the moon",
      amount: 500,
      category: "Travel",
    },
  ]);

  const categories: string[] = ["Food", "Accommodation", "Travel"];
  const filteredExpenses =
    selectedCategory && selectedCategory !== "All"
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;

  return (
    <>
      <div className={"mb-3"}>
        <ExpenseForm
          onSubmit={(expense) => {
            setExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses.length + 1,
              },
            ]);
          }}
        />
      </div>
      <div className={"mb-3"}>
        {expenses.length !== 0 && (
          <ExpenseFilter
            onChange={(category) => setSelectedCategory(category)}
            categories={categories}
          />
        )}
      </div>
      <ExpenseList
        onDelete={(id) => setExpenses(expenses.filter((it) => it.id !== id))}
        expenses={filteredExpenses}
      />
    </>
  );
}

export default ExpenseTrackerApp;
