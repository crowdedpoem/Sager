"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";

export default function SimpleInput({ control, name, label, register, error }) {
  return (
    <>
      <div className="mx-5 my-3 w-1/2">
        <FormItem>
          <FormDescription>{label}</FormDescription>
          <FormControl>
            <Controller
              name={name}
              control={control}
              defaultValue={register(name) || ""}
              render={({ field }) => (
                <>
                  <Input
                    placeholder={label}
                    value={field.value}
                    register={register(name)}
                    onChange={(e) => {
                      field.onChange(e);
                      localStorage.setItem(name, e.target.value);
                    }}
                  />
                  {error?.message && <div>{error?.message}</div>}
                </>
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </div>
    </>
  );
}
