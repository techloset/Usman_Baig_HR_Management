import { EMPLOYEE_ATTENDANCE_DATA } from "@/types/types";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  try {
    const updatedData: EMPLOYEE_ATTENDANCE_DATA[] = await request.json();
    if (!Array.isArray(updatedData)) {
      return new NextResponse("Invalid data format", {
        status: 400,
      });
    }

    const updatedEmployees = await Promise.all(
      updatedData.map(async (data) => {
        const { id, ...rest } = data;
        if (!id) {
          throw new Error("Employee ID is required");
        }

        const updatedEmployee = await prisma.employee.update({
          where: { id: id },
          data: rest,
        });

        return updatedEmployee;
      })
    );

    return new NextResponse(
      JSON.stringify({ data: updatedEmployees, success: true }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error updating employee:", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
