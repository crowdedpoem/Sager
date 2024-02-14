"use client";

import { useFieldArray } from "react-hook-form";
import SimpleInput from "./simple_input";
import StartDate from "./start_date";
import EndDate from "./end_date";
import dayjs from "dayjs";
import { useEffect } from 'react';

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
    "cons": cons,
    "dayEvents": dayEvents
  }

  for (const listName in dict) {
    const list = dict[listName]
    let j = 0
    let numItems = localStorage.getItem(`${exp}.num${capitalizeFirstLetter(listName)}`)
    while (j < numItems) {
      if (j > 0) {
        list.append({ description: "" })
      }
      form.setValue(`${exp}.${listName}.${j}.description`, localStorage.getItem(`${exp}.${listName}.${j}.description`) ?? "")
      j += 1
    }
  }

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

function addTo(li, name, numExp) {
  li.append({ description: "" })
  const id = `experience.${numExp}.num${name}`
  const prev = Number(localStorage.getItem(id) ?? "1")
  localStorage.setItem(id, String(prev + 1))
}

export default function Experience({ form, control, name, register, error, values }) {
  const pros = useFieldArray({
    control,
    name: `experience.${name}.pros`,
  });
  const cons = useFieldArray({
    control,
    name: `experience.${name}.cons`,
  });
  const dayEvents = useFieldArray({
    control,
    name: `experience.${name}.dayEvents`,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      persistFormInput(form, name, pros, cons, dayEvents)
    }
  }, [form]);

  return (
    <>
      <SimpleInput
        control={control}
        name={`experience.${name}.title`}
        register={register}
        label="title"
        error={error?.experience?.[name]?.title}
      />

      <SimpleInput
        control={control}
        name={`experience.${name}.description`}
        label="description"
        register={register}
        error={error?.experience?.[name]?.description}
      />

      <StartDate
        data={register(`experience.${name}.startDate`)}
        control={control}
        name={`experience.${name}.startDate`}
        label="Start Date"
        end={values.endDate}
      />
      <EndDate
        data={register(`experience.${name}.endDate`)}
        control={control}
        name={`experience.${name}.endDate`}
        label="End Date"
        start={values.startDate}
      />

      <h2>here are the pros</h2>
      {pros.fields.map((pro, index) => (
        <div key={index}>
          <SimpleInput
            control={control}
            name={`experience.${name}.pros.${index}.description`}
            label="Pro of Job"
            register={register}
            error={error?.experience?.[name]?.pros?.[index]?.description}
          />
          {index > 0 && (
            <button onClick={() => removeFrom(pros, "Pros", name, index)
            }>
              Remove this pro
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => addTo(pros, "Pros", name)}>
        add pro
      </button>
      <h3>here are the cons</h3>
      {cons.fields.map((con, index) => (
        <div key={con.id}>
          <SimpleInput

            control={control}
            name={`experience.${name}.cons.${index}.description`}
            label="Con of Job"
            register={register}
            error={error?.experience?.[name]?.cons?.[index]?.description}
          />
          {index > 0 && (
            <button onClick={() => removeFrom(cons, "Cons", name, index)}>
              Remove this con
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => addTo(cons, "Cons", name)}>
        add con
      </button>
      <h3>Day In the life for the position</h3>

      {dayEvents.fields.map((dayEvent, index) => (
        <div key={dayEvent.id}>
          <SimpleInput
            control={control}
            label="what is something you usually do on the job?"
            name={`experience.${name}.dayEvents.${index}.description`}
            register={register}
            error={error?.experience?.[name]?.dayEvents?.[index]?.description}
          />
          {index > 0 && (
            <button onClick={() => removeFrom(dayEvents, "DayEvents", name, index)}>
              Remove this dayEvent
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => addTo(dayEvents, "DayEvents", name)}>
        add day in the life
      </button>
    </>
  );
}
