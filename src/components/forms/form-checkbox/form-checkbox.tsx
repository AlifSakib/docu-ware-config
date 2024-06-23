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
    <div className="form-checkbox-container">
      <div className="form-checkbox-wrapper">
        {label && (
          <label htmlFor={id} className="form-checkbox-label">
            {label} {required && <span className="required-marker">*</span>}
          </label>
        )}
        <div className="form-checkbox-field">
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
                      className="form-checkbox-input"
                    />
                    <span className="form-checkbox-option-label">
                      {option.label}
                    </span>
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

export default FormCheckbox;
