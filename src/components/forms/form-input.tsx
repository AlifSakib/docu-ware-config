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
  type,
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
      <div className="form-input-field">
        <label htmlFor={id}>
          {label ? label : null}{" "}
          {required ? <span style={{ color: "red" }}>*</span> : null}
        </label>
        <div className="form-input-field-content">
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
                value={value ? value : field.value}
              />
            )}
          />
          {errorMessage && <small>{errorMessage}</small>}
        </div>
      </div>
    </div>
  );
};

export default FormInput;
