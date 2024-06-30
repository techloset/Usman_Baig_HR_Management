import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return new NextResponse("Missing employee ID", {
        status: 400,
      });
    }

    const employee = await prisma.employee.findFirst({
      where: { id: id },
    });

    if (!employee) {
      return new NextResponse("Employee not found", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ data: employee, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching employee:", error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 400,
    });
  }
};
