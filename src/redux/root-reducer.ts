import { baseApi } from "./api/api-slice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
};
