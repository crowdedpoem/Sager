"use client";

import dayjs from "dayjs";

import { useFieldArray, useForm } from "react-hook-form";
import SimpleInput from "./simple_component";
import SimpleDate from "./simple_date";

export default function TimeLine({ data, control, name, location }) {
  const form = useForm({
    defaultValues: {
      title: data.title || "title",
      description: data.description || "",
      startDate: data.startDate || dayjs(),
      endDate: data.endDate || dayjs(),
      bottomLine: data.bottomLine || "",
      // these should be bigger or smaller
      pros: data.pros || [""],
      cons: data.cons || [""],
      dayInTheLife: data.dayInTheLife || [""],
    },
  });
  
  const { register } = form;

  const cons = useFieldArray({
    control,
    name: `timeline[${name}].cons`,
  });

  const dayInTheLife = useFieldArray({
    control,
    name: `timeline[${name}].dayInTheLife`,
  });

  const pros = useFieldArray({
    control,
    name: `timeline[${name}].pros`,
  });

  const dayLifeEvents = useFieldArray({
    control,
    name: `timeline[${name}]dayLifeEvents`,
  });

  return (
    <>
      <div className="">
        <SimpleInput
          data={data.title}
          control={control}
          name={`timeline[${name}].title`}
          label="Title"
        />
        <SimpleInput
          data={data.description}
          control={control}
          name={`timeline[${name}].description`}
          label="Desc"
        />
      </div>

      <SimpleDate
        data={data.startDate}
        control={control}
        name={`timeline[${name}].startDate`}
        label="Start Date"
      />
      <SimpleDate
        data={data.endDate}
        control={control}
        name={`timeline[${name}].endDate`}
        label="End Date"
      />

      <h2>here are the pros</h2>
      {pros.fields.map((pro, index) => (
        <SimpleInput
          key={pro.id}
          data={pro.value}
          control={control}
          name={`timeline[${name}].pros[${index}].description`}
          label='Pro of job'
        />
      ))}
      <button type="button" onClick={() => pros.append("")}>
        add pro
      </button>
      <h3>here are the cons</h3>
      {cons.fields.map((con, index) => (
        <SimpleInput
          key={con.id}
          data={con.value}
          control={control}
          name={`timeline[${name}].cons[${index}].description`}
          label='Con of job'
        />
      ))}
      <button type="button" onClick={() => cons.append("")}>
        add con
      </button>
      <h3>Day In the life for the position</h3>

      {dayLifeEvents.fields.map((dayLife, index) => (
        <SimpleInput
          key={dayLife.id}
          data={dayLife.value}
          control={control}
          name={`timeline[${name}].dayLifeEvents[${index}].description`}
        />
      ))}
      <button type="button" onClick={() => dayLifeEvents.append("")}>
        add day in the life
      </button>
      <br />
    </>
  );
}
