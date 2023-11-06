"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Simple from "./simple_component";
import { Input } from "@/components/ui/input";

export default function DayInTheLifeEvent({ data, control, name, timeline }) {
  // const form = useForm({
  //   defaultValues:{
  //     startTime: data.startTime || dayjs(),
  //     endTime: data.endTime || dayjs(),
  //     description: data.dayDesc || ""
  //   }
  // })
  // const {register} = form;
// console.log(data)

  return (
    <>

    <Simple
      data={data}
      control={control}
      name={`timeline[${timeline}].dayInTheLife[${name}].title`}
    />
   
      {/* switch to simple instead of input */}
    </>
  );
}
