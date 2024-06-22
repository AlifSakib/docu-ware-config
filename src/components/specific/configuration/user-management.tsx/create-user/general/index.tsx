import FormCheckbox from "../../../../../forms/form-checkbox/form-checkbox";
import FormInput from "../../../../../forms/form-input";
import FormRadio from "../../../../../forms/form-radio/form-radio";
import "./generala.css";

const General = () => {
  return (
    <div>
      <div className="general-container">
        <div>
          <p className="title-heading">Name and registration</p>
          <div className="form-fields">
            <FormInput
              name="firstName"
              type="text"
              size="large"
              label="First Name"
              required
            />
            <FormInput
              name="lastName"
              type="text"
              size="large"
              label="Last Name"
              required
            />
            <FormInput
              name="email"
              type="text"
              size="large"
              label="Email"
              required
            />
            <FormRadio
              name="registration"
              label="Gender"
              options={[
                {
                  label:
                    "Request user by email to activate account and set password",
                  value: "false",
                },
                { label: "Set password now", value: "true" },
              ]}
              required
            />
            <FormCheckbox
              name="roles"
              label="Roles"
              options={[{ label: "Admin", value: "admin" }]}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
