// updateEmployee.ts
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  try {
    const { updatedData } = await request.json();

    if (!updatedData || !Array.isArray(updatedData)) {
      return new NextResponse("Invalid data format", {
        status: 400,
      });
    }

    const updatedEmployees = await Promise.all(
      updatedData.map(async (data) => {
        const { id, ...rest } = data;

        const updatedEmployee = await prisma.employee.update({
          where: { id }, // Adjust according to your MongoDB schema
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
