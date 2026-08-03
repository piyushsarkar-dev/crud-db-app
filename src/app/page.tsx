import UserDetails from "@/components/customui/UserDetails";
import prisma from "@/lib/dbClient/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List | CRUD DB App",
  description: "List user page of CRUD DB App",
};

const page = async () => {
  const allUsers = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });
  if (allUsers.length === 0) {
    return (
      <section className="flex h-dvh items-center justify-center">
        <div className="text-center text-4xl font-semibold">No Data Found</div>
      </section>
    );
  }
  return (
    <div className="mt-20 grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {allUsers.map((items) => (
        <UserDetails
          key={items.id}
          userData={items}
        />
      ))}
    </div>
  );
};

export default page;
