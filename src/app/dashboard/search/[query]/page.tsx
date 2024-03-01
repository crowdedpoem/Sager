// "use server"
"use client"

// import { useState, useEffect } from "react";

import { getSearchedExperiences } from "../../../../../lib/calls";
import PostGrid from "../../infinitePosts";
import Loading from "../../loading";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";




export default async function Page(
    { params }: any
) {

    

    // const [getPostFunction, setGetPostFunction] = useState<(take: number, page: number) => Promise<any>>(() => getHomeExperiences);

    // useEffect(() => {
    //     // Example of setting the state with parameters
    //     setGetPostFunction(() => (take: number, page: number) => getHomeExperiences(take, page));
    // }, []); 
    let query = params.query;

    // if (!initData) return <Loading />

    return (
        <>
            <div className="container my-12 mx-auto px-4">

            <PostGrid getDataFunction={getSearchedExperiences(query)} id="search"/>
              
                
            </div>
        </>

    );
}
