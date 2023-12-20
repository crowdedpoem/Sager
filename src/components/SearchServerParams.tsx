"use client"

import { useCallback, useEffect, useState, useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useRef } from "react";


const SearchServerParams = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [debouncedValue, setDebouncedValue] = useState<string>("")
    const [mounted, setMounted] = useState<boolean>(false)
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    const handleSearchParams = useCallback(
        (debouncedValue: string) => {
            let params = new URLSearchParams(window.location.search)
            if (debouncedValue.length > 0) {
                params.set("search", debouncedValue)
            } else {
                params.delete("search")
            }
            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`)
            })
        },
        [pathname, router]
    )

    // EFFECT: Set Initial Params
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const searchQuery = params.get("search") ?? ""
        setInputValue(searchQuery)
    }, [])

    // EFFECT: Set Mounted
    useEffect(() => {
        if (debouncedValue.length > 0 && !mounted) {
            setMounted(true)
        }
    }, [debouncedValue, mounted])

    // EFFECT: Debounce Input Value
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [inputValue])

    // EFFECT: Search Params
    useEffect(() => {
        if (mounted) handleSearchParams(debouncedValue)
    }, [debouncedValue, handleSearchParams, mounted])

    const clickPoint = useRef<HTMLDivElement>(null);

    const handleFocus = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "none";
        }
    };

    const handleBlur = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "block";
        }
    };

    return (
        <div className="flex-1" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input
                type="text"
                className="block p-2 pl-10 w-full object-fill text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                placeholder="Search"
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            </div>
        </div>
    )
}

export default SearchServerParams