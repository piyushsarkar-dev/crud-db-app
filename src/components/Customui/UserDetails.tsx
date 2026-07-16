import { Mail, Pencil, Phone, Trash2, User, VenusAndMars } from "lucide-react";
import { Button } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";

const UserDetails = () => {
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
            <User className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Full Name</p>
            <p className="font-medium">Piyush Sarkar</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-full p-2">
            <Mail className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Email</p>
            <p className="font-medium">hi.mrpiyush@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-full p-2">
            <Phone className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Phone</p>
            <p className="font-medium">+91 1112223399</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-full p-2">
            <VenusAndMars className="size-5" />
          </div>

          <div>
            <p className="text-muted-foreground text-xs">Gender</p>
            <p className="font-medium">Male</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 border-t pt-6">
        <Button className="flex-1">
          <Pencil className="size-4" />
          Edit
        </Button>

        <Button
          variant="destructive"
          className="flex-1">
          <Trash2 className="size-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserDetails;
