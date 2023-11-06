"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Controller } from "react-hook-form";
  
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Simple from "./simple_component";
import { Input } from "@/components/ui/input";

export default function SimpleTime({ data, control, name }) {
  const [startValue, setStartValue] = React.useState(dayjs());
  const [endValue, setEndValue] = React.useState(dayjs());

  return (
    <>
      <FormItem>
        <FormControl>
          <Controller
            name={name}
            control={control}
            defaultValue={data || ""}
            render={({ field }) => (
              <TimeField
                label="Start time"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </FormControl>
        {/* <FormDescription>This is for the time line</FormDescription> */}
        <FormMessage />
      </FormItem>

      {/* switch to simple instead of input */}
    </>
  );
}
