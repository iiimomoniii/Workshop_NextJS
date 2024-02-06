"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
}

export default function AuthProvider({ children }: {children : React.ReactNode }) {
    const router = useRouter();
    //Redirect to stock when http://localhost:3000/ => http://localhost:3000/stock
    router.push("/stock")
    return null;
//   return (
//     <div>{children}</div>
//   )
}