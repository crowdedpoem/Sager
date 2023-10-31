"use client";
import React, { useState } from "react";
import * as z from "zod";
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

export default function AddPost() {
 
  const form = useForm({
    defaultValues: {
      timeline: [{ id: "1", title: "", description: "", startDate: dayjs() }],
      // timeline: [{ id: "1", startDate: "dayjs()" }],
    },
  });

  const { control } = form;
  const { register } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "timeline",
  });

  const onFormSubmit = (data) => {
    console.log(data);
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
           
                <TimeLine
                key={id}
                data={register(`timeline[${index}]`)}
                control={control}
                name={index}
              />
              );
            })}
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </FormProvider>
    </LocalizationProvider>
  );
}
