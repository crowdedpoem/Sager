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

export default function EndDate({ data, control, name, label, start }) {
  return (
    <>
      <div className="flex justify-items-stretch ml-5">
        <FormItem>
          <label className="block mb-2 text-md font-medium text-gray-900">{label}</label>
          <FormControl>
            <Controller
              name={name}
              control={control}
              defaultValue={data || dayjs()}
              render={({ field }) => (
                <DatePicker
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  value={field.value}
                  onChange={field.onChange}
                  minDate={start}
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
