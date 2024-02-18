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

function addTo(li, name, numExp) {
    li.append({ title: "", description: "" })
    const id = `experience.${numExp}.num${name}`
    const prev = Number(localStorage.getItem(id) ?? "1")
    localStorage.setItem(id, String(prev + 1))
  }

  function removeFrom(li, name, numExp, index) {
    li.remove(index)
    // decrement counter on items in list
    const id = `experience.${numExp}.num${name}`
    const prev = Number(localStorage.getItem(id) ?? "2")
    localStorage.setItem(id, String(prev - 1))
    // remove corresponding value for input
    const valId = `experience.${numExp}.${name.toLowerCase()}.${index}.description`
    localStorage.removeItem(valId)
  }

export default function Pros({ pros, cons, control, name, register, error }) {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="space-y-3">
                    <label className="block text-md font-medium text-gray-900 ml-4 -mb-3">
                        Pros:
                    </label>
                    {pros.fields.map((pro, index) => (
                        <div className="" key={index}>
                            <div key={pro.id} className="flex flex-col">
                                <SimpleInput
                                    control={control}
                                    name={`experience.${name}.pros.${index}.title`}
                                    label=""
                                    register={register}
                                    error={
                                        error?.experience?.[name]?.pros?.[index]
                                            ?.title
                                    }
                                    placeholder={"Title"}
                                    styles={"h-4"}
                                />
                                <SimpleInput
                                    control={control}
                                    name={`experience.${name}.pros.${index}.description`}
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
                                        onClick={() => removeFrom(pros, "Pros", name, index)}
                                        className=""
                                    >
                                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                                            Remove
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addTo(pros, "Pros", name)}
                        className="border border-dashed border-2 w-1/2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-5"
                    >
                        Add
                    </button>
                </div>

                <div className="space-y-3">
                    <label className="block text-md font-medium text-gray-900 ml-4 -mb-3">
                        Cons:
                    </label>

                    {cons.fields.map((con, index) => (
                        <div className="" key={index}>
                            <div key={con.id} className="flex flex-col">
                                <SimpleInput
                                    control={control}
                                    name={`experience.${name}.cons.${index}.title`}
                                    label=""
                                    register={register}
                                    error={
                                        error?.experience?.[name]?.cons?.[index]
                                            ?.title
                                    }
                                    placeholder={"Title"}
                                    styles={"h-4"}
                                />
                                <SimpleInput
                                    control={control}
                                    name={`experience.${name}.cons.${index}.description`}
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
                                        onClick={() => removeFrom(cons, "Cons", name, index)}
                                        className=""
                                    >
                                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                                            Remove
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addTo(cons, "Cons", name)}
                        className="border border-dashed border-2 w-1/2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-5"
                    >
                        Add
                    </button>
                </div>
            </div>
        </>
    );
}
