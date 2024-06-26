import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
import "./form-select.css";

interface ISelectOption {
  value: string;
  label: string;
}

interface ISelect {
  name: string;
  options: ISelectOption[];
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormSelect = ({
  name,
  options,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: ISelect) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`form-select-container ${size}`}>
      <div className="form-select-wrapper">
        {label && (
          <label htmlFor={id} className="form-select-label">
            {label} {required && <span className="required-marker">*</span>}
          </label>
        )}
        <div className="form-select-field">
          <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => (
              <select
                id={id}
                {...field}
                value={value ?? field.value}
                className="form-select"
              >
                {placeholder && (
                  <option value="" disabled>
                    {placeholder}
                  </option>
                )}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
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

export default FormSelect;
