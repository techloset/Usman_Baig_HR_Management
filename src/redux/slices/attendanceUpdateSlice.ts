// features/attendance/attendanceSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import instance from "@/utils/axiosInstance/axiosInstance";
import { EMPLOYEE_ATTENDANCE_DATA } from "@/types/types";

export const bulkUpdateAttendance = createAsyncThunk(
  "attendance/bulkUpdateAttendance",
  async (updatedData: EMPLOYEE_ATTENDANCE_DATA[]) => {
    try {
      const response = await instance.post("/updateAttendance", updatedData);
      return response.data;
    } catch (error: any) {
      throw new Error(error?.message || "Error updating attendance data");
    }
  }
);

interface AttendanceState {
  isLoading: boolean;
  error: string | null;
}

const initialState: AttendanceState = {
  isLoading: false,
  error: null,
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bulkUpdateAttendance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(bulkUpdateAttendance.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(bulkUpdateAttendance.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || "Failed to update attendance data";
      });
  },
});

export default attendanceSlice.reducer;
