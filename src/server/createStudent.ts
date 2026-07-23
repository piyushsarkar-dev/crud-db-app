"use server";

import prisma from "@/lib/database/dbClient";
import { CreateUserSchemaType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createStudent = async (fData: CreateUserSchemaType) => {
  try {
    await prisma.user.create({
      data: fData,
    });
    revalidatePath("/");
    return {
      isSucess: true,
      message: "Studet Create Success",
    };
  } catch (error) {
    console.log(error);

    return {
      isSucess: false,
      message: "Studet Create Failed",
    };
  }
};

export default createStudent;
