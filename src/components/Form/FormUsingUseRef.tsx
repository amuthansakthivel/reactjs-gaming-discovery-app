import React, { useRef } from "react";

type Person = {
  name: string;
  age: number;
};

function FormUsingUseRef() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameRef.current && ageRef.current) {
      const person: Person = {
        name: nameRef.current.value,
        age: +ageRef.current.value,
      };
      console.log(person);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={"mb-3"}>
        <label htmlFor={"name"} className={"form-label"}>
          Name:
        </label>
        <input
          ref={nameRef}
          type={"text"}
          className={"form-control"}
          id={"name"}
          placeholder={"Enter your name"}
        />
        <label htmlFor={"age"} className={"form-label"}>
          Age:
        </label>
        <input
          ref={ageRef}
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

export default FormUsingUseRef;
