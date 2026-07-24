import UserDetails from "@/components/Customui/UserDetails";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List | CRUD DB App",
  description: "List user page of CRUD DB App",
};

const page = async () => {
  const allStudents = await prisma.user.findMany();
  if (allStudents.length === 0) {
    return (
      <section className="mt-20 grid h-dvh place-items-center">
        <div>No User Found</div>
      </section>
    );
  }
  return (
    <section className="mt-20 grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {allStudents.map((userId) => (
        <UserDetails
          key={userId.id}
          userData={userId}
        />
      ))}
    </section>
  );
};

export default page;
