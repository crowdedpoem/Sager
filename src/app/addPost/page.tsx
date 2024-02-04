"use client";
import { Button } from "@/components/ui/button";
import { FormProvider, UseFormReturn, useFieldArray, useForm, UseFieldArrayRemove, UseFieldArrayAppend } from "react-hook-form";
import { z } from "zod";
import SimpleInput from "./simple_input";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { formSchema, singleExperience } from "@/validators/experience";
import Experience from "./experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

// localStorage.setItem("numExperience", "2")
//   const numSavedExp = Number(localStorage.getItem("numExperience"))
//   for(let i = 0; i < numSavedExp; i++){
//     const exp = `experience[${i}]`
//     console.log(exp)
//   }

type input = z.infer<typeof formSchema>;
type singleExp = z.infer<typeof singleExperience>;
type appendType = {experience: singleExp}

function persistExperiences(append: UseFieldArrayAppend<input>) {
  if (localStorage.getItem("numExperience") === null) {
    localStorage.setItem("numExperience", "1")
  }
  const numExp = Number(localStorage.getItem("numExperience"))
  for (let i = 1; i < numExp; i++) {
    append({
      title: "",
      description: "",
      startDate: dayjs(),
      endDate: dayjs(),
      pros: [{ description: "" }],
      cons: [{ description: "" }],
      dayEvents: [{ description: "" }],
    })
  };
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function removeExpFromForm(remove: UseFieldArrayRemove, form: UseFormReturn<input>, index: number) {
  remove(index)
  //TODO remove all inputs for given exp, use function
  removeExpFromLS(form, index)
}

function removeExpFromLS(form: UseFormReturn<input>, numExp: number) {
  console.log("the index given to remove exp from ls is " + numExp)
  localStorage.removeItem(`experience.${numExp}.title`)
  localStorage.removeItem(`experience.${numExp}.description`)
  localStorage.removeItem(`experience.${numExp}.startDate`)
  localStorage.removeItem(`experience.${numExp}.endDate`)

  const dict = ["pros", "cons", "dayEvents"]

  for (const listName in dict) {
    let j = 0
    let numItems = Number(localStorage.getItem(`experience.${numExp}.num${capitalizeFirstLetter(listName)}`) ?? "1")
    while (j < numItems) {
      localStorage.removeItem(`experience.${numExp}.${listName}.${j}.description`)
      j += 1
    }
  }

  const prev = Number(localStorage.getItem("numExperience") ?? "2")
  localStorage.setItem("numExperience", String(prev - 1))
}

export default function AddPost() {

  const { data: session } = useSession();

  const form = useForm<input>({
    defaultValues: {
      tag: "",
      experience: [
        {
          title: "",
          description: "",
          startDate: dayjs(),
          endDate: dayjs(),
          pros: [{ description: "" }],
          cons: [{ description: "" }],
          dayEvents: [{ description: "" }]
        },
      ],
    },
    resolver: zodResolver(formSchema),
  });

  const {
    control,
    register,
    getValues,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      persistExperiences(append)
    }
  }, [form]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const onFormSubmit = async (data: any) => {
    console.log("SUBMIT BUTTON");
    // console.log(data);

    var sendToAPI: Record<string, any> = {};
    sendToAPI["experience"] = data["experience"];
    sendToAPI["email"] = session?.user?.email ?? "bad";
    sendToAPI["tag"] = data["tag"]
    console.log(sendToAPI);

    try {
      await fetch("/api/addPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendToAPI),
      });
    } catch (error) {
      console.error(error);
    }
    // get num of experiences and wipe them all from ls
    if (localStorage.getItem("numExperience") === null) {
      localStorage.setItem("numExperience", "1")
    }
    const numExp = Number(localStorage.getItem("numExperience"))
    for (let i = 0; i < numExp; i++) {
      removeExpFromLS(form, i)
    }
  };




  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <p>{JSON.stringify(session)}</p>
      <FormProvider {...form}>
        <div>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-3"
          >
            <SimpleInput
              control={control}
              name={`tag`}
              register={register}
              label="tag"
              error={errors?.tag}
            />
            {fields.map(({ id }, index) => {
              const values = getValues();
              return (
                <div className="" key={id}>
                  <Experience
                    form={form}
                    control={control}
                    name={index}
                    register={register}
                    error={errors}
                    values={values.experience[index]}
                  />
                  <br />
                  {index > 0 && (
                    <Button onClick={() => removeExpFromForm(remove, form, index)}>
                      Remove this Experience
                    </Button>
                  )}

                  <br />
                  <button
                    className=""
                    type="button"
                    onClick={() => {
                      const currNum = Number(localStorage.getItem("numExperience"))
                      localStorage.setItem("numExperience",
                        String(currNum + 1)
                      )
                      append({
                        title: "",
                        description: "",
                        startDate: dayjs(),
                        endDate: dayjs(),
                        pros: [{ description: "" }],
                        cons: [{ description: "" }],
                        dayEvents: [{ description: "" }],
                      })
                    }
                    }
                  >
                    Add another event in the experience
                  </button>
                </div>
              );
            })}

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </FormProvider>
    </LocalizationProvider>
  );
}
