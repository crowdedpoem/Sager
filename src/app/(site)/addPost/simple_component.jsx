"use client";

import dayjs, { Dayjs } from 'dayjs';

import * as React from 'react';
import { useForm } from "react-hook-form";
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
import { Controller } from "react-hook-form";



export default function Simple({ data, control, name }) {
  return (
    <>
    <FormItem>
      <FormControl>
        <Controller
          name={name}
          control={control}
          defaultValue={data || ""}
          render={({ field }) => (
            <Input
              placeholder={name}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FormControl>
      {/* <FormDescription>This is for the time line</FormDescription> */}
      <FormMessage />
    </FormItem>
  </>
  );
}
