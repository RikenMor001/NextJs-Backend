"use client"
import { signOut } from "next-auth/react";


export function Appbar(){
    return <div>
        <div className="flex justify-between items-center bg-slate-900 text-white p-3 font-semibold">
            <div>
                Medium 
            </div>
            <div>
                <button onClick={
                    () => signOut()
                }>
                    Sign Out
                </button>
            </div>
        </div>
    </div> 
}