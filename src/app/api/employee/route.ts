import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../config/prisma";

// Create a new employee
export const POST = async (request: NextRequest) => {
  try {
    const employeeData = await request.json();

    // const requiredFields = ["firstName", "lastName", "email", "designation"];
    // for (const field of requiredFields) {
    //   if (!employeeData[field]) {
    //     return new NextResponse(`Missing required field: ${field}`, {
    //       status: 400,
    //     });
    //   }
    // }

    try {
      const employee = await prisma.employee.create({
        data: employeeData,
      });

      console.log("Created user:", employee);
      return new NextResponse(
        JSON.stringify({ data: employee, success: true }),
        {
          status: 201,
        }
      );
    } catch (error) {
      console.error("Error creating user:", error);
      return new NextResponse(JSON.stringify({ error: error }), {
        status: 400,
      });
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};

// Update an existing employee
export const PUT = async (request: NextRequest) => {
  try {
    const { id, ...data } = await request.json();

    if (!id) {
      return new NextResponse("Missing employee ID", {
        status: 400,
      });
    }

    try {
      const employee = await prisma.employee.update({
        where: { id },
        data,
      });

      console.log("Updated user:", employee);
      return new NextResponse(
        JSON.stringify({ data: employee, success: true }),
        {
          status: 200,
        }
      );
    } catch (error) {
      console.error("Error updating user:", error);
      return new NextResponse(JSON.stringify({ error: error }), {
        status: 400,
      });
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};

// Delete an employee
export const DELETE = async (request: NextRequest) => {
  try {
    const { id } = await request.json();

    if (!id) {
      return new NextResponse("Missing employee ID", {
        status: 400,
      });
    }

    try {
      await prisma.employee.delete({
        where: { id },
      });

      console.log("Deleted user with id:", id);
      return new NextResponse(JSON.stringify({ success: true }), {
        status: 200,
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      return new NextResponse(JSON.stringify({ error: error }), {
        status: 400,
      });
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};

// Get all employees
export const GET = async (request: NextRequest) => {
  try {
    const employees = await prisma.employee.findMany();

    console.log("Fetched all employees:", employees);
    return new NextResponse(
      JSON.stringify({ data: employees, success: true }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching employees:", error);
    return new NextResponse(JSON.stringify({ error: error }), {
      status: 400,
    });
  }
};
