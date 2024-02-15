"use client"
import axios from "axios";
// import { useState, useEffect } from "react";
import SearchServerParams from "@/components/SearchServerParams";
import { Suspense, useEffect, useRef } from 'react'
import Link from 'next/link';
import Loading from './loading'
import { getAllExperiences, getHomeExperiences } from "../../../lib/calls";
import { getFilteredExperinces } from "../../../lib/calls";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from '@mantine/hooks';
import PostCard from "./postCard";

interface Exp {
    userId: number;
    title: string;
    description: string;
    updatedAt: string;
}

const PostGrid: React.FC<{ exps: Exp[] }> = ({ exps }) => {

    const { data, fetchNextPage } = useInfiniteQuery(
        ['query'],
        ({ pageParam = 1 }) => {
            const response = getHomeExperiences(2, pageParam)
            return response
        },
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1
            },
            initialData: {
                pages: [exps],
                pageParams: [1]
            }
        }
    )

    const lastPostRef = useRef<HTMLElement>(null)
    const { ref, entry } = useIntersection({
        root: lastPostRef.current,
        threshold: 1
    })

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage()
    }, [entry])

    const posts = data?.pages.flatMap((page) => page) ?? []

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className=" flex flex-wrap mb-4">

                </div>
                <Suspense fallback={<Loading />}>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {posts.map((exp, index) => {
                            if (index === posts.length) return <PostCard key={index} exp={exp} ref={ref} />
                            return <PostCard key={index} exp={exp} ref={ref} />
                        })}
                    </div>
                </Suspense>

            </div>
        </>

    );
}

export default PostGrid