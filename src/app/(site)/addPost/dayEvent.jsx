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

export default function DayEvent({
    dayEvents,
    control,
    name,
    register,
    error,
}) {
    return (
        <>
            <div className="-mt-28">
                <label className="block mb-2 text-md font-medium text-gray-900 ml-5">
                    Day In the life for the Position
                </label>
                {dayEvents.fields.map((dayEvent, index) => (
                    <div className="">
                        <div key={dayEvent.id} className="flex flex-col">
                            <SimpleInput
                                control={control}
                                label=""
                                name={`experience[${name}].dayEvents[${index}].description`}
                                register={register}
                                error={
                                    error?.experience?.[name]?.dayEvents?.[
                                        index
                                    ]?.description
                                }
                                placeholder={"Title"}
                                styles={"h-4"}
                            />
                            <SimpleInput
                                control={control}
                                label=""
                                name={`experience[${name}].dayEvents[${index}].description`}
                                register={register}
                                error={
                                    error?.experience?.[name]?.dayEvents?.[
                                        index
                                    ]?.description
                                }
                                placeholder={"Further Details"}
                                further_details={true}
                            />
                        </div>
                        <div>
                        {index !== 0 && (
                            <button
                                onClick={() => dayEvents.remove(index)}
                                className=""
                            >
                                <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                                    Remove
                                </span>
                            </button>
                        )}
                        </div>
                        
                    </div>
                    // <div className="flex flex-row ">
                    //     <div key={dayEvent.id} className="flex flex-col">
                    //         <SimpleInput
                    //             control={control}
                    //             name={`experience[${name}].dayEvents[${index}].description`}
                    //             label=""
                    //             register={register}
                    //             error={
                    //                 error?.experience?.[name]?.dayEvents?.[index]
                    //                     ?.description
                    //             }
                    //             placeholder={"Title"}
                    //             styles={"h-4 w-full"}
                    //         />
                    //         <SimpleInput
                    //             control={control}
                    //             name={`experience[${name}].dayEvents[${index}].description`}
                    //             label=""
                    //             register={register}
                    //             error={
                    //                 error?.experience?.[name]?.dayEvents?.[index]
                    //                     ?.description
                    //             }
                    //             placeholder={"Further Details"}
                    //             further_details={true}
                    //         />
                    //     </div>

                    //     {index !== 0 && (
                    //         <button
                    //             onClick={() => cons.remove(index)}
                    //             className=""
                    //         >
                    //             <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                    //                 Remove
                    //             </span>
                    //         </button>
                    //     )}
                    // </div>
                ))}
                <button
                    type="button"
                    onClick={() => dayEvents.append({ description: "" })}
                    className="border border-dashed border-2 w-1/2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-5"
                >
                    Add
                </button>
            </div>
        </>
    );
}
