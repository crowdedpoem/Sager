"use client";
import { formSchema, singleExperience } from "@/validators/experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { default as dayjs } from "dayjs";
import { useSession } from 'next-auth/react';
import { FormProvider, UseFieldArrayAppend, UseFieldArrayRemove, UseFormReturn, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { default as Experience } from "./experience";
import { useEffect } from "react";

type input = z.infer<typeof formSchema>;
type singleExp = z.infer<typeof singleExperience>;
type appendType = {experience: singleExp}

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



export default function AddPost(props : {toggleModal: (e: boolean) => void}) {
  type input = z.infer<typeof formSchema>;
  const form = useForm<input>({
    defaultValues: {
      experience: [
        {
          title: "",
          description: "",
          startDate: dayjs(),
          endDate: dayjs(),
          pros: [{ title: "", description: "" }],
          cons: [{ title: "", description: "" }],
          dayEvents: [{ title: "", description: "" }],
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  function persistExperiences() {
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
        pros: [{ title: "", description: "" }],
        cons: [{ title: "", description: "" }],
        dayEvents: [{ title: "", description: "" }],
      })
    };
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      persistExperiences()
    }
  }, [form]);

  const onFormSubmit = async (data: any) => {
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

  const { data: session } = useSession()

  let modalState = props.toggleModal;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <p>{JSON.stringify(session)}</p> */}
      <FormProvider {...form}>
        <div>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-3"
          >
            <div className="container">
              {fields.map(({ id }, index) => {

                const values = getValues();
                return (
                  <div className="block w-fit bg-white border border-2 border-gray-500 rounded-lg shadow m-5" key={id}>
                    <Experience
                    form={form}
                      control={control}
                      name={index}
                      register={register}
                      error={errors}
                      values={values.experience[index]}
                    />
                    <br />
                    {index !== 0 && (
                      <button onClick={() => remove(index)} className="">
                        <img className="w-11 h-11" src="https://static.vecteezy.com/system/resources/previews/016/964/110/original/eps10-red-garbage-or-trash-can-solid-icon-or-logo-isolated-on-white-background-delete-or-rubbish-basket-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg" alt="" />
                      </button>
                    )}

                    <br />

                  </div>
                );
              })}
            </div>


            <button
              className="border border-dashed border-2 w-full border-sky-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              type="button"
              onClick={() =>
                append({
                  title: "",
                  description: "",
                  startDate: dayjs(),
                  endDate: dayjs(),
                  pros: [{ title: "", description: "" }],
                  cons: [{ title: "", description: "" }],
                  dayEvents: [{ title: "", description: "" }],
                })
              }
            >
              Add Another Event
            </button>
            <br />
            <div className="flex items-center sticky bottom-0 bg-white overflow-hidden justify-end p-6 mt-5 border-t border-solid border-gray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {modalState(false)}}
              >
                Cancel
              </button>
              <button
                className="bg-purple text-white font-bold w-24 uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {modalState(false)}}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
    </LocalizationProvider>
  );
}
