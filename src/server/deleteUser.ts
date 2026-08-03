"use server";

import prisma from "@/lib/dbClient/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const userDelSchema = z.string().min(1, { error: "Invalid user id" });

const deleteUser = async (userDel: string) => {
  try {
    const validatedUserDel = userDelSchema.parse(userDel);

    await prisma.user.delete({
      where: {
        id: validatedUserDel,
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
