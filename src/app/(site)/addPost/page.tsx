"use client";
import { Button } from "@/components/ui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { experienceSchema, singleExperience } from "@/validators/experience";
import Experience from "./experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession, signOut } from "next-auth/react";

// localStorage.setItem("numExperience", "2")
//   const numSavedExp = Number(localStorage.getItem("numExperience"))
//   for(let i = 0; i < numSavedExp; i++){
//     const exp = `experience[${i}]`
//     console.log(exp)
//   }

type input = z.infer<typeof experienceSchema>;
type singleExp = z.infer<typeof singleExperience>;

function listFromLocal(name: string) {
  let arr = [];
  let key = "";
  let i = 0;
  while (localStorage.getItem(key) != null || i === 0) {
    key = name + `[${i}].description`;

    arr[i] = { description: localStorage.getItem(key) ?? "" };
    i += 1;
  }
  return arr;
}

function initForm(): input {
  console.log(listFromLocal("experience[0].pros"));
  let arr = []
  const numExp = Number(localStorage.getItem("numExperience"))
  console.log("num exp is " + numExp)
  for(let i = 0; i < numExp; i++){
    const jsonData: singleExp = {
    
      title: localStorage.getItem("experience.0.title") ?? "",
      description: localStorage.getItem("experience.0.description") ?? "",
      startDate:
        dayjs(localStorage.getItem("experience[0].startDate")) ?? dayjs(),
      endDate:
        dayjs(localStorage.getItem("experience[0].endDate")) ?? dayjs(),
      pros: listFromLocal("experience[0].pros"),
      cons: listFromLocal("experience[0].cons"),
      dayEvents: listFromLocal("experience[0].dayEvents"),
  
};
arr.push(jsonData)
  }

  return {
    experience: arr
  };
}

export default function AddPost() {


  const form = useForm<input>({
    defaultValues: initForm(),
    resolver: zodResolver(experienceSchema),
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

  const onFormSubmit = async (data: any) => {
    console.log("SUBMIT BUTTON");
    // console.log(data);

    var sendToAPI: Record<string, any> = {};
    sendToAPI["experience"] = data["experience"];
    sendToAPI["email"] = session?.user?.email ?? "bad";
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
  };

  const { data: session } = useSession();


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <p>{JSON.stringify(session)}</p>
      <FormProvider {...form}>
        <div>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-3"
          >
            {fields.map(({ id }, index) => {
              const values = getValues();
              return (
                <div className="" key={id}>
                  <Experience
                    control={control}
                    name={index}
                    register={register}
                    error={errors}
                    values={values.experience[index]}
                  />
                  <br />
                  {index === 1 && (
                    <Button onClick={() => remove(index)}>
                      Remove this Experience
                    </Button>
                  )}

                  <br />
                  <button
                    className=""
                    type="button"
                    onClick={() =>{
                      const currNum = Number(localStorage.getItem("numExperience"))
                      localStorage.setItem("numExperience", 
                      String(currNum+1)
                      
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
