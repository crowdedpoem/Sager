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
            <div className="container my-12 mx-auto px-4">
                <div className="">
                    <SearchServerParams />
                </div>
                
                <PostGrid exps={initData} />

            </div>
        </>

    );
}
