import {
  BadgeCheckIcon,
  MailIcon,
  PencilIcon,
  PhoneIcon,
  UserRound,
  VenusAndMarsIcon,
} from "lucide-react";

import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";

import DeleteButton from "./DeleteButton";

const UserDetails = () => {
  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardHeader className="space-y-4 text-center">
        <div>
          <CardTitle className="text-2xl">User Details</CardTitle>
        </div>

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

              <div className="mt-1 flex items-center gap-2">
                <p className="font-medium">Piyush Sarkar</p>

                <Badge
                  variant="secondary"
                  className="gap-1 rounded-full px-2">
                  <BadgeCheckIcon className="size-3.5 text-sky-500" />
                  Verified
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="bg-muted rounded-full p-2">
              <MailIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Email</p>
              <p className="font-medium">hi.mrpiyush@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="bg-muted rounded-full p-2">
              <PhoneIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Phone</p>
              <p className="font-medium">+91 8777098765</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="bg-muted rounded-full p-2">
              <VenusAndMarsIcon className="size-5" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs">Gender</p>
              <p className="font-medium">Male</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 border-t pt-6">
        <Button className="gap-2">
          <PencilIcon className="size-4" />
          Edit
        </Button>

        <DeleteButton />
      </CardFooter>
    </Card>
  );
};

export default UserDetails;
