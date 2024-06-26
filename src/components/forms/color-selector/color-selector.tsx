import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
import "./color-selector.css";
import React from "react";

interface IColorSelect {
  name: string;
  size?: "large" | "small";
  value?: string | undefined;
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const ColorSelect = ({
  name,
  size = "large",
  id,
  validation,
  label,
  required,
}: IColorSelect) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const options = [
    // black, blue , green, red , yellow
    {
      value: "black",
      label: "Black",
      colorCode: "rgb(53, 53, 53)",
    },
    { value: "blue", label: "Blue", colorCode: "rgb(0, 137, 207)" },
    {
      value: "green",
      label: "Green",
      colorCode: "rgb(54, 141, 46)",
    },
    { value: "red", label: "Red", colorCode: "rgb(187, 57, 55)" },
    {
      value: "yellow",
      label: "Yellow",
      colorCode: "rgb(252, 178, 0)",
    },
  ];

  // Set the default value to "Green"
  React.useEffect(() => {
    setValue(name, "green");
  }, [setValue, name]);

  return (
    <div className={`color-select-container ${size}`}>
      <div className="color-select-wrapper">
        {label && (
          <label htmlFor={id} className="color-select-label">
            {label} {required && <span className="required-marker">*</span>}
          </label>
        )}
        <div className="color-select-field">
          <Controller
            control={control}
            name={name}
            rules={validation}
            defaultValue="Green"
            render={({ field }) => (
              <div className="color-options">
                {options.map((option, index) => (
                  <label
                    key={option.value}
                    className={`color-option-label ${
                      field.value === option.value ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={name}
                      value={option.value}
                      className="sr-only"
                      aria-labelledby={`color-choice-${index}-label`}
                      onChange={() => field.onChange(option.value)}
                      checked={field.value === option.value}
                    />
                    <span
                      id={`color-choice-${index}-label`}
                      className="sr-only"
                    >
                      {option.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="color-circle"
                      style={{ backgroundColor: option.colorCode }}
                    ></span>
                  </label>
                ))}
              </div>
            )}
          />
          {errorMessage && (
            <small className="error-message">{errorMessage}</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorSelect;
