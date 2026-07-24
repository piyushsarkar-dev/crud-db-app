import { User } from "@generated/prisma/client";
import {
  MailIcon,
  PencilIcon,
  PhoneIcon,
  UserRound,
  VenusAndMarsIcon,
} from "lucide-react";
import { Button } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import DeleteButton from "./DeleteButton";

type UserCardProps = {
  userData: User;
};
const UserDetails = ({
  userData: { email, fullName, gender, phone },
}: UserCardProps) => {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-4 text-center">
        <div>
          <CardTitle className="text-2xl">User Details</CardTitle>

          <CardDescription>Static user information</CardDescription>
        </div>

        <div className="bg-border mx-auto h-px w-32" />
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-full p-2">
            <UserRound className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Full Name</p>
            <p className="font-medium">{fullName}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-full p-2">
            <MailIcon className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Email</p>
            <p className="font-medium">{email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-full p-2">
            <PhoneIcon className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Phone</p>
            <p className="font-medium">{phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-full p-2">
            <VenusAndMarsIcon className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Gender</p>
            <p className="font-medium">{gender}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 border-t pt-6">
        <Button className="flex-1">
          <PencilIcon className="size-4" />
          Edit
        </Button>
        <DeleteButton />
      </CardFooter>
    </Card>
  );
};

export default UserDetails;
