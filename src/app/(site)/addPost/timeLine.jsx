"use client";

import dayjs, { Dayjs } from "dayjs";

import * as React from "react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { postSchema } from "@/validators/post";
import { Inter } from "next/font/google";

import { Button } from "@/components/ui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";
import Simple from "./simple_component";
import SimpleDate from "./simple_date";
import DayInTheLifeEvent from "./dayInTheLife";
import SimpleTime from "./simple_time";

export default function TimeLine({ data, control, name, location }) {
  const form = useForm({
    defaultValues: {
      title: data.title || "title",
      description: data.description || "",
      startDate: data.startDate || dayjs(),
      endDate: data.endDate || dayjs(),
      bottomLine: data.bottomLine || "",
      // these should be bigger or smaller
      pros: data.pros || [""],
      cons: data.cons || [""],
      dayInTheLife: data.dayInTheLife || [{ startTime: dayjs(), endTime: dayjs(), title: "" }],
    },
  });
  // const form = useForm({
  //   defaultValues: {
  //     // timeLine: [new Date()] as Date[],
  //     //TODO these should be single, not possible to increase #
  //     title: "",
  //     description: "",
  //     startDate: dayjs(),
  //     endDate: dayjs(),
  //     bottomLine: "",
  //     // these should be bigger or smaller
  //     pros: [{}],
  //     cons: [{}],
  //     dayInTheLife: [{}]
  //   },
  // });
  const { register } = form;

  const cons = useFieldArray({
    control,
    name: `timeline[${name}].cons`,
  });

  const dayInTheLife = useFieldArray({
    control,
    name: `timeline[${name}].dayInTheLife`,
  });

  const pros = useFieldArray({
    control,
    name: `timeline[${name}].pros`,
  });

  return (
    <>
      <Simple
        data={data.title}
        control={control}
        name={`timeline[${name}].title`}
      />
      <Simple
        data={data.description}
        control={control}
        name={`timeline[${name}].description`}
      />
      <SimpleDate
        data={data.startDate}
        control={control}
        name={`timeline[${name}].startDate`}
      />
      <SimpleDate
        data={data.endDate}
        control={control}
        name={`timeline[${name}].endDate`}
      />

      <Simple
        data={data.bottomLine}
        control={control}
        name={`timeline[${name}].bottomLine`}
      />
      <h2>here are the pros</h2>
      {pros.fields.map((pro, index) => (
        <Simple
          key={pro.id}
          data={pro.value}
          control={control}
          name={`timeline[${name}].pros[${index}].description`}
        />
      ))}
      <button type="button" onClick={() => pros.append("")}>
        add pro
      </button>
      <h3>here are the cons</h3>
      {cons.fields.map((con, index) => (
        <Simple
          key={con.id}
          data={con.value}
          control={control}
          name={`timeline[${name}].cons[${index}].description`}
        />
      ))}
    <button type="button" onClick={() => cons.append("")}>
        add con
      </button>
      <h3>Day In the life for the position</h3>
      {/* {dayInTheLife.fields.map((ditl, index) => (
        <div     key={ditl.id}>
          <SimpleTime 
           data={ditl.startTime}
           control={control}
           name={`timeline[${name}].dayInTheLife[${index}].startTime`}
          />
             <SimpleTime 
           data={ditl.endTime}
           control={control}
           name={`timeline[${name}].dayInTheLife[${index}].endTime`}
    
          
          />
        <Simple
      
          data={ditl.title}
          control={control}
          name={`timeline[${name}].dayInTheLife[${index}].title`}
        />

</div>
      ))} */}
    </>
  );
}
