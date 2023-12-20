"use client";

import { useFieldArray } from "react-hook-form";
import SimpleInput from "./simple_input";
import StartDate from "./start_date";
import EndDate from "./end_date";
import Pros from "./prosCons";
import DayEvent from "./dayEvent";

export default function Experience({ control, name, register, error, values }) {
    const pros = useFieldArray({
        control,
        name: `experience[${name}].pros`,
    });
    const cons = useFieldArray({
        control,
        name: `experience[${name}].cons`,
    });
    const dayEvents = useFieldArray({
        control,
        name: `experience[${name}].dayEvents`,
    });
    return (
        <>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <SimpleInput
                    control={control}
                    name={`experience.${name}.title`}
                    register={register}
                    label="Title"
                    error={error?.experience?.[name]?.title}
                />

                <SimpleInput
                    control={control}
                    name={`experience.${name}.description`}
                    label="Description"
                    register={register}
                    error={error?.experience?.[name]?.description}
                />
                <div className="flex flex-row">
                    <StartDate
                        data={register(`experience.${name}.startDate`)}
                        control={control}
                        name={`experience[${name}].startDate`}
                        label="Start Date"
                        end={values.endDate}
                    />
                    <EndDate
                        data={register(`experience.${name}.endDate`)}
                        control={control}
                        name={`experience[${name}].endDate`}
                        label="End Date"
                        start={values.startDate}
                    />
                </div>

                <div className="row-span-5">
                    <div>
                        <Pros
                            pros={pros}
                            cons={cons}
                            control={control}
                            name={name}
                            register={register}
                            error={error}
                        />
                    </div>
                </div>

                <div>
                <DayEvent
                    dayEvents={dayEvents}
                    control={control}
                    name={name}
                    register={register}
                    error={error}
                />
                </div>
                
            </div>
        </>
    );
}
