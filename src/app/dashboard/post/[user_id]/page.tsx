"use client";

import Features from '@/components/Features';
import ProsAndCons from '@/components/ProsAndCons';
import Timeline from '@/components/TimeLine';
import { EventHandler, useState } from "react";
// import { useSearchParams } from 'next/navigation'
import { changeSave, getExperiencesFromUserId, getIsSavedExperience, removePost } from "../../../../../lib/calls";
import useSWR from 'swr';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { UserRole } from '@prisma/client';
import Switch from '@mui/material/Switch';
import DayInTheLife from '@/components/DayInTheLife';
import AddExperienceModal from '@/components/AddExperienceModal';
import { singleExperience } from "@/validators/experience";
import { z } from "zod";

type Experience = {
    id: string,
    userId: string,
    startDate: string,
    title: string,
    description: string,
    endDate: string,
    createdAt: string,
    updatedAt: string,
    pros: string[],
    cons: string[]
}


export default function Post(
    { params }: any
) {

    type Experience = z.infer<typeof singleExperience>

    // need to get whether user saved this post




    const exps = useSWR(params.user_id + "getExperiences", () => getExperiencesFromUserId(params.user_id));
    const allExperiences = exps.data

    const isSaved = useSWR(params.user_id + "isPostSaved", () => getIsSavedExperience(params.user_id))

    const deleteTodoMutation = async (id: string) => {
        console.log("hi")
        console.log(id)
        try {
            const serverResp = await mutate(
                removePost(id),
            )
            setExp(null)
        } catch (err) {
            console.log("error")
        }
    }

    const session = useSession()
    const isAdmin = session.data?.user.role === UserRole.ADMIN
    const [isAuth, setIsAuth] = useState(false)
    let checkedAuth = false;
    const [showModal, setShowModal] = useState(false);

    const [exp, setExp] = useState<Experience | null>(null);
    const [checked, setChecked] = useState(false)

    function saveToggle(userId: string, value: boolean) {
        setChecked(value)
        changeSave(value, userId)
    }

    const handleExp = (e: Experience) => {
        setExp(e);
    };

    //TODO break up into multiple useEffects 
    useEffect(() => {
        if (isSaved.data) {
            setChecked(isSaved.data)
        }
    }, [isSaved.data])

    useEffect(() => {
        if (!!allExperiences && exp === null) {
            setExp(allExperiences[0])

        }
        //TODO thsi is stupid solution, maybe server component can pass down session?
        if (!!exp && session.data?.user.id !== null && !checkedAuth) {
            const viewerId = session.data?.user.id
            setIsAuth(viewerId === allExperiences[0].userId)

            checkedAuth = true
        }
    })

    return (
        <>
            <section className="">

                <div className="h-screen">
                    <div className="h-full flex gap-x-4">
                        <div className="w-full flex flex-col">
                            {/* <div className="bg-red-500">
                                header
                            </div> */}
                            <div className="flex-grow flex h-full overflow-auto">
                                <div className="w-1/2 overflow-auto border-r border-gray-700">
                                    <div className='flex flex-row-reverse m-5'>
                                        {isAdmin ? <button className={`py-2 my-2 flex items-center justify-center w-48 font-semibold text-gray-900 outline outline-purple rounded-lg hover: bg-gray-400 bg-white`} onClick={() => deleteTodoMutation(exp!.userId)}>
                                            <p>admin remove</p>
                                        </button> : <p>normie</p>
                                        }
                                        {
                                            isAuth ? <button className={`py-2 my-2 flex items-center justify-center w-48 font-semibold text-gray-900 outline outline-purple rounded-lg hover: bg-gray-400 bg-white`} onClick={() => setShowModal(true)}>
                                                <p>Add an Experience</p>
                                            </button> :

                                                // <button onClick={()=> saveUser(exp ? exp.userId : "")}>Save</button>
                                                <div>
                                                    <p>Save</p>
                                                    <Switch checked={checked} onChange={(e) => saveToggle(exp ? exp.userId : "", e.target.checked)} inputProps={{ 'aria-label': 'controlled' }} />
                                                </div>


                                        }
                                        {/*  */}
                                    </div>

                                    <AddExperienceModal isOpen={showModal} setShowModal={setShowModal} />

                                    {Array.isArray(allExperiences) && allExperiences.length === 0 ? <h1>user has not posted their career!</h1> : <Timeline items={allExperiences} expState={handleExp} />}


                                </div>

                                <div className="w-1/2 overflow-auto">
                                    <div className='flex justify-center'>

                                        {exp != null ? (
                                            <div >
                                                <div className='m-8'>
                                                    <div className="flex justify-between mb-3">
                                                        <h3 className="text-3xl font-semibold text-gray-700">{exp.title}</h3>
                                                        <h1 className="text-gray-700 pt-1">From {exp.startDate.substring(0, exp.startDate.indexOf("T"))} To {exp.endDate.substring(0, exp.startDate.indexOf("T"))}</h1>
                                                    </div>
                                                    <p className="mb-4 text-lg font-normal text-gray-700">
                                                        {exp.description}
                                                    </p>
                                                </div>

                                                <Features industry={null} travel={null} keywords={null} />
                                                <ProsAndCons pros={exp.pros} cons={exp.cons} />

                                                <h1 className='font-big-shoulders-display text-2xl pb-3 flex text-gray-700 flex items-center justify-center pt-24'>TODO Big picture section</h1>
                                                <DayInTheLife items={exp.dayEvents} />

                                            </div>
                                        ) : (
                                            <h1 className="text-black">click on one bruh</h1>
                                        )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

} 