import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  id: yup.string().required("UserId is required"),
  password: yup.string().min(6).max(32).required(),
});
