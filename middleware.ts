import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
  }
);

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/employees",
    "/addEmployee",
    "/viewEmployee",
    "/departments",
    "/viewDepartment",
    "/attendence",
    "/setting",
    "/notification",
  ],
};
