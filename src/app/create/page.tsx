import CreateForm from "@/components/Customui/CreateForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create | CRUD DB App",
  description: "Create user page of CRUD DB App",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Signup Now</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
