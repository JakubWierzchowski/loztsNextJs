import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Input, Label } from "./FormField.style";

// eslint-disable-next-line react/display-name
const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, type, isTextarea, ...props }, ref) => {
    return (
      <>
        <Wrapper>
          <Label htmlFor={id}>{label}</Label>
          {isTextarea ? (
            <Input
              isTextarea
              as="textarea"
              name={name}
              id={id}
              value={value}
              onChange={onChange}
              data-testid={label}
              {...props}
              ref={ref}
            />
          ) : (
            <Input
              name={name}
              id={id}
              type={type}
              value={value}
              onChange={onChange}
              data-testid={label}
              {...props}
              ref={ref}
            />
          )}
        </Wrapper>
      </>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
