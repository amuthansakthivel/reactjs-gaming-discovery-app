import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, {
      message: "Name must be at least 3 characters",
    })
    .max(10, {
      message: "Name must be at most 10 characters",
    }),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(18, {
      message: "Age should be at least 18",
    }),
});

type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"mb-3"}>
        <label htmlFor={"name"} className={"form-label"}>
          Name:
        </label>

        <input
          {...register("name")}
          type={"text"}
          className={"form-control"}
          id={"name"}
          placeholder={"Enter your name"}
          maxLength={10}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        <label htmlFor={"age"} className={"form-label"}>
          Age:
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type={"number"}
          className={"form-control"}
          id={"age"}
          placeholder={"Enter your age"}
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} type={"submit"} className={"btn btn-primary"}>
        Submit
      </button>
    </form>
  );
}

export default Form;
