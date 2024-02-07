"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

type Props = {
}

export default function AuthProvider({ children }: {children : React.ReactNode }) {
    const router = useRouter();
    const path = usePathname();
    //Redirect to stock when http://localhost:3000/ => http://localhost:3000/stock
    //validate path 
    // if (path == "/") {
    //     router.push("/stock")
    //     return null;
    // }

    //use useEffect for route page
    useEffect(()=>{
        initialize()
    })

    const initialize = () => {
        if (path == "/") {
            router.push("/stock")
            return null;
        }
    }

    return (
    <div>{children}</div>
    )
}