import { prisma } from "@/config/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest) => {
  try {
    const { email, hashedPassword }: { email: string; hashedPassword: string } =
      await request.json();

    const userLogin = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!userLogin) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 400,
      });
    }

    const newPassword = await bcrypt.hash(hashedPassword, 12);

    const user = await prisma.user.update({
      where: { email: email },
      data: {
        hashedPassword: newPassword,
      },
    });

    return new NextResponse(JSON.stringify({ data: user, success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
