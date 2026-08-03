"use client";

import { registerFormSchema, RegisterSchematype } from "@/lib/zodSchema";
import editUser from "@/server/editUser";
import { User } from "@generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, UserPenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";
import { toast } from "../shadcnui/toast";

type EditUserFormProps = {
  userData: User;
};

const EditUserForm = ({ userData }: EditUserFormProps) => {
  const { push } = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: userData.fullName,
      email: userData.email,
      gender: userData.gender,
      phone: userData.phone,
    },
    mode: "all",
  });

  const updateFormHandler = async (fData: RegisterSchematype) => {
    const { isSuccess, message } = await editUser(userData.id, fData);

    if (isSuccess) {
      toast.add({ type: "success", title: message });
      push("/");
    } else {
      toast.add({ type: "error", title: message });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(updateFormHandler)}
      className="grid w-full max-w-xl grid-cols-1 place-items-center gap-3"
      noValidate>
      <div className="flex w-full justify-center">
        <UserPenIcon className="bg-muted h-12 w-12 rounded-full p-3" />
      </div>
      <Controller
        name="fullName"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Enter Your Full Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Full Name"
              autoComplete="name"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="gender"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Gender</FieldLabel>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger aria-invalid={fieldState.invalid}>
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              Enter Your Phone Number
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Phone Number"
              autoComplete="tel"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              Enter Your Email Address
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Email Address"
              autoComplete="email"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        className="w-full"
        disabled={isSubmitting || !isDirty}
        type="submit">
        {isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" /> Editing
          </>
        : <>
            <UserPenIcon /> Submit
          </>
        }
      </Button>
    </form>
  );
};

export default EditUserForm;
