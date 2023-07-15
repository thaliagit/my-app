import React, { useRef, useState, useEffect } from "react";

function CarDetails({initialData}) {
 
  return (
    <>
      <h3>Car details</h3>
      <form>
        <label htmlFor="model">model: </label>
        <input type="text"/>
        <label htmlFor="year">year: </label>
        <input type="text"/>
        <label htmlFor="color">
          color:{" "}
        </label>
        <input type="text"/>
      </form>
    </>
  );
}

export default CarDetails;
