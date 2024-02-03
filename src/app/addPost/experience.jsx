"use client";

import { useFieldArray } from "react-hook-form";
import SimpleInput from "./simple_input";
import StartDate from "./start_date";
import EndDate from "./end_date";

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

      <h2>here are the pros</h2>
      {pros.fields.map((pro, index) => (
        <div key={pro.id}>
        <SimpleInput
          
          control={control}
          name={`experience[${name}].pros[${index}].description`}
          label="Pro of Job"
          register={register}
          error={error?.experience?.[name]?.pros?.[index]?.description}
        />
        {index > 0 && (
                    <button onClick={() => pros.remove(index)}>
                      Remove this pro
                    </button>
                  )}
        </div>
      ))}
      <button type="button" onClick={() => pros.append("")}>
        add pro
      </button>
      <h3>here are the cons</h3>
      {cons.fields.map((con, index) => (
        <div key={con.id}>
        <SimpleInput
          
          control={control}
          name={`experience[${name}].cons[${index}].description`}
          label="Con of Job"
          register={register}
          error={error?.experience?.[name]?.cons?.[index]?.description}
        />
  {index > 0 && (
                    <button onClick={() => cons.remove(index)}>
                      Remove this con
                    </button>
                  )}
</div>
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
          name={`experience[${name}].dayEvents[${index}].description`}
          register={register}
          error={error?.experience?.[name]?.dayEvents?.[index]?.description}
        />
      ))}
      <button type="button" onClick={() => dayEvents.append("")}>
        add day in the life
      </button>
    </>
  );
}
