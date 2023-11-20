"use client";


import {
  FormControl, FormDescription, FormItem, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";

export default function SimpleInput({ data, control, name, label }) {
  return (
    <>
    <div className='mx-5 my-3 w-1/2'>
    <FormItem>
    <FormDescription>{label}</FormDescription>
      <FormControl>
        <Controller
          name= {name}
          control={control}
          defaultValue={data || ""}
          render={({ field }) => (
            <Input
              placeholder={label}
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