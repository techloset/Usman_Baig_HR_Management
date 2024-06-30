import { EMPLOYEE_POST_DATA } from "@/types/EmployeeInfoProps";
import instance from "../../../src/utils/axiosInstance/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeData: [],
  isLoading: false,
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    try {
      const res = await instance.get("employee");
      console.log(res.data);
      return res.data.data;
    } catch (error: any) {
      console.error("Error fetching employees:", error);
      throw new Error(error?.message || "Error fetching employees");
    }
  }
);
export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employeeData: EMPLOYEE_POST_DATA) => {
    try {
      const response = await instance.post(`employee`, employeeData);
      console.log("Added new employee:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error adding employee:", error);
      throw new Error(error?.message || "Error adding employees");
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: string) => {
    try {
      const response = await instance.delete("employee", { data: { id } });
      console.log("Deleted employee with id:", id);
      return response.data;
    } catch (error: any) {
      console.error("Error deleting employee:", error);
      throw new Error(error?.message || "Error Deleting employees");
    }
  }
);
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async ({ id, data }: { id: string; data: EMPLOYEE_POST_DATA }) => {
    try {
      const response = await instance.put(`employee`, {
        id,
        ...data,
      });

      console.log("Updated employee with id:", id);

      return response.data;
    } catch (error: any) {
      console.error("Error updating employee:", error);
      throw new Error(error?.message || "Error Updating employees");
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeData = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employeeData = state.employeeData.filter(
          (employee: { id: string }) => employee.id !== action.payload
        );
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.employeeData = action.payload;
        console.log("Employee updated successfully:", action.payload);
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employeeData = action.payload;
      });
  },
});

export default employeeSlice.reducer;
