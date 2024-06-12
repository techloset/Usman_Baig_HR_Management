import Dashboard from "@/components/dashboard/Dashboard";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout heading={"Hello Lucifer"} description={"Welcome"}>
      <Dashboard />
    </DefaultLayout>
  );
}
