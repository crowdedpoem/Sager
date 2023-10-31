"use client";

import dayjs, { Dayjs } from 'dayjs';

import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar as CalendarIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { FormProvider,  useFieldArray, useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";
import Simple from './simple_component';
import SimpleDate from './simple_date';


export default function TimeLine({ data, control, name }) {
  const form = useForm({
    defaultValues: {
      title: data.title || 'title',
      description: data.description || '',
      startDate: data.startDate || dayjs()
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
  const {register} = form


  // const pros = useFieldArray({
  //   control,
  //   name: "pros",
  // });

  return (
    <>
  
    <Simple data={data.title} control={control} name={`timeline[${name}].title`} />
      <Simple data={data.description} control={control} name={`timeline[${name}].description`} />
      {/* <SimpleDate data={data.startDate} control={control} name="startDate"/> */}

    <h1>{data.title}</h1>
                  {/* {pros.fields.map(({ id }, index) => {
                  return (
                    <Simple key={id} name='Pro' field={register(`pros.${index}.value`)} />
                    <SimpleDate key={id} field={register(`dates.${index}.value`)}/>
                  );
                })} */}
                {/* add button for more pros */}
         
    </>
  );
}
