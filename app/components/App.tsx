"use client"
import { signOut } from "next-auth/react";

export function Appbar() {
    function Signout(){
        signOut()
    }
    return <div>
        <div className="flex justify-between items-center text-slate-900 p-3 font-semibold border boder-b">
            <div className="flex justify-center items-center">
                <div className="text-2xl">
                    Medium 
                </div>
                <div className="mt-1 ml-3 text-sm text-slate-500 rounded-lg bg-slate-100 p-2 px-10 font-semibold">
                    Search 
                </div>
            </div>
            <div className="flex">
                <div className="mr-3 text-md text-slate-500">
                    Write
                </div>
                <div className="mr-3 text-md text-slate-500">
                    Bell
                </div>
                <div>
                    <button onClick={Signout}>
                        SignOut
                    </button>
                </div>
            </div>
            
        </div>
    </div> 
}
