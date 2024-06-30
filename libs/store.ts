import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employees/employeesSlice";
import employeesDetailsReducer from "./features/employees/employeesDetailsSlice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    employeeDetails: employeesDetailsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
