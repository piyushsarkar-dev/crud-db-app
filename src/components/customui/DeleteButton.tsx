"use client";

import deleteUser from "@/server/deleteUser";
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "../shadcnui/alert-dialog";
import { Button, buttonVariants } from "../shadcnui/button";
import { toast } from "../shadcnui/toast";

type DeleteButtonProps = {
  userDel: string;
};

const DeleteButton = ({ userDel }: DeleteButtonProps) => {
  const [remove, setRemove] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClean = () => {
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    setRemove(true);

    try {
      const { isSuccess, message } = await deleteUser(userDel);

      if (isSuccess) {
        toast.add({ type: "success", title: message });
      } else {
        toast.add({ type: "error", title: message });
      }
    } catch (error) {
      console.error(error);
      toast.add({ type: "error", title: "Failed to delete user ❌" });
    } finally {
      setRemove(false);
      setOpen(false);
    }
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={setOpen}>
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

      <AlertDialogContent>
        <AlertDialogTitle>Delete this user?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>

        <div className="mt-6 flex justify-end gap-3">
          <AlertDialogClose className={buttonVariants({ variant: "outline" })}>
            Cancel
          </AlertDialogClose>
          <Button
            variant="destructive"
            disabled={remove}
            onClick={handleConfirmDelete}>
            {remove ?
              <>
                Deleting...
                <Loader2 className="ml-2 size-4 animate-spin" />
              </>
            : "Delete"}
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
