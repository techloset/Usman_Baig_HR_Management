import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeesSlice";
import { useDispatch, useSelector } from "react-redux";
import employeesDetailsReducer from "./slices/employeesDetailsSlice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    employeeDetails: employeesDetailsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

// Hooks for Redux Store

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
