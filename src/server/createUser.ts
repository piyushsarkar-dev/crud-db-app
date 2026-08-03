"use server";

import prisma from "@/lib/dbClient/prisma";
import { registerFormSchema, RegisterSchematype } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const isPrismaUniqueConstraintError = (error: unknown) => {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2002"
  );
};

const createUser = async (fData: RegisterSchematype) => {
  try {
    const validatedData = registerFormSchema.parse(fData);

    await prisma.user.create({
      data: validatedData,
    });

    revalidatePath("/");

    return {
      isSuccess: true,
      message: "User Create Success ✔",
    };
  } catch (error) {
    console.error(error);

    if (isPrismaUniqueConstraintError(error)) {
      return {
        isSuccess: false,
        message: "Email or phone already exists.",
      };
    }

    return {
      isSuccess: false,
      message: "Failed to create user ❌",
    };
  }
};

export default createUser;
