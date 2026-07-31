import UserDetails from "@/components/customui/UserDetails";
import prisma from "@/lib/dbClient/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List | CRUD DB App",
  description: "List user page of CRUD DB App",
};

const page = async () => {
  const allStudents = await prisma.user.findMany();
  if (allStudents.length === 0) {
    return (
      <section>
        <div className="h-dvh text-center text-2xl"> No Data Found</div>
      </section>
    );
  }
  return (
    <div className="mt-20 grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {allStudents.map((items) => (
        <UserDetails
          userData={items}
          key={items.id}
        />
      ))}
    </div>
  );
};

export default page;
