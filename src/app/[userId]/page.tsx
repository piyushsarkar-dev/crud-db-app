import EditUserForm from "@/components/customui/EditUserForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import prisma from "@/lib/dbClient/prisma";
import { notFound } from "next/navigation";

type EditPageProps = {
  params: Promise<{ userId: string }>;
};

const page = async ({ params }: EditPageProps) => {
  const { userId } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    notFound();
  }

  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Edit User</CardTitle>
        </CardHeader>
        <CardContent>
          <EditUserForm userData={user} />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
