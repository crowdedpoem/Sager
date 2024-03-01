// import { useState, useEffect } from "react";
"use client"
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';
import PostGrid from './infinitePosts';
import { getHomeExperiences, getSearchedExperiences } from "../../../lib/calls";
import SearchServerParams from '@/components/SearchServerParams';
import { PiCornersOutLight } from 'react-icons/pi';
import { useRouter } from "next/navigation"
import { useInfiniteQuery } from '@tanstack/react-query';


export default async function Page() {

    const [initData, setInitData] = useState(null);
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [query, setQuery] = useState('');
    const [mode, setMode] = useState('home');
    const [getPostFunction, setGetPostFunction] = useState(() => getHomeExperiences);
    const router = useRouter();

    useEffect(() => {
        if (mode === 'search' && query) {
            // Wrap the async call in a function that matches the expected signature
            const searchFunction = async (take: number, page: number) => {
                return getSearchedExperiences(query)(take, page);
            };
            setGetPostFunction(() => searchFunction);
        } else {
            // Reset to default when not in search mode
            setGetPostFunction(() => getHomeExperiences);
        }
    }, [mode, query]);

    // const [getPostFunction, setGetPostFunction] = useState<(take: number, page: number) => Promise<any>>(() => getHomeExperiences);

    // useEffect(() => {
    //     // Example of setting the state with parameters
    //     setGetPostFunction(() => (take: number, page: number) => getHomeExperiences(take, page));
    // }, []); 
    useEffect(() => {
        const fetchExperiences = async () => {
            const data = await getHomeExperiences(2, 0);
            setInitData(data);
        };
        fetchExperiences();
    }, []);
    
    const startSearch = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('search')!;
        setQuery(query); // Update the query state
        // setMode('search'); // Switch mode to 'search'
        router.push(`/dashboard/search/${query}`)
    };

    useEffect(() => {
        
        const fetchExperiences = async () => {
            const data = await getHomeExperiences(2, 0);
            setInitData(data);
        };

        fetchExperiences();
    }, []);

    

    return (
        <>
            <div className="container my-12 mx-auto px-4">
                <div className="">
                    <SearchServerParams />
                    <button onClick={startSearch} type="button">atlas search</button>
                </div>

                {/* <PostGrid getPostFunction={getPostFunction} exps={[]} /> */}
                
                <PostGrid getDataFunction={getHomeExperiences} id="home" />
             
             
                
            </div>
        </>

    );
}
