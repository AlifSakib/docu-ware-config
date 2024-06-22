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
  size?: "large" | "small";
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
    <div className={`form-radio-container `}>
      <div className="form-radio-field">
        <div className="form-radio-field-label">
          <label htmlFor={id}>
            {label ? label : null}{" "}
            {required ? <span style={{ color: "red" }}>*</span> : null}
          </label>
        </div>
        <div>
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
                      className="form-radio-field-input"
                    />
                    <div className="form-radio-field-value-label">
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

export default FormRadio;
