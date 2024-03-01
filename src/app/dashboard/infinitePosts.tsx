"use client"
import axios from "axios";
// import { useState, useEffect } from "react";
import SearchServerParams from "@/components/SearchServerParams";
import { Suspense, useEffect, useRef } from 'react'
import Link from 'next/link';
import Loading from './loading'
import { getAllExperiences, getHomeExperiences, getSearchedExperiences } from "../../../lib/calls";
import { getFilteredExperinces } from "../../../lib/calls";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from '@mantine/hooks';
import PostCard from "./postCard";

interface Exp {
    userId: number;
    title: string;
    description: string;
    updatedAt: string;
}

interface PostGridProps {
    getDataFunction: (take: number, page: number) => Promise<Exp[]>;
    id: string
  }


const PostGrid: React.FC<PostGridProps> = ({ getDataFunction, id }) => {
    

    const lastPostRef = useRef<HTMLElement>(null)
    const { ref, entry } = useIntersection({
        root: lastPostRef.current,
        threshold: 1
    })

    // if (!initData) return <Loading />;
    const { data, fetchNextPage } = useInfiniteQuery(
        [id],
        ({ pageParam = 0 }) => {
            // http://localhost:3000/api/getHomeExperiences?isDistinct=true   
            // should also have ?page=1?take=2
            //  params: { isDistinct: true, page: undefined, take: undefined },
            const response =  getDataFunction(2, pageParam);
            return response
        },
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1
            },
            initialData: {
                pages: [],
                pageParams: [0]
            }
        }
    )

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage()
    }, [entry])

    const posts = data?.pages.flatMap((page) => page) ?? []
    return (
        <>
            {/* <Suspense fallback={<Loading />}> */}
                <div className="flex flex-wrap w-full">
                    {posts.map((exp, index) => {
                        if (index === posts.length) return <PostCard key={index} exp={exp} ref={ref} />
                        return <PostCard key={index} exp={exp} ref={ref} />
                        // return <p>{JSON.stringify(exp)}</p>
                    })}
                </div>
            {/* </Suspense> */}
        </>

    );
}

export default PostGrid