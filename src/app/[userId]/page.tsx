import EditUserForm from "@/components/customui/EditUserForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";

type EditPageProps = {
  params: Promise<{ userId: string }>;
};

const page = async ({ params }: EditPageProps) => {
  const { userId } = await params;
  console.log(userId);

  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Edit User</CardTitle>
        </CardHeader>
        <CardContent>
          <EditUserForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
