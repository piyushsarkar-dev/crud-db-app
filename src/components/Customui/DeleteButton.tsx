import { Trash2Icon } from "lucide-react";
import { Button } from "../shadcnui/button";

const DeleteButton = () => {
  return (
    <Button
      type="button"
      variant="destructive"
      className="flex-1">
      <Trash2Icon className="size-4" />
      Delete
    </Button>
  );
};

export default DeleteButton;
