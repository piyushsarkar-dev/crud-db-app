"use server";

import prisma from "@/lib/dbClient/prisma";
import { RegisterSchematype } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const editUser = async (UserDel: string, fData: RegisterSchematype) => {
  try {
    await prisma.user.update({
      where: {
        id: UserDel,
      },
      data: fData,
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      message: "User Edit Success ✔",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Failed to Edit user ❌",
    };
  }
};

export default editUser;
