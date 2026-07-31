"use client";

import deleteUser from "@/server/deleteUser";
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

type DeleteButtonProps = {
  userDel: string;
};

const DeleteButton = ({ userDel }: DeleteButtonProps) => {
  const [remove, setRemove] = useState(false);

  const handleClean = async () => {
    const { isSuccess, message } = await deleteUser(userDel);
    setRemove(true);
    if (isSuccess) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    await deleteUser(userDel);

    await new Promise((r) => {
      setTimeout(r, 1000);
    });
    setRemove(false);
  };

  return (
    <Button
      onClick={handleClean}
      disabled={remove}
      variant="destructive"
      className="w-full">
      {remove ?
        <>
          Deleting...
          <Loader2 className="ml-2 size-4 animate-spin" />
        </>
      : <>
          Delete
          <Trash2 className="ml-2 size-4" />
        </>
      }
    </Button>
  );
};

export default DeleteButton;
