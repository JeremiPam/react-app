import { useState } from "react";

interface Props {
  items: string[];
  header: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
  const [clicked, setClicked] = useState(-1);
  return (
    <>
      <h1>{header}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === clicked ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setClicked(index);
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
