"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createUrl } from "@/app/lib/utils";

export default function Search() {

    const searchParams = useSearchParams();

    const router = useRouter();
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const val = e.target as HTMLFormElement;
        const search = val.search as HTMLInputElement;
        const newParams = new URLSearchParams(searchParams.toString());

        if(search.value) {
            newParams.set("q", search.value);
        }else{
            newParams.delete("q");
        }

        router.push(createUrl("/search", newParams));
    }


    return (

    

        <form onSubmit={onSubmit} className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
          <input 
            key={searchParams?.get("q")} 
            type="text" 
            name = "search" 
            placeholder="Search for products..." 
            autoComplete="off" 
            defaultValue={searchParams?.get("q") || ""}
            className="text-md w-full rounded-lg border bg-white px-4 py-2 "></input>
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">

            </div>
        </form>
  );
}

export function SearchSkeleton() {
    return (
        <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
            <input type="text" placeholder="Search for products..." className="text-md w-full rounded-lg border bg-white px-4 py-2 "></input>
        </form>
    )
}