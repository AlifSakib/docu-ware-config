import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  title: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email("Invalid email").required("Email is required"),
  registration: yup.string(),
  roles: yup.string().required("Role is required"),
  color: yup.string(),
});
