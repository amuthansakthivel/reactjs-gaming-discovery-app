import { categories, Expense } from "./ExpenseTypes.ts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (expense: Expense) => void;
};

const schema = z.object({
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(3, {
      message: "Description must be at least 3 characters",
    })
    .max(100, {
      message: "Description must be at most 100 characters",
    }),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a positive number",
    })
    .min(0, {
      message: "Amount must be at least 0",
    }),
  category: z.enum(categories, {
    required_error: "Category is required",
    invalid_type_error: "Category must be one of the options",
  }),
});

function ExpenseForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Expense>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        className={"form-select-sm"}
        onSubmit={handleSubmit((expense) => {
          onSubmit(expense);
          reset();
        })}
      >
        <label htmlFor={"description"} className={"col-sm-2 col-form-label"}>
          <strong>Description</strong>
        </label>
        <input
          {...register("description")}
          type={"text"}
          className={"form-control"}
          id={"description"}
        />
        <div className={"mb-3"}>
          {errors.description && (
            <p className={"text-danger"}>{errors.description.message}</p>
          )}
        </div>
        <label htmlFor={"amount"} className={"col-sm-2 col-form-label"}>
          <strong>Amount</strong>
        </label>

        <input
          {...register("amount", { valueAsNumber: true })}
          type={"number"}
          className={"form-control"}
          id={"amount"}
        />
        {errors.amount && (
          <p className={"text-danger"}>{errors.amount.message}</p>
        )}
        <label htmlFor={"category"} className={"col-sm-2 col-form-label"}>
          <strong>Category</strong>
        </label>
        <select
          {...register("category")}
          className={"form-select mb-3"}
          id={"category"}
        >
          <option value={""}></option>
          <option value={"Food"}>Food</option>
          <option value={"Accommodation"}>Accommodation</option>
          <option value={"Travel"}>Travel</option>
        </select>
        {errors.category && (
          <p className={"text-danger"}>{errors.category.message}</p>
        )}
        <div className={"mb-3"}>
          <button
            disabled={!isValid}
            type={"submit"}
            className={"btn btn-primary"}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
