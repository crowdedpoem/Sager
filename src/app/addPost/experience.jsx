"use client";

import { useFieldArray } from "react-hook-form";
import SimpleInput from "./simple_input";
import StartDate from "./start_date";
import EndDate from "./end_date";
import Pros from "./prosCons";
import DayEvent from "./dayEvent";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function persistFormInput(form, name, pros, cons, dayEvents) {
    const expId = name
    const exp = `experience.${expId}`
  
    const title = `${exp}.title`
    form.setValue(title, localStorage.getItem(title) ?? "")
    const desc = `${exp}.description`
    form.setValue(desc, localStorage.getItem(desc) ?? "")
    const startDate = `${exp}.startDate`
    form.setValue(startDate, dayjs(localStorage.getItem(startDate)) ?? dayjs())
    const endDate = `${exp}.endDate`
    form.setValue(endDate, dayjs(localStorage.getItem(endDate)) ?? dayjs())
  
    const dict = {
      "pros": pros,
    //   "cons": cons,
    //   "dayEvents": dayEvents
    }

    
  
    for (const listName in dict) {
      const list = dict[listName]
      let j = 0
      
      let numItems = Number(localStorage.getItem(`${exp}.num${capitalizeFirstLetter(listName)}`) ?? "1")

      while (j < numItems) {
        if (list.fields.length < numItems) {
          list.append({ title: "", description: "" })

        }
        else if(list.fields.length > numItems){
          list.remove(list.fields.length -1)
        }
        form.setValue(`${exp}.${listName}.${j}.description`, localStorage.getItem(`${exp}.${listName}.${j}.description`) ?? "")

        form.setValue(`${exp}.${listName}.${j}.title`, localStorage.getItem(`${exp}.${listName}.${j}.title`) ?? "")       
        j += 1
      }
    }
  
  }

  export default function Experience({ form, control, name, register, error, values }) {
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


    // useEffect(() => {
      useEffect(() => {
        if (typeof window !== 'undefined') {
          persistFormInput(form, name, pros, cons, dayEvents);
        }
      }, [form, name, pros, cons, dayEvents]); 
      // }, [typeof window]);



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
