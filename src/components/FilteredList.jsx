import React, { useMemo } from "react";

function FilteredList() {

  const user = [{
    name: "Angelo",
    age: 24,
    id: 3
  }, {
    name: "Beth",
    age: 17,
    id: 23
  }]

  const filtered = useMemo(
    () =>
      user.filter((e) => {
        return e.age >= 18;
      }),
    []
  );

  return (
    <>
      <ul>
        {filtered.map((el, index) => (
          <li key={index}>
            <p>Name: {el.name}</p>
            <p>ID: {el.id}</p>
            <p>Age: {el.age}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FilteredList;
