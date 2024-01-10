import { useState } from "react";

export type ListGroupProps = {
  items: string[];
  heading: string;
  onSelectItem: (index: string) => void;
};

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setIndex] = useState(-1);

  const classValue = (index: number) =>
    index === selectedIndex ? "list-group-item active" : "list-group-item";

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={classValue(index)}
            onClick={() => {
              setIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
