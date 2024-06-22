import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  registration: yup.string().required("Registration is required"),
  roles: yup.string().required("Role is required"),
});
