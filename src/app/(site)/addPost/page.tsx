"use client";
import { Button } from "@/components/ui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { multExperiencesSchema } from "@/validators/experience";
import Experience from "./experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession, signOut } from 'next-auth/react'

export default function AddPost() {
  type input = z.infer<typeof multExperiencesSchema>;
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
    resolver: zodResolver(multExperiencesSchema),
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
    // console.log("SUBMIT BUTTON");
    // console.log(data);

    var sendToAPI: Record<string, any> = {}
    sendToAPI["experience"] = data["experience"]
    sendToAPI["email"] = session?.user?.email ?? "bad";
    // console.log(sendToAPI)

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

  const { data: session } = useSession()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <p>{JSON.stringify(session)}</p> */}
      <FormProvider {...form}>
        <div>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-3"
          >
            <div className="container">
              {fields.map(({ id }, index) => {

                const values = getValues();
                return (
                  <div className="block max-w bg-white border border-2 border-gray-500 rounded-lg shadow" key={id}>
                    <Experience
                      control={control}
                      name={index}
                      register={register}
                      error={errors}
                      values={values.experience[index]}
                    />
                    <br />
                    {index !== 0 && (
                      <button onClick={() => remove(index)} className="">
                        <img className="w-11 h-11" src="https://static.vecteezy.com/system/resources/previews/016/964/110/original/eps10-red-garbage-or-trash-can-solid-icon-or-logo-isolated-on-white-background-delete-or-rubbish-basket-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg" alt="" />
                      </button>
                    )}

                    <br />

                  </div>
                );
              })}
            </div>


            <button
              className="border border-dashed border-2 w-full border-sky-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
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
              Add Another Event 
            </button>
            <br />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </FormProvider>
    </LocalizationProvider>
  );
}
