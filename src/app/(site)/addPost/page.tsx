"use client";
import { Button } from "@/components/ui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { experienceSchema } from "@/validators/experience";
import Experience from "./experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession, signOut } from 'next-auth/react'

export default function AddPost() {
  type input = z.infer<typeof experienceSchema>;
  const form = useForm<input>({
    defaultValues: {
      experience: [
        {
          title: "",
          description: "",
          startDate: dayjs(),
          endDate: dayjs(),
          pros: [{ description: "" }],
          cons: [{ description: "" }],
          dayEvents: [{ description: "" }],
        },
      ],
    },
    resolver: zodResolver(experienceSchema),
  });

  const {
    control,
    register,
    getValues,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const onFormSubmit = async (data: any) => {
    console.log("SUBMIT BUTTON");
    // console.log(data);

    var sendToAPI: Record<string, any> = {}
    sendToAPI["experience"] = data["experience"]
    sendToAPI["email"] = session?.user?.email ?? "bad";
    console.log(sendToAPI)

        try {
      await fetch("/api/addPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendToAPI),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const { data:session } = useSession()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <p>{JSON.stringify(session)}</p>
      <FormProvider {...form}>
        <div>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-3"
          >
            {fields.map(({ id }, index) => {
              const values = getValues();
              return (
                <div className="" key={id}>
                  <Experience
                    control={control}
                    name={index}
                    register={register}
                    error={errors}
                    values={values.experience[index]}
                  />
                  <br />
                  {index !== 0 && (
                    <Button onClick={() => remove(index)}>
                      Remove this Experience
                    </Button>
                  )}

                  <br />
                  
                </div>
              );
            })}
            <button
                    className=""
                    type="button"
                    onClick={() =>
                      append({
                        title: "",
                        description: "",
                        startDate: dayjs(),
                        endDate: dayjs(),
                        pros: [{ description: "" }],
                        cons: [{ description: "" }],
                        dayEvents: [{ description: "" }],
                      })
                    }
                  >
                    Add another event in the experience
                  </button>
<br/>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </FormProvider>
    </LocalizationProvider>
  );
}
