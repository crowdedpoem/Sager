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

export default function StartDate({ data, control, name, label, end }) {
  return (
    <>
      <div className="flex justify-items-stretch ml-5">
        <FormItem>
          <FormDescription className="mt-3">{label}</FormDescription>
          <FormControl>
            <Controller
              name={name}
              control={control}
              defaultValue={data || dayjs()}
              render={({ field }) => (
                <DatePicker
                  className=""
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    localStorage.setItem(name, e);
                  }}
                  maxDate={end}
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
