"use client";
import dayjs from "dayjs";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function SimpleDate({ data, control, name, label }) {
  return (
    <>
      <div className="flex justify-items-stretch">
        <FormItem>
          <FormDescription className="m-0 p-0">{label}</FormDescription>
          <FormControl>
            <Controller
              name={name}
              control={control}
              defaultValue={data || dayjs()}
              render={({ field }) => (
                <DatePicker
                  className=""
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      </div>
    </>
  );
}
