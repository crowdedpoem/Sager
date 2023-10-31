"use client";
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SimpleDate({data, control, name}) {
  return (
    <>
    <FormItem>
      <FormControl>
        <Controller
          name={name}
          control={control}
          defaultValue={data || dayjs()}
          render={({ field }) => (
            <DatePicker       value={field.value}
            onChange={field.onChange}
            
            />
          )}
        />
      </FormControl>
      <FormDescription>This is for the time line</FormDescription>
      <FormMessage />
    </FormItem>
  </>
  );
}
