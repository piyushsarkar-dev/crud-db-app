"use client";

import { CreateUserSchema, createUserSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateForm = () => {
  const { handleSubmit } = useForm<createUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      gender: "male",
    },
    mode: "all",
  });

  const createFormHandler = async (fData: createUserSchemaType) => {
    console.log(fData);
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(createFormHandler)}></form>
    </>
  );
};

export default CreateForm;
