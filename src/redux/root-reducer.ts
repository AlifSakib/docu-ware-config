import { baseApi } from "./api/api-slice";
import configurationSlice from "./features/configurations/configuration/configuration-slice";
import createNewUserSlice from "./features/configurations/user-management/create-new-user/create-new-user-slice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  user: createNewUserSlice,
  options: configurationSlice,
};
