import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
import "./form-radio.css";

interface IRadioOption {
  label: string;
  value: string;
}

interface IRadioInput {
  name: string;
  options: IRadioOption[];
  id?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormRadio = ({
  name,
  options,
  id,
  validation,
  label,
  required,
}: IRadioInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="form-radio-container">
      <div className="form-radio-wrapper">
        {label && (
          <label htmlFor={id} className="form-radio-label">
            {label} {required && <span className="required-marker">*</span>}
          </label>
        )}
        <div className="form-radio-field">
          <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => (
              <div className="form-radio-options">
                {options.map((option) => (
                  <label key={option.value} className="form-radio-option">
                    <input
                      type="radio"
                      id={`${id}-${option.value}`}
                      value={option.value}
                      checked={field.value === option.value}
                      onChange={() => field.onChange(option.value)}
                      className="form-radio-input"
                    />
                    <span className="form-radio-option-label">
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

export default FormRadio;
