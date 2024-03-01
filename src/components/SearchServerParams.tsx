"use client"

import { useCallback, useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { normalize } from "@/app/libs/normalize";
import { useRef } from "react";


const SearchServerParams = () => {
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");
    const [mounted, setMounted] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleSearchParams = useCallback(
        (newDebouncedValue: string) => {
            let params = new URLSearchParams(window.location.search);
            if (newDebouncedValue.length > 0) {
                params.set("search", newDebouncedValue);
                // const response = getSearchedExperiences(newDebouncedValue);
            } else {
                params.delete("search");
            }
            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`);
            });
        },
        [pathname, router]
    );

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const searchQuery = params.get("search") ?? "";
        setInputValue(normalize(searchQuery));
    }, []);

    useEffect(() => {
        if (debouncedValue.length > 0 && !mounted) {
            setMounted(true);
        }
    }, [debouncedValue, mounted]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [inputValue]);

    useEffect(() => {
        if (mounted) handleSearchParams(debouncedValue);
    }, [debouncedValue, handleSearchParams, mounted]);

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
        <div>
            <div className="relative mb-8 grow">
                {/* Search input and its icon */}
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    {/* ... SVG and input JSX */}
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search"
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col pl-4 space-y-1"> {/* Adjusted for vertical stacking */}
                    {debouncedValue && (
                        <span className="text-sm font-medium text-gray-700">
                            Showing results for "{debouncedValue}" <br />
                        </span>
                    )}
                    {/* <span className="text-sm font-medium text-gray-700">7 results</span> */}
                </div>
                <div className="relative pr-4">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Sort
                    </button>

                    {/* Dropdown content */}
                    {isDropdownOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                                {/* Dropdown items */}
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-0"
                                >
                                    Recently Updated
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-1"
                                >
                                    Most Upvoted
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-1"
                                >
                                    Alphabetical
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchServerParams;
