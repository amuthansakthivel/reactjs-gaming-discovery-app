import { FieldValues, useForm } from "react-hook-form";

type FormData = {
  name: string;
  age: number;
};
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"mb-3"}>
        <label htmlFor={"name"} className={"form-label"}>
          Name:
        </label>

        <input
          {...register("name", { required: true, minLength: 3, maxLength: 10 })}
          {...register("name")}
          type={"text"}
          className={"form-control"}
          id={"name"}
          placeholder={"Enter your name"}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required*</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name should be minimum of 3 letters</p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="text-danger">Name should be maximum of 10 letters</p>
        )}
        <label htmlFor={"age"} className={"form-label"}>
          Age:
        </label>
        <input
          {...register("age", { required: true, min: 18, valueAsNumber: true })}
          type={"number"}
          className={"form-control"}
          id={"age"}
          placeholder={"Enter your age"}
        />
      </div>
      <button type={"submit"} className={"btn btn-primary"}>
        Submit
      </button>
    </form>
  );
}

export default Form;
