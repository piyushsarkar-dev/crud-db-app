"use server";

import prisma from "@/lib/dbClient/prisma";
import { RegisterSchematype } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createUser = async (fData: RegisterSchematype) => {
  try {
    await prisma.user.create({
      data: fData,
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      message: "User Create Success ✔",
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      message: "Failed to create user ❌",
    };
  }
};

export default createUser;
