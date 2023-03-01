import React from "react";
import { Label, Wrapper } from "../Atoms/FormField/FormField.style";
import { Select } from "./AddPlayerModal.style";
export default function SelectCategories({
  change,
  value,
  name,
  label,
  turnament,
  date,
}) {
  return (
    <>
      <Wrapper>
        <Label>{label}</Label>
        <Select ref={change} value={value} name={name}>
          {date.map((item) =>
            item.map((item2) =>
              item2?.typeofTurnament.map((item3) =>
                item3?.table.map((item4, index) => (
                  <option key={index} value={item4.values}>
                    {item4}
                  </option>
                ))
              )
            )
          )}
        </Select>
      </Wrapper>
    </>
  );
}
