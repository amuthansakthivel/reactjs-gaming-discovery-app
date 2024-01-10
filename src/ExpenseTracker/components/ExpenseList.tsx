import { Expense } from "./ExpenseTypes.ts";

type Props = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

function ExpenseList({ expenses, onDelete }: Props) {
  if (expenses.length === 0) return null;
  return (
    <table className={"table table-bordered table-light"}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => onDelete(expense.id)}
                className={"btn btn-danger btn-sm"}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>
            <strong>Total: </strong>
            {expenses.reduce((total, expense) => total + expense.amount, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList;
