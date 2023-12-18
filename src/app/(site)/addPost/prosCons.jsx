"use client";

import {
    FormControl,
    FormDescription,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import SimpleInput from "./simple_input";

export default function Pros({ pros, cons, control, name, register, error }) {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="space-y-3">
                    <label className="block text-md font-medium text-gray-900 ml-5 -mb-3">
                        Pros:
                    </label>
                    {pros.fields.map((pro, index) => (
                        <div className="">
                            <div key={pro.id} className="flex flex-col">
                                <SimpleInput
                                    control={control}
                                    name={`experience[${name}].pros[${index}].description`}
                                    label=""
                                    register={register}
                                    error={
                                        error?.experience?.[name]?.pros?.[index]
                                            ?.description
                                    }
                                    placeholder={"Title"}
                                    styles={"h-4"}
                                />
                                <SimpleInput
                                    control={control}
                                    name={`experience[${name}].pros[${index}].description`}
                                    label=""
                                    register={register}
                                    error={
                                        error?.experience?.[name]?.pros?.[index]
                                            ?.description
                                    }
                                    placeholder={"Further Details"}
                                    further_details={true}
                                />
                            </div>

                            <div className="pl-3">
                                {index !== 0 && (
                                    <button
                                        onClick={() => pros.remove(index)}
                                        className=""
                                    >
                                        <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                                            Remove
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => pros.append({ description: "" })}
                        className="border border-dashed border-2 w-1/2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-5"
                    >
                        Add
                    </button>
                </div>

                <div className="space-y-2">
                    <label className="block text-md font-medium text-gray-900 ml-5 -mb-4">
                        Cons:
                    </label>

                    {cons.fields.map((con, index) => (
                        <div className="">
                            <div key={con.id} className="flex flex-col">
                                <SimpleInput
                                    control={control}
                                    name={`experience[${name}].cons[${index}].description`}
                                    label=""
                                    register={register}
                                    error={
                                        error?.experience?.[name]?.cons?.[index]
                                            ?.description
                                    }
                                    placeholder={"Title"}
                                    styles={"h-4"}
                                />
                                <SimpleInput
                                    control={control}
                                    name={`experience[${name}].cons[${index}].description`}
                                    label=""
                                    register={register}
                                    error={
                                        error?.experience?.[name]?.cons?.[index]
                                            ?.description
                                    }
                                    placeholder={"Further Details"}
                                    further_details={true}
                                />
                            </div>

                            <div className="pl-3">
                                {index !== 0 && (
                                    <button
                                        onClick={() => cons.remove(index)}
                                        className=""
                                    >
                                        <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                                            Remove
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => cons.append({ description: "" })}
                        className="border border-dashed border-2 w-1/2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-5"
                    >
                        Add
                    </button>
                </div>
            </div>
        </>
    );
}
