"use server";

import { CreateUserSchemaType } from "@/lib/zodSchema";

const createStudent = async (fData: CreateUserSchemaType) => {
  console.log(fData);
};

export default createStudent;
