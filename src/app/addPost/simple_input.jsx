"use client";

import {
    FormControl,
    FormDescription,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";

export default function SimpleInput({
    control,
    name,
    label,
    register,
    error,
    placeholder,
    styles,
    further_details,
}) {
    return (
        <>
            <div className="p-3 w-full">
                <FormItem>
                    <FormDescription className="block text-md font-medium text-gray-900">{label}</FormDescription>
                    <FormControl>
                        <Controller
                            name={name}
                            control={control}
                            defaultValue={register(name) || ""}
                            render={({ field }) => (
                                <>
                                    <div className={` ${styles}`}>
                                        <Input
                                            placeholder={placeholder}
                                            value={field.value}
                                            register={register(name)}
                                            onChange={(e) => {
                                                field.onChange(e);
                                                localStorage.setItem(
                                                    name,
                                                    e.target.value
                                                );
                                            }}
                                            className={`${
                                                further_details ? "h-24" : ""
                                            }`}
                                        />
                                    </div>

                                    {error?.message && (
                                        <div>{error?.message}</div>
                                    )}
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
