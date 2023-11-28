"use client";

import { useFieldArray } from "react-hook-form";
import SimpleInput from "./simple_input";
import StartDate from "./start_date";
import EndDate from "./end_date";

export default function Timeline({ control, name, register, error, values }) {
  const pros = useFieldArray({
    control,
    name: `timeline[${name}].pros`,
  });
  const cons = useFieldArray({
    control,
    name: `timeline[${name}].cons`,
  });
  const dayEvents = useFieldArray({
    control,
    name: `timeline[${name}].dayEvents`,
  });
  return (
    <>
      <SimpleInput
        control={control}
        name={`timeline.${name}.title`}
        register={register}
        label="title"
        error={error?.timeline?.[name]?.title}
      />

      <SimpleInput
        control={control}
        name={`timeline.${name}.description`}
        label="description"
        register={register}
        error={error?.timeline?.[name]?.description}
      />

      <StartDate
        data={register(`timeline.${name}.startDate`)}
        control={control}
        name={`timeline[${name}].startDate`}
        label="Start Date"
        end={values.endDate}
      />
      <EndDate
        data={register(`timeline.${name}.endDate`)}
        control={control}
        name={`timeline[${name}].endDate`}
        label="End Date"
        start={values.startDate}
      />

      <h2>here are the pros</h2>
      {pros.fields.map((pro, index) => (
        <SimpleInput
          key={pro.id}
          control={control}
          name={`timeline[${name}].pros[${index}].description`}
          label="Pro of Job"
          register={register}
          error={error?.timeline?.[name]?.pros?.[index]?.description}
        />
      ))}
      <button type="button" onClick={() => pros.append("")}>
        add pro
      </button>
      <h3>here are the cons</h3>
      {cons.fields.map((con, index) => (
        <SimpleInput
          key={con.id}
          control={control}
          name={`timeline[${name}].cons[${index}].description`}
          label="Con of Job"
          register={register}
          error={error?.timeline?.[name]?.cons?.[index]?.description}
        />
      ))}
      <button type="button" onClick={() => cons.append("")}>
        add con
      </button>
      <h3>Day In the life for the position</h3>

      {dayEvents.fields.map((dayEvent, index) => (
        <SimpleInput
          key={dayEvent.id}
          control={control}
          label="what is something you usually do on the job?"
          name={`timeline[${name}].dayEvents[${index}].description`}
          register={register}
          error={error?.timeline?.[name]?.dayEvents?.[index]?.description}
        />
      ))}
      <button type="button" onClick={() => dayEvents.append("")}>
        add day in the life
      </button>
    </>
  );
}
