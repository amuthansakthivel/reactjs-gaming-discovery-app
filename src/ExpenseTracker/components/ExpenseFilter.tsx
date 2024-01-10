type Props = {
  categories: string[];
  onChange: (category: string) => void;
};

function ExpenseFilter({ categories, onChange }: Props) {
  return (
    <>
      <select
        className={"form-select"}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value={"All"}>All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default ExpenseFilter;
