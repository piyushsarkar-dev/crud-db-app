"use client";

import generateUserDetails from "@/hooks/genarateUserDetails";
import { registerFormSchema, RegisterSchematype } from "@/lib/zodSchema";
import createUser from "@/server/createUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, RefreshCcwIcon, SendIcon, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
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

const CreateForm = () => {
  const { push } = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
    setValue,
    clearErrors,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      gender: "",
      phone: "+91",
    },
  });

  const createFormHandler = async (fData: RegisterSchematype) => {
    const { isSuccess, message } = await createUser(fData);
    await new Promise((r) => setTimeout(r, 1500));
    console.log(fData);
    if (isSuccess) {
      toast.success(message);
      push("/");
    } else {
      toast.error(message);
    }
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const mainFormRefresh = async () => {
    setIsRefreshing(true);

    await new Promise((r) => setTimeout(r, 1500));

    reset();

    setIsRefreshing(false);
  };

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const [isLoading, setIsLoading] = useState(false);
  const genarateDetailsHandler = async () => {
    setIsLoading(true);

    const { fullName, email, phone, gender } = generateUserDetails();

    await delay(1000);

    setValue("fullName", fullName);
    setValue("email", email);
    setValue("phone", phone);
    setValue(
      "gender",
      gender === "male" ? "Male"
      : gender === "female" ? "Female"
      : "Others",
    );

    clearErrors();

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(createFormHandler)}
      className="grid w-full max-w-xl grid-cols-1 place-items-center gap-3"
      noValidate>
      <div className="flex w-full justify-center">
        <div className="bg-muted rounded-full p-3">
          <UserRound className="h-12 w-12" />
        </div>
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
              autoComplete="family-name"
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
              Enter Your Email Adress
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Email Adress"
              autoComplete="email"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <span className="grid w-full grid-cols-2 gap-3">
        <Button
          onClick={mainFormRefresh}
          type="button"
          variant="destructive"
          className="flex-1"
          disabled={isRefreshing}>
          {isRefreshing ?
            <>
              <LoaderIcon className="animate-spin" />
              Refreshing...
            </>
          : <>
              <RefreshCcwIcon size={16} />
              Refresh
            </>
          }
        </Button>

        <Button
          className="bg-green-800 hover:bg-green-600"
          disabled={isSubmitting}
          type="submit">
          {isSubmitting ?
            <>
              <LoaderIcon className="animate-spin" /> Submitinng
            </>
          : <>
              <SendIcon /> Submit
            </>
          }
        </Button>
      </span>
      <Button
        onClick={genarateDetailsHandler}
        type="button"
        className="w-full"
        disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate"}
      </Button>
    </form>
  );
};

export default CreateForm;
