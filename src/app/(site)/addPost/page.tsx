"use client";
import { Button } from "@/components/ui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { titleSchema } from "@/validators/title";
import Timeline from "./timeline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession, signOut } from 'next-auth/react'

export default function AddPost() {
  type input = z.infer<typeof titleSchema>;
  const form = useForm<input>({
    defaultValues: {
      timeline: [
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
    resolver: zodResolver(titleSchema),
  });

  const {
    control,
    register,
    getValues,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "timeline",
  });

  const onFormSubmit = async (data: any) => {
    console.log("SUBMIT BUTTON");
    // console.log(data);

    var sendToAPI: Record<string, any> = {}
    sendToAPI["experience"] = data["timeline"]
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
                  <Timeline
                    control={control}
                    name={index}
                    register={register}
                    error={errors}
                    values={values.timeline[index]}
                  />
                  <br />
                  {index === 1 && (
                    <Button onClick={() => remove(index)}>
                      Remove this Experience
                    </Button>
                  )}

                  <br />
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
                    Add another event in the timeline
                  </button>
                </div>
              );
            })}

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </FormProvider>
    </LocalizationProvider>
  );
}
