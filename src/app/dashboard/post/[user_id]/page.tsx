"use client";

import Features from '@/components/Features';
import ProsAndCons from '@/components/ProsAndCons';
import Timeline from '@/components/TimeLine';
import { useState } from "react";
// import { useSearchParams } from 'next/navigation'
import { getExperiencesFromUserId, removePost } from "../../../../../lib/calls";
import useSWR from 'swr';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { UserRole } from '@prisma/client';

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

    const { data, error, mutate } = useSWR(params.user_id, () => getExperiencesFromUserId(params.user_id));
    const allExperiences = data;

    const deleteTodoMutation = async (id:string) => {
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

    const handleExp = (e: any) => {
        setExp(e);
    };

    useEffect(()=>{
        if(!!allExperiences && exp === null){
            setExp(allExperiences[0])
                
        }
        //TODO thsi is stupid solution, maybe server component can pass down session?
        if(!!exp && session.data?.user.id !== null && !checkedAuth ){
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
                                        { isAdmin ? <button className={`py-2 my-2 flex items-center justify-center w-48 font-semibold text-gray-900 outline outline-purple rounded-lg hover: bg-gray-400 bg-white`} onClick={() => deleteTodoMutation(exp!.userId)}>
                                        <p>admin remove</p>
                                        </button>: <p>normie</p>
                                        }
                                        {
                                            isAuth ? <button className={`py-2 my-2 flex items-center justify-center w-48 font-semibold text-gray-900 outline outline-purple rounded-lg hover: bg-gray-400 bg-white`} onClick={() => setShowModal(true)}>
                                            <p>Add an Experience</p>
                                        </button> : <h1>is visitor</h1>
                                        }
                                        {/*  */}
                                    </div>

                                    {showModal ? (
                                        <>
                                            <div
                                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                <div className="relative w-full max-w-7xl max-h-full">
                                                    {/*content*/}
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        {/*header*/}
                                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                            <h3 className="text-3xl font-semibold">
                                                                Add an Experince
                                                            </h3>
                                                            <button
                                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold  focus:outline-none"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                    x
                                                                </span>
                                                            </button>
                                                        </div>
                                                        {/*body*/}
                                                        <div className="relative p-6 flex-auto">
                                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                                Form Item
                                                            </p>
                                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                                Form Item
                                                            </p>
                                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                                Form Item
                                                            </p>
                                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                                Form Item
                                                            </p>
                                                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                                Form Item
                                                            </p>
                                                        </div>
                                                        {/*footer*/}
                                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                            <button
                                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                className="bg-purple text-white font-bold w-24 uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opacity-50 fixed inset-0 z-40 bg-purple">ty</div>
                                        </>
                                    ) : null}

                                    {Array.isArray(allExperiences) && allExperiences.length === 0 ? <h1>user has not posted their career!</h1> : <Timeline items={allExperiences} expState={handleExp} />}
                                   

                                </div>

                                <div className="w-1/2 overflow-auto">
                                    <div className='flex justify-center'>

                                        {exp != null ? (
                                            <div >
                                                <div className='m-8'>
                                                    <div className="flex justify-between mb-3">
                                                        <h3 className="text-3xl font-semibold text-gray-700">{exp.title}</h3>
                                                        <h1 className="text-gray-700 pt-1">From (DATE)-To (DATE)</h1>
                                                    </div>
                                                    <p className="mb-4 text-lg font-normal text-gray-700">
                                                        {exp.description}
                                                    </p>
                                                </div>

                                                <Features industry={null} travel={null} keywords={null} />
                                                <ProsAndCons pros={exp.pros} cons={exp.cons} />

                                                <h1 className='text-gray-700 flex items-center justify-center pt-24'>TODO Big picture section</h1>
                                                <h1 className='text-gray-700 flex items-center justify-center pt-24'>TODO Day in the life section</h1>

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