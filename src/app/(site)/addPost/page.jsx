"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Card } from "@/components/ui/card";
import TimeLine from "./timeLine";

// type Input = z.infer<typeof postSchema>

export default function AddPost() {
  const form =
    useForm   ( {
      defaultValues: {
        timeline: [
          {
          title: "",
          description: "",
          startDate: dayjs(),
          endDate: dayjs(),
          bottomLine: "",
          pros: [{ description: "" }],
          cons: [{ description: "" }],
          dayLifeEvents: [{ description: "" }],
        },
      ],
    },
  });

  const { control } = form;
  const { register } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "timeline",
  });

  const onFormSubmit = async (data) => {
    data = data["timeline"];
    const startDate = dayjs(data[0].startDate)
    const endDate = dayjs(data[0].endDate)
    const good = startDate < endDate
    console.log("SUBMIT BUTTON")
    console.log(good);
    


    // try {
    //   await fetch("/api/addPost", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormProvider {...form}>
        <div>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-3"
          >
            {fields.map(({ id }, index) => {
              return (
                <div className="" key={id}>
                  <TimeLine className=" "
                    data={register(`timeline[${index}]`)}
                    control={control}
                    name={index}
                  />
                  <button className="" type="button" onClick={() => append({})}>
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
