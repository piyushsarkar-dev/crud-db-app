import UserDetails from "@/components/customui/UserDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List | CRUD DB App",
  description: "List user page of CRUD DB App",
};

const page = () => {
  return (
    <div className="mt-20 grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <UserDetails />
      <UserDetails />
      <UserDetails />
      <UserDetails />
      <UserDetails />
      <UserDetails />
    </div>
  );
};

export default page;
