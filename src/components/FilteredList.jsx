import React, { useMemo } from "react";

function FilteredList({ user }) {
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
        {filtered.map((el) => (
          <li>
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
