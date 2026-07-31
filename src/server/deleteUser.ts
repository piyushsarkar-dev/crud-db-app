"use server";

import prisma from "@/lib/dbClient/prisma";
import { revalidatePath } from "next/cache";

const deleteUser = async (UserDel: string) => {
  try {
    await prisma.user.delete({
      where: {
        id: UserDel,
      },
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      message: "User Delete Success ✔",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Failed to delete user ❌",
    };
  }
};

export default deleteUser;
