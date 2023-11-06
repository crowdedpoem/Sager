"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

import dayjs, { Dayjs } from "dayjs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DateFnsUtils from "@date-io/date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { postSchema } from "@/validators/post";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Simple from "@/app/(site)/addPost/simple_component";
import SimpleDate from "./simple_date";
import TimeLine from "./timeLine";

// type Input = z.infer<typeof postSchema>

export default function AddPost() {
  const form =
    useForm   ( {
      defaultValues: {
        timeline: [
          {
            id: "1",
            title: "",
            description: "",
            startDate: dayjs(),
            endDate: dayjs(),
            bottomLine: "",
            pros: [{ description: "" }],
            cons: [{ description: "" }],
            dayInTheLife: [{ startTime: dayjs(), endTime: dayjs(), title: "" }],
          },
        ],
      }
    });

  const { control } = form;
  const { register } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "timeline",
  });

  const onFormSubmit = async (data) => {
    data = data["timeline"];
    console.log(data);
    console.log(data[0].title);
    try {
      await fetch("/api/addPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
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
                // <Simple key={id} field={register(`simple.${index}.value`)} />
                // <SimpleDate key={id} field={register(`dates.${index}.value`)}/>
                <Card key={id}>
                  <TimeLine
                    data={register(`timeline[${index}]`)}
                    control={control}
                    name={index}
                  />
                  <button type="button" onClick={() => append({})}>
                    Add another event in the timeline
                  </button>
                </Card>
              );
            })}
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </FormProvider>
    </LocalizationProvider>
  );
}
