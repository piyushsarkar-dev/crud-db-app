import {
  Edit2Icon,
  MailIcon,
  PhoneIcon,
  UserRound,
  VenusAndMarsIcon,
} from "lucide-react";

import { buttonVariants } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";

import { User } from "@generated/prisma/client";
import type { Route } from "next";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

type UserDetailsProps = {
  userData: User;
};

const UserDetails = ({ userData }: UserDetailsProps) => {
  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardHeader className="space-y-4 text-center">
        <CardTitle className="text-2xl">User Details</CardTitle>
        <div className="bg-border mx-auto h-px w-32" />
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="bg-muted rounded-full p-2">
              <UserRound className="size-5" />
            </div>

            <div className="flex-1">
              <p className="text-muted-foreground text-xs">Full Name</p>

              <p className="mt-1 font-medium">{userData.fullName}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="bg-muted rounded-full p-2">
              <MailIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Email</p>
              <p className="font-medium">{userData.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="bg-muted rounded-full p-2">
              <PhoneIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Phone</p>
              <p className="font-medium">{userData.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="bg-muted rounded-full p-2">
              <VenusAndMarsIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Gender</p>
              <p className="font-medium">{userData.gender}</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 border-t pt-6">
        <Link
          href={`/${userData.id}` as Route}
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
          })}>
          Edit <Edit2Icon />
        </Link>

        <DeleteButton userDel={userData.id} />
      </CardFooter>
    </Card>
  );
};

export default UserDetails;
