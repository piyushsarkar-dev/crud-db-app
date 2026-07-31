import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create | CRUD DB App",
  description: "Create user page of CRUD DB App",
};
const page = () => {
  return (
    <div className="mt-20 grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"></div>
  );
};

export default page;
