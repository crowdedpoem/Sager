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
        const fetchData = () => {
            // Update the loading state
            setInitData(null);

            // Fetch data from the client
            getHomeExperiences(2, 0)
                .then(data => {
                    // Update state with fetched data
                    setInitData(data);
                })
                .catch(error => {
                    // Handle errors if any
                    console.error('Error fetching data:', error);
                });
        };

        fetchData();
    }, []);

    if (!initData) return <Loading />;

    return (
        <>
            <div className="container my-12 mx-auto px-4">
                <div className="">
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
