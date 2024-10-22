"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function Appbar() {
    const router = useRouter();
    const [ serach, setSearch ] = useState<string>(" ");

    function Signout(){
        signOut();
        router.push("/signin")
    }

    return <div>
        <div className="flex justify-between items-center text-slate-900 p-3 font-semibold border boder-b">
            <div className="flex justify-center items-center">
                <div className="text-2xl">
                    Medium 
                </div>
                <div>
                <Input
                placeholder="Search"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                />
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

// onChange: (e: ChangeEvent<HTMLInputElement>) => void

interface SearchProps {
    placeholder: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({placeholder, type, onChange}: SearchProps){
    return <div>
        <input
            placeholder = { placeholder }
            type = { type }
            onChange = {onChange}
            className="mt-1 ml-3 text-sm text-slate-500 rounded-lg bg-slate-100 py-2 px-2 font-semibold border border-slate-200"
        />
    </div>        
}
