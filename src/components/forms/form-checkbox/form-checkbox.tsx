import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
import "./form-checkbox.css";

interface ICheckboxOption {
  label: string;
  value: string;
}

interface ICheckboxInput {
  name: string;
  options: ICheckboxOption[];
  size?: "large" | "small";
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormCheckbox = ({
  name,
  options,
  id,
  validation,
  label,
  required,
}: ICheckboxInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`form-checkbox-container`}>
      <div className="form-checkbox-field">
        <div className="form-checkbox-field-label">
          <label htmlFor={id}>
            {label ? label : null}{" "}
            {required ? <span style={{ color: "red" }}>*</span> : null}
          </label>
        </div>
        <div>
          <Controller
            control={control}
            name={name}
            defaultValue={[]} // Ensure the default value is an empty array
            rules={validation}
            render={({ field }) => (
              <div className="form-checkbox-options">
                {options.map((option) => (
                  <label key={option.value} className="form-checkbox-option">
                    <input
                      type="checkbox"
                      id={`${id}-${option.value}`}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                      onChange={() => {
                        const newValue = field.value.includes(option.value)
                          ? field.value.filter(
                              (v: string) => v !== option.value
                            )
                          : [...field.value, option.value];
                        field.onChange(newValue);
                      }}
                      className="form-checkbox-field-input"
                    />
                    <div className="form-checkbox-field-value-label">
                      {option.label}
                    </div>
                  </label>
                ))}
              </div>
            )}
          />
          {errorMessage && <small>{errorMessage}</small>}
        </div>
      </div>
    </div>
  );
};

export default FormCheckbox;
