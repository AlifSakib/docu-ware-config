import { getErrorMessageByPropertyName } from "../../utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
import "./form-input.css";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  type = "text",
  size = "large",
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`form-input-container ${size}`}>
      <div className="form-input-wrapper">
        {label && (
          <label htmlFor={id} className="form-input-label">
            {label} {required && <span className="required-marker">*</span>}
          </label>
        )}
        <div className="form-input-field">
          <Controller
            control={control}
            name={name}
            rules={validation}
            render={({ field }) => (
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                {...field}
                value={value ?? field.value}
                className="form-input"
              />
            )}
          />
        </div>
        {errorMessage && (
          <small className="error-message">{errorMessage}</small>
        )}
      </div>
    </div>
  );
};

export default FormInput;
