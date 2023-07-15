import React, { useEffect, useRef, useState } from "react";

function CarDetails({
  initialData = { model: "Mini Cooper", year: "2020", color: "white" },
}) {
  const inputRef = useRef();
  const [inputChange, setInputChange] = useState(false);

  useEffect(() => {
    inputRef.current.elements.model.value = "";
    inputRef.current.elements.year.value = "";
    inputRef.current.elements.color.value = "";
  }, [inputChange]);

  useEffect(() => {
    inputRef.current.elements.model.value = initialData.model;
    inputRef.current.elements.year.value = initialData.year;
    inputRef.current.elements.color.value = initialData.color;
  }, []);

  function handleInputChange() {
    setInputChange(true);
  }
  return (
    <form ref={inputRef} onChange={handleInputChange}>
      <h1>Car details</h1>
      <input name="model" />
      <input name="year" />
      <input name="color" />
    </form>
  );
}

export default CarDetails;
