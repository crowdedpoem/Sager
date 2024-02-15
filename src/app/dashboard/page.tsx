// import { useState, useEffect } from "react";
"use client"
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';
import PostGrid from './infinitePosts';
import { getHomeExperiences } from "../../../lib/calls";
import SearchServerParams from '@/components/SearchServerParams';

export default async function Page() {

    const [initData, setInitData] = useState(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            const data = await getHomeExperiences(2, 0);
            setInitData(data);
        };

        fetchExperiences();
    }, []);

    if (!initData) return <Loading />;

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className=" flex flex-wrap mb-4">
                    <SearchServerParams />
                </div>
                <Suspense fallback={<Loading />}>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        <PostGrid exps={initData} />
                    </div>
                </Suspense>

            </div>
        </>

    );
}
